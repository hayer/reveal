/*!
 * Copyright 2021 Cognite AS
 */
import * as THREE from 'three';

import { RevealOptions } from './types';
import { RevealManager } from './RevealManager';

import { MetricsLogger } from '@reveal/metrics';
import {
  RenderOptions,
  CadMaterialManager,
  PointCloudMaterialManager,
  BasicPipelineExecutor,
  DefaultRenderPipelineProvider
} from '@reveal/rendering';
import { createPointCloudManager } from '@reveal/pointclouds';
import {
  ModelMetadataProvider,
  CdfModelMetadataProvider,
  LocalModelMetadataProvider,
  LocalModelDataProvider,
  ModelDataProvider,
  CdfModelDataProvider
} from '@reveal/data-providers';

import { CogniteClient } from '@cognite/sdk';
import { SceneHandler } from '@reveal/utilities';
import { createCadManager } from '@reveal/cad-geometry-loaders';

/**
 * Used to create an instance of reveal manager that works with localhost.
 * @param renderer
 * @param sceneHandler
 * @param revealOptions
 * @returns RevealManager instance.
 */
export function createLocalRevealManager(
  renderer: THREE.WebGLRenderer,
  sceneHandler: SceneHandler,
  revealOptions: RevealOptions = {}
): RevealManager {
  const modelMetadataProvider = new LocalModelMetadataProvider();
  const modelDataProvider = new LocalModelDataProvider();
  return createRevealManager(
    'local',
    'local-dataSource-appId',
    modelMetadataProvider,
    modelDataProvider,
    renderer,
    sceneHandler,
    revealOptions
  );
}

/**
 * Used to create an instance of reveal manager that works with the CDF.
 * @param client
 * @param renderer
 * @param sceneHandler
 * @param revealOptions
 */
export function createCdfRevealManager(
  client: CogniteClient,
  renderer: THREE.WebGLRenderer,
  sceneHandler: SceneHandler,
  revealOptions: RevealOptions = {}
): RevealManager {
  const applicationId = getSdkApplicationId(client);
  const modelMetadataProvider = new CdfModelMetadataProvider(client);
  const modelDataProvider = new CdfModelDataProvider(client);
  return createRevealManager(
    client.project,
    applicationId,
    modelMetadataProvider,
    modelDataProvider,
    renderer,
    sceneHandler,
    revealOptions
  );
}

/**
 * Used to create an instance of reveal manager.
 * @internal
 * @param project
 * @param applicationId
 * @param modelMetadataProvider
 * @param modelDataProvider
 * @param renderer
 * @param sceneHandler
 * @param revealOptions
 */
export function createRevealManager(
  project: string,
  applicationId: string,
  modelMetadataProvider: ModelMetadataProvider,
  modelDataProvider: ModelDataProvider,
  renderer: THREE.WebGLRenderer,
  sceneHandler: SceneHandler,
  revealOptions: RevealOptions = {}
): RevealManager {
  MetricsLogger.init(revealOptions.logMetrics !== false, project, applicationId, {
    constructorOptions: revealOptions
  });

  const renderOptions: RenderOptions = revealOptions?.renderOptions ?? {};
  const cadMaterialManager = new CadMaterialManager();
  const pointCloudMaterialManager = new PointCloudMaterialManager();
  const pipelineExecutor = new BasicPipelineExecutor(renderer, {
    autoResizeRenderer: true,
    resolutionThreshold: revealOptions.rendererResolutionThreshold
  });
  const defaultRenderPipeline = new DefaultRenderPipelineProvider(
    cadMaterialManager,
    pointCloudMaterialManager,
    sceneHandler,
    renderOptions,
    revealOptions.outputRenderTarget
  );
  const pointCloudManager = createPointCloudManager(
    modelMetadataProvider,
    modelDataProvider,
    pointCloudMaterialManager,
    sceneHandler.scene,
    renderer
  );
  sceneHandler.customObjects.push(pointCloudManager.pointCloudGroupWrapper);
  const cadManager = createCadManager(modelMetadataProvider, modelDataProvider, cadMaterialManager, {
    ...revealOptions.internal?.cad,
    continuousModelStreaming: revealOptions.continuousModelStreaming
  });
  return new RevealManager(cadManager, pointCloudManager, pipelineExecutor, defaultRenderPipeline);
}

/**
 * Determines the `appId` of the `CogniteClient` provided.
 * @param sdk Instance of `CogniteClient`.
 * @returns Application ID or 'unknown' if not found.
 */
function getSdkApplicationId(sdk: CogniteClient): string {
  const headers = sdk.getDefaultRequestHeaders();
  return headers['x-cdp-app'] ?? 'unknown';
}
