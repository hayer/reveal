/*!
 * Copyright 2021 Cognite AS
 */

import * as THREE from 'three';
import { sectorShaders, shaderDefines } from './shaders';
import { RenderMode } from './RenderMode';

import matCapTextureImage from './matCapTextureData';

export interface Materials {
  // Materials
  box: THREE.RawShaderMaterial;
  circle: THREE.RawShaderMaterial;
  generalRing: THREE.RawShaderMaterial;
  nut: THREE.RawShaderMaterial;
  quad: THREE.RawShaderMaterial;
  cone: THREE.RawShaderMaterial;
  eccentricCone: THREE.RawShaderMaterial;
  sphericalSegment: THREE.RawShaderMaterial;
  torusSegment: THREE.RawShaderMaterial;
  generalCylinder: THREE.RawShaderMaterial;
  trapezium: THREE.RawShaderMaterial;
  ellipsoidSegment: THREE.RawShaderMaterial;
  instancedMesh: THREE.RawShaderMaterial;
  triangleMesh: THREE.RawShaderMaterial;
  simple: THREE.RawShaderMaterial;
}

export function createMaterials(
  renderMode: RenderMode,
  clippingPlanes: THREE.Plane[],
  overrideColorPerTreeIndex: THREE.DataTexture,
  transformOverrideIndexTexture: THREE.DataTexture,
  transformOverrideLookupTexture: THREE.DataTexture
): Materials {
  const matCapTexture = new THREE.Texture(matCapTextureImage);
  matCapTexture.needsUpdate = true;

  const boxMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Box)',
    clipping: true,
    clippingPlanes,
    vertexShader: sectorShaders.boxPrimitive.vertex,
    fragmentShader: sectorShaders.boxPrimitive.fragment,
    side: THREE.DoubleSide,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },
    glslVersion: THREE.GLSL3
  });

  const circleMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Circle)',
    clipping: true,
    clippingPlanes,
    vertexShader: sectorShaders.circlePrimitive.vertex,
    fragmentShader: sectorShaders.circlePrimitive.fragment,
    // TODO double side is not necessary for all,
    // we should indicate this in the data from Rust
    side: THREE.DoubleSide,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },
    glslVersion: THREE.GLSL3
  });

  const nutMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Nuts)',
    clipping: true,
    clippingPlanes,
    vertexShader: sectorShaders.nutPrimitive.vertex,
    fragmentShader: sectorShaders.nutPrimitive.fragment,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const quadMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Quads)',
    clipping: true,
    clippingPlanes,
    vertexShader: sectorShaders.quadPrimitive.vertex,
    fragmentShader: sectorShaders.quadPrimitive.fragment,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const generalRingMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (General rings)',
    clipping: true,
    clippingPlanes,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },
    vertexShader: sectorShaders.generalRingPrimitive.vertex,
    fragmentShader: sectorShaders.generalRingPrimitive.fragment,
    // TODO we can avoid drawing DoubleSide if we flip the ring in Rust and adjust the angle and
    // arc_angle accordingly
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const coneMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Cone)',
    clipping: true,
    clippingPlanes,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },
    vertexShader: sectorShaders.conePrimitive.vertex,
    fragmentShader: sectorShaders.conePrimitive.fragment,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const eccentricConeMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Eccentric cone)',
    clipping: true,
    clippingPlanes,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },
    vertexShader: sectorShaders.eccentricConePrimitive.vertex,
    fragmentShader: sectorShaders.eccentricConePrimitive.fragment,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const ellipsoidSegmentMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Ellipsoid segments)',
    clipping: true,
    clippingPlanes,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },

    vertexShader: sectorShaders.ellipsoidSegmentPrimitive.vertex,
    fragmentShader: sectorShaders.ellipsoidSegmentPrimitive.fragment,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const generalCylinderMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (General cylinder)',
    clipping: true,
    clippingPlanes,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      },
      cameraPosition: {
        value: new THREE.Vector3()
      }
    },
    vertexShader: sectorShaders.generalCylinderPrimitive.vertex,
    fragmentShader: sectorShaders.generalCylinderPrimitive.fragment,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const trapeziumMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Trapezium)',
    clipping: true,
    clippingPlanes,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },
    vertexShader: sectorShaders.trapeziumPrimitive.vertex,
    fragmentShader: sectorShaders.trapeziumPrimitive.fragment,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const torusSegmentMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Torus segment)',
    clipping: true,
    clippingPlanes,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },
    extensions: {
      derivatives: true
    },
    vertexShader: sectorShaders.torusSegmentPrimitive.vertex,
    fragmentShader: sectorShaders.torusSegmentPrimitive.fragment,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const sphericalSegmentMaterial = new THREE.RawShaderMaterial({
    name: 'Primitives (Spherical segment)',
    clipping: true,
    clippingPlanes,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },
    vertexShader: sectorShaders.ellipsoidSegmentPrimitive.vertex,
    fragmentShader: sectorShaders.ellipsoidSegmentPrimitive.fragment,
    side: THREE.DoubleSide,
    glslVersion: THREE.GLSL3
  });

  const triangleMeshMaterial = new THREE.RawShaderMaterial({
    name: 'Triangle meshes',
    clipping: true,
    clippingPlanes,
    extensions: {
      derivatives: true
    },
    side: THREE.DoubleSide,
    fragmentShader: sectorShaders.detailedMesh.fragment,
    vertexShader: sectorShaders.detailedMesh.vertex,
    glslVersion: THREE.GLSL3
  });

  const instancedMeshMaterial = new THREE.RawShaderMaterial({
    name: 'Instanced meshes',
    clipping: true,
    clippingPlanes,
    extensions: {
      derivatives: true
    },
    side: THREE.DoubleSide,
    fragmentShader: sectorShaders.instancedMesh.fragment,
    vertexShader: sectorShaders.instancedMesh.vertex,
    glslVersion: THREE.GLSL3
  });

  const simpleMaterial = new THREE.RawShaderMaterial({
    name: 'Low detail material',
    clipping: true,
    clippingPlanes,
    uniforms: {
      inverseModelMatrix: {
        value: new THREE.Matrix4()
      }
    },
    side: THREE.FrontSide,
    fragmentShader: sectorShaders.simpleMesh.fragment,
    vertexShader: sectorShaders.simpleMesh.vertex,
    glslVersion: THREE.GLSL3
  });

  const allMaterials = {
    box: boxMaterial,
    circle: circleMaterial,
    nut: nutMaterial,
    generalRing: generalRingMaterial,
    quad: quadMaterial,
    cone: coneMaterial,
    eccentricCone: eccentricConeMaterial,
    sphericalSegment: sphericalSegmentMaterial,
    torusSegment: torusSegmentMaterial,
    generalCylinder: generalCylinderMaterial,
    trapezium: trapeziumMaterial,
    ellipsoidSegment: ellipsoidSegmentMaterial,
    instancedMesh: instancedMeshMaterial,
    triangleMesh: triangleMeshMaterial,
    simple: simpleMaterial
  };

  for (const material of Object.values(allMaterials)) {
    updateDefinesAndUniforms(
      material,
      overrideColorPerTreeIndex,
      transformOverrideIndexTexture,
      transformOverrideLookupTexture,
      matCapTexture,
      renderMode
    );
  }

  return {
    ...allMaterials
  };
}

