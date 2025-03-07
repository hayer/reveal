/*!
 * Copyright 2022 Cognite AS
 */
export { Cognite3DViewer } from './src/public/migration/Cognite3DViewer';
export { Cognite3DModel } from '@reveal/cad-model';

export { ViewerState, ModelState } from './src/utilities/ViewStateHelper';

export * from './src/public/types';

// Export ThreeJS to enable easy import for our users
import * as THREE from 'three';
export { THREE };

const REVEAL_VERSION = process.env.VERSION;
export { REVEAL_VERSION };
