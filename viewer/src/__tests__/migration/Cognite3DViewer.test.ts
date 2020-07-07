/*!
 * Copyright 2020 Cognite AS
 */

import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import { CogniteClient } from '@cognite/sdk';

import { Cognite3DViewer } from '@/public/migration/Cognite3DViewer';

import nock from 'nock';
import { SectorCuller } from '@/datamodels/cad/sector/culling/SectorCuller';

const sceneJson = require('./scene.json');

describe('Cognite3DViewer', () => {
  beforeAll(() => {
    nock.disableNetConnect();
    nock('https://api-js.mixpanel.com')
      .persist(true)
      .defaultReplyHeaders({ 'access-control-allow-origin': '*', 'access-control-allow-credentials': 'true' })
      .post(/.*/)
      .reply(200);
  });

  afterAll(() => {
    nock.enableNetConnect();
  });

  const context: WebGLRenderingContext = require('gl')(64, 64, { preserveDrawingBuffer: true });

  const sdk = new CogniteClient({ appId: 'cognite.reveal.unittest' });
  const renderer = new THREE.WebGLRenderer({ context });
  const _sectorCuller: SectorCuller = {
    determineSectors: jest.fn()
  };
  jest.useFakeTimers();

  test('constructor throws error when unsupported options are set', () => {
    expect(() => new Cognite3DViewer({ sdk, renderer, _sectorCuller, enableCache: true })).toThrowError();
    expect(() => new Cognite3DViewer({ sdk, renderer, _sectorCuller, viewCube: 'topleft' })).toThrowError();
  });

  test('dispose disposes WebGL resources', () => {
    const disposeSpy = jest.spyOn(renderer, 'dispose');
    const viewer = new Cognite3DViewer({ sdk, renderer, _sectorCuller });
    viewer.dispose();
    expect(disposeSpy).toBeCalledTimes(1);
  });

  test('on cameraChange triggers when position and target is changed', () => {
    // Arrange
    const onCameraChange: (position: THREE.Vector3, target: THREE.Vector3) => void = jest.fn();
    const viewer = new Cognite3DViewer({ sdk, renderer, _sectorCuller });
    viewer.on('cameraChange', onCameraChange);

    // Act
    viewer.setCameraTarget(new THREE.Vector3(123, 456, 789));
    viewer.setCameraPosition(new THREE.Vector3(1, 2, 3));

    // Assert
    expect(onCameraChange).toBeCalledTimes(2);
  });

  test('addModel with remote model and fit viewer, updates camera', async () => {
    // Arrange
    const outputs = {
      items: [
        {
          format: 'reveal-directory',
          version: 8,
          blobId: 1
        }
      ]
    };
    nock(/.*/)
      .get(/.*\/outputs/)
      .reply(200, outputs);
    nock(/.*/)
      .get(/.*\/scene.json/)
      .reply(200, sceneJson);

    const onCameraChange: (position: THREE.Vector3, target: THREE.Vector3) => void = jest.fn();
    const viewer = new Cognite3DViewer({ sdk, renderer, _sectorCuller });
    viewer.on('cameraChange', onCameraChange);

    // Act
    const model = await viewer.addModel({ modelId: 1, revisionId: 2 });
    viewer.fitCameraToModel(model);
    TWEEN.update(0);

    // Assert
    expect(onCameraChange).toBeCalled();
  });

  test('fitCameraToBoundingBox with 0 duration, moves camera immediatly', () => {
    // Arrange
    const viewer = new Cognite3DViewer({ sdk, renderer, _sectorCuller });
    const bbox = new THREE.Box3(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 2, 2));
    const bSphere = bbox.getBoundingSphere(new THREE.Sphere());
    bSphere.radius *= 3;

    // Act
    viewer.fitCameraToBoundingBox(bbox, 0);
    TWEEN.update(0);

    // Assert
    expect(viewer.getCameraTarget()).toEqual(bbox.getCenter(new THREE.Vector3()));
    expect(bSphere.containsPoint(viewer.getCameraPosition())).toBeTrue();
  });

  test('viewer can add/remove Object3d on scene', () => {
    const viewer = new Cognite3DViewer({ sdk, renderer, _sectorCuller });
    const scene = viewer.getScene();
    const obj = new THREE.Mesh(new THREE.SphereBufferGeometry(), new THREE.MeshBasicMaterial());

    viewer.addObject3D(obj);
    expect(scene.getObjectById(obj.id)).toEqual(obj);

    viewer.removeObject3D(obj);
    expect(scene.getObjectById(obj.id)).toBeFalsy();
  });
});