function updateDefinesAndUniforms(
  material: THREE.RawShaderMaterial,
  overrideColorPerTreeIndex: THREE.DataTexture,
  transformOverrideIndexTexture: THREE.DataTexture,
  transformOverrideTexture: THREE.DataTexture,
  matCapTexture: THREE.Texture,
  renderMode: RenderMode
) {
  const treeIndexTextureSize = new THREE.Vector2(
    overrideColorPerTreeIndex.image.width,
    overrideColorPerTreeIndex.image.height
  );
  const transformOverrideTextureSize = new THREE.Vector2(
    transformOverrideTexture.image.width,
    transformOverrideTexture.image.height
  );
  const oldUniforms = material.uniforms;
  material.setValues({
    ...shaderDefines,
    uniforms: {
      ...oldUniforms,
      renderMode: {
        value: renderMode
      },
      treeIndexTextureSize: {
        value: treeIndexTextureSize
      },
      transformOverrideTextureSize: {
        value: transformOverrideTextureSize
      },
      colorDataTexture: {
        value: overrideColorPerTreeIndex
      },
      transformOverrideIndexTexture: {
        value: transformOverrideIndexTexture
      },
      transformOverrideTexture: {
        value: transformOverrideTexture
      },
      matCapTexture: {
        value: matCapTexture
      }
    }
  });

  material.uniformsNeedUpdate = true;
}
