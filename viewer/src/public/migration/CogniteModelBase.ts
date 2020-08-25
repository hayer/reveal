/*!
 * Copyright 2020 Cognite AS
 */

import { SupportedModelTypes } from '../types';

/**
 * Base class for 3D models supported by {@link Cognite3DViewer}.
 * @module @cognite/reveal
 */
export interface CogniteModelBase {
  readonly type: SupportedModelTypes;
  dispose(): void;
  getModelBoundingBox(outBbox?: THREE.Box3): THREE.Box3;
  /** @internal */
  updateTransformation(matrix: THREE.Matrix4): void;
}
