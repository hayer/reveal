/*!
 * Copyright 2021 Cognite AS
 */

import * as THREE from 'three';

import { CadModelMetadata, SectorCuller } from '../../../../internals';
import { WantedSector } from '../types';
import {
  addSectorCost,
  DetermineSectorCostDelegate,
  DetermineSectorsInput,
  PrioritizedWantedSector,
  SectorCost,
  SectorLoadingSpent
} from './types';
import { computeSectorCost } from './computeSectorCost';
import assert from 'assert';
import { LevelOfDetail } from '../LevelOfDetail';
import { CadModelSectorBudget } from '../../CadModelSectorBudget';
import { traverseDepthFirst } from '../../../../utilities';
import { WeightFunctionsHelper } from './WeightFunctionsHelper';

export type ByScreenSizeSectorCullerOptions = {
  /**
   * Optional callback for determining the cost of a sector. The default unit of the cost
   * function is bytes downloaded.
   */
  determineSectorCost?: DetermineSectorCostDelegate;
};

export class ByScreenSizeSectorCuller implements SectorCuller {
  private readonly _determineSectorCost: DetermineSectorCostDelegate;

  constructor(options?: ByScreenSizeSectorCullerOptions) {
    this._determineSectorCost = options?.determineSectorCost || computeSectorCost;
  }

  determineSectors(input: DetermineSectorsInput): {
    wantedSectors: WantedSector[];
    spentBudget: SectorLoadingSpent;
  } {
    if (input.clippingPlanes !== null && input.clippingPlanes.length > 0) {
      throw new Error('Clipping planes not supported');
    }
    const takenSectors = new ScheduledSectorTree(this._determineSectorCost);

    const { cadModelsMetadata, camera } = input;
    const cameraMatrixWorldInverse = camera.matrixWorldInverse;
    const cameraProjectionMatrix = camera.projectionMatrix;

    const weightFunctions = new WeightFunctionsHelper(camera);

    const transformedCameraMatrixWorldInverse = new THREE.Matrix4();
    const transformedBounds = new THREE.Box3();
    const candidateSectors = new Array<{
      model: CadModelMetadata;
      sectorId: number;
      priority: number;
      debugStuff: any;
    }>();
    let insideSectors = 0;
    const insideLeafSectors = 0;

    cadModelsMetadata.map(model => {
      takenSectors.initializeScene(model);
      transformedCameraMatrixWorldInverse.multiplyMatrices(cameraMatrixWorldInverse, model.modelMatrix);

      const sectors = model.scene.getSectorsIntersectingFrustum(
        cameraProjectionMatrix,
        transformedCameraMatrixWorldInverse
      );
      weightFunctions.addCandidateSectors(sectors, model.modelMatrix);
    });

    cadModelsMetadata.map(model => {
      const sectors = model.scene.getSectorsIntersectingFrustum(
        cameraProjectionMatrix,
        transformedCameraMatrixWorldInverse
      );

      sectors.forEach(sector => {
        weightFunctions.computeTransformedSectorBounds(sector, model.modelMatrix, transformedBounds);

        // const levelWeightImportance = 3.0;
        // const distanceToImportance = 0.3;
        // const screenAreaImportance = 0.7;
        // const frustumDepthImportance = 0.5;
        const levelWeightImportance = 2.0;
        const distanceToImportance = 1.0;
        const screenAreaImportance = 0.3;
        const frustumDepthImportance = 0.2;
        const nodeScreenSizeImportance = 1.0;

        // Weight "level 2" sectors really high
        const levelWeight = weightFunctions.computeSectorTreePlacementWeight(sector);
        const distanceToCameraWeight = weightFunctions.computeDistanceToCameraWeight(transformedBounds);
        const screenAreaWeight = weightFunctions.computeScreenAreaWeight(transformedBounds);
        const frustumDepthWeight = weightFunctions.computeFrustumDepthWeight(transformedBounds);
        const nodeScreenSizeWeight =
          sector.maxDiagonalLength !== undefined
            ? weightFunctions.computeMaximumNodeScreensizeWeight(transformedBounds, sector.maxDiagonalLength)
            : 1.0;

        const priority =
          levelWeightImportance * levelWeight +
          distanceToImportance * distanceToCameraWeight +
          screenAreaImportance * screenAreaWeight +
          frustumDepthImportance * frustumDepthWeight +
          nodeScreenSizeImportance * nodeScreenSizeWeight;

        if (distanceToCameraWeight === 1.0) {
          insideSectors++;
        }

        candidateSectors.push({
          model,
          sectorId: sector.id,
          priority,
          debugStuff: {
            levelWeight,
            distanceToCameraWeight,
            screenAreaWeight,
            frustumDepthWeight,
            nodeScreenSizeWeight,
            priority,
            camera: camera.clone(),
            transformedBounds: transformedBounds.clone()
          }
        });
      });
    });
    candidateSectors.sort((left, right) => {
      return right.priority - left.priority;
    });

    let takenSectorCount = 0;
    for (let i = 0; takenSectors.isWithinBudget(input.budget) && i < candidateSectors.length; ++i) {
      const { model, sectorId, priority } = candidateSectors[i];
      takenSectors.markSectorDetailed(model, sectorId, priority);
      takenSectorCount = i;
    }

    console.log('Scheduled', takenSectorCount, 'of', candidateSectors.length, 'candidates');

    const wanted = takenSectors.collectWantedSectors();
    const spentBudget = takenSectors.computeSpentBudget();

    console.log(
      'Scheduled sectors\n',
      candidateSectors
        .slice(0, takenSectorCount)
        .map(x => ({ ...x, sector: x.model.scene.getSectorById(x.sectorId) }))
        .sort(x => x.priority)
    );
    console.log(
      'Candidates:\n',
      candidateSectors.slice().sort((left, right) => left.sectorId - right.sectorId)
    );
    console.log(`Inside sectors: ${insideSectors} (${insideLeafSectors} leafs)`);

    const takenPriorities = candidateSectors
      .slice(0, takenSectorCount)
      .map(x => x.priority)
      .sort((a, b) => a - b);
    const meanPriority = takenPriorities[Math.floor(takenPriorities.length / 2)];
    const notAcceptedPriority =
      candidateSectors.length > takenSectorCount ? candidateSectors[takenSectorCount].priority : -1;
    console.log(
      `Sector priority. Min: ${Math.min(...takenPriorities)}, max: ${Math.max(
        ...takenPriorities
      )}, mean: ${meanPriority}, first not accepted: ${notAcceptedPriority}`
    );
    console.log('Budget:', { ...input.budget }, 'Spent:', { ...spentBudget });

    return { spentBudget, wantedSectors: wanted };
  }

