/*!
 * Copyright 2021 Cognite AS
 */
import { CadNode } from './CadNode';
import { CadMaterialManager } from './CadMaterialManager';
import { NodeAppearanceProvider } from './NodeAppearance';
import { CadModelMetadata } from '.';

export class CadModelFactory {
  private readonly _materialManager: CadMaterialManager;
  constructor(materialManager: CadMaterialManager) {
    this._materialManager = materialManager;
  }

  createModel(modelMetadata: CadModelMetadata, nodeAppearanceProvider?: NodeAppearanceProvider): CadNode {
    const { blobUrl, scene } = modelMetadata;
    const cadModel = new CadNode(modelMetadata, this._materialManager);
    this._materialManager.addModelMaterials(blobUrl, scene.maxTreeIndex);

    if (nodeAppearanceProvider) {
      this._materialManager.setNodeAppearanceProvider(blobUrl, nodeAppearanceProvider);
    }

    this._materialManager.updateModelNodes(blobUrl, [...Array(scene.maxTreeIndex + 1).keys()]);

    return cadModel;
  }
}
