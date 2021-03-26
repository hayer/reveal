/*!
 * Copyright 2021 Cognite AS
 */

import { CadManager } from './CadManager';
import { CadMetadataParser } from './parsers/CadMetadataParser';
import { CadModelMetadataRepository } from './CadModelMetadataRepository';
import { CadModelFactory } from './CadModelFactory';
import { CadModelUpdateHandler } from './CadModelUpdateHandler';
import { CadMaterialManager } from './CadMaterialManager';
import { CadSectorParser } from './sector/CadSectorParser';
import { CachedRepository } from './sector/CachedRepository';
import { SimpleAndDetailedToSector3D } from './sector/SimpleAndDetailedToSector3D';
import {
  ByVisibilityGpuSectorCuller,
  ByVisibilityGpuSectorCullerOptions
} from './sector/culling/ByVisibilityGpuSectorCuller';
import { LocalModelDataClient } from '../../utilities/networking/LocalModelDataClient';
import { CdfModelDataClient } from '../../utilities/networking/CdfModelDataClient';
import { LocalModelIdentifier, CdfModelIdentifier, ModelDataClient } from '../../utilities/networking/types';
import { RevealOptions } from '../../public/types';
import { AlreadyLoadedGeometryDepthTextureProvider } from './sector/culling/AlreadyLoadedGeometryTextureProvider';

export function createLocalCadManager(
  client: LocalModelDataClient,
  materialManager: CadMaterialManager,
  alreadyLoadedGeometryProvider: AlreadyLoadedGeometryDepthTextureProvider,
  options: RevealOptions = {}
): CadManager<LocalModelIdentifier> {
  return createCadManager(client, materialManager, alreadyLoadedGeometryProvider, options);
}
export function createCdfCadManager(
  client: CdfModelDataClient,
  materialManager: CadMaterialManager,
  alreadyLoadedGeometryProvider: AlreadyLoadedGeometryDepthTextureProvider,
  options: RevealOptions = {}
): CadManager<CdfModelIdentifier> {
  return createCadManager(client, materialManager, alreadyLoadedGeometryProvider, options);
}

export function createCadManager<T>(
  client: ModelDataClient<T>,
  materialManager: CadMaterialManager,
  alreadyLoadedGeometryProvider: AlreadyLoadedGeometryDepthTextureProvider,
  options: RevealOptions
): CadManager<T> {
  const cadMetadataParser = new CadMetadataParser();
  const cadModelMetadataRepository = new CadModelMetadataRepository(client, cadMetadataParser);
  const cadModelFactory = new CadModelFactory(materialManager);
  const modelDataParser = new CadSectorParser();
  const modelDataTransformer = new SimpleAndDetailedToSector3D(materialManager);
  const cachedSectorRepository = new CachedRepository(client, modelDataParser, modelDataTransformer);
  const { internal } = options;
  const cullerOptions: ByVisibilityGpuSectorCullerOptions = {
    alreadyLoadedGeometryDepthTextureProvider: alreadyLoadedGeometryProvider
  };
  const sectorCuller =
    internal && internal.sectorCuller ? internal.sectorCuller : new ByVisibilityGpuSectorCuller(cullerOptions);
  const cadModelUpdateHandler = new CadModelUpdateHandler(cachedSectorRepository, sectorCuller);
  return new CadManager(materialManager, cadModelMetadataRepository, cadModelFactory, cadModelUpdateHandler);
}