  filterSectorsToLoad(_input: DetermineSectorsInput, wantedSectorsBatch: WantedSector[]): Promise<WantedSector[]> {
    return Promise.resolve(wantedSectorsBatch);
  }

  dispose(): void {}
}

class ScheduledSectorTree {
  private readonly determineSectorCost: DetermineSectorCostDelegate;
  private readonly _totalCost: SectorCost = { downloadSize: 0, drawCalls: 0, renderCost: 0 };
  private readonly _models = new Map<string, { model: CadModelMetadata; sectorIds: Map<number, number> }>();

  get totalCost(): SectorCost {
    return { ...this._totalCost };
  }

  constructor(determineSectorCost: DetermineSectorCostDelegate) {
    this.determineSectorCost = determineSectorCost;
  }

  initializeScene(modelMetadata: CadModelMetadata) {
    this._models.set(modelMetadata.modelIdentifier, { model: modelMetadata, sectorIds: new Map<number, number>() });
  }

  getWantedSectorCount(): number {
    let count = 0;
    this._models.forEach(x => {
      count += x.sectorIds.size;
    });
    return count;
  }

  markSectorDetailed(model: CadModelMetadata, sectorId: number, priority: number) {
    const addParents = false;

    const entry = this._models.get(model.modelIdentifier);
    assert(!!entry, `Could not find sector tree for ${model.modelIdentifier}`);

    const allSectors = model.scene.getAllSectors();
    const { sectorIds } = entry!;
    let nextSectorIdToAdd = sectorId;
    if (nextSectorIdToAdd !== -1 && !sectorIds.has(nextSectorIdToAdd)) {
      const existingPriority = sectorIds.get(nextSectorIdToAdd);
      if (existingPriority === undefined) {
        const sectorMetadata = model.scene.getSectorById(sectorId);
        assert(sectorMetadata !== undefined);

        const sectorCost = this.determineSectorCost(sectorMetadata!, LevelOfDetail.Detailed);
        addSectorCost(this._totalCost, sectorCost);

        sectorIds.set(nextSectorIdToAdd, priority);
      } else {
        sectorIds.set(nextSectorIdToAdd, Math.max(priority, existingPriority));
      }
      const parent = allSectors.find(x => x.children.findIndex(x => x.id === nextSectorIdToAdd));
      nextSectorIdToAdd = addParents && parent !== undefined ? parent.id : -1;
    }
  }

  isWithinBudget(budget: CadModelSectorBudget): boolean {
    return (
      this._totalCost.downloadSize < budget.geometryDownloadSizeBytes &&
      this._totalCost.drawCalls < budget.maximumNumberOfDrawCalls &&
      this._totalCost.renderCost < budget.maximumRenderCost
    );
  }

  collectWantedSectors(): PrioritizedWantedSector[] {
    const allWanted = new Array<PrioritizedWantedSector>();

    // Collect sectors
    for (const [modelIdentifier, sectorsContainer] of this._models) {
      const { model, sectorIds } = sectorsContainer;

      const allSectorsInModel = new Map<number, PrioritizedWantedSector>();
      traverseDepthFirst(model.scene.root, sector => {
        allSectorsInModel.set(sector.id, {
          modelIdentifier,
          modelBaseUrl: model.modelBaseUrl,
          geometryClipBox: null,
          levelOfDetail: LevelOfDetail.Discarded,
          metadata: sector,
          priority: -1
        });
        return true;
      });
      for (const [sectorId, priority] of sectorIds) {
        const sector = model.scene.getSectorById(sectorId)!;
        const wantedSector: PrioritizedWantedSector = {
          modelIdentifier,
          modelBaseUrl: model.modelBaseUrl,
          geometryClipBox: null,
          levelOfDetail: LevelOfDetail.Detailed,
          metadata: sector,
          priority
        };
        allSectorsInModel.set(sectorId, wantedSector);
      }

      allSectorsInModel.forEach(x => allWanted.push(x));
    }

    // Sort by priority
    allWanted.sort((l, r) => r.priority - l.priority);
    return allWanted;
  }

  computeSpentBudget(): SectorLoadingSpent {
    const wanted = this.collectWantedSectors();
    const models = Array.from(this._models.values()).map(x => x.model);
    const nonDiscarded = wanted.filter(x => x.levelOfDetail !== LevelOfDetail.Discarded);

    const totalSectorCount = models.reduce((sum, x) => sum + x.scene.sectorCount, 0);
    const takenSectorCount = nonDiscarded.length;
    const takenSimpleCount = nonDiscarded.filter(x => x.levelOfDetail === LevelOfDetail.Simple).length;
    const forcedDetailedSectorCount = nonDiscarded.filter(x => !Number.isFinite(x.priority)).length;
    const accumulatedPriority = nonDiscarded
      .filter(x => Number.isFinite(x.priority) && x.priority > 0)
      .reduce((sum, x) => sum + x.priority, 0);

    const spentBudget: SectorLoadingSpent = {
      drawCalls: this.totalCost.drawCalls,
      downloadSize: this.totalCost.downloadSize,
      renderCost: this.totalCost.renderCost,
      totalSectorCount,
      forcedDetailedSectorCount,
      loadedSectorCount: takenSectorCount,
      simpleSectorCount: takenSimpleCount,
      detailedSectorCount: takenSectorCount - takenSimpleCount,
      accumulatedPriority
    };

    return spentBudget;
  }

  clear() {
    this._models.clear();
  }
}
