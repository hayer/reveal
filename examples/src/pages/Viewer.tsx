/*
 * Copyright 2021 Cognite AS
 */

import Stats from 'stats.js';
import { useEffect, useRef } from 'react';
import { CanvasWrapper } from '../components/styled';
import { THREE } from '@cognite/reveal';
import { CogniteClient } from '@cognite/sdk';
import dat from 'dat.gui';
import {
  Cognite3DViewer,
  Cognite3DViewerOptions,
  Cognite3DModel,
  CognitePointCloudModel,
  CameraControlsOptions,
  TreeIndexNodeCollection,
  CogniteModelBase,
  DefaultCameraManager
} from '@cognite/reveal';
import { DebugCameraTool, ExplodedViewTool, AxisViewTool, Corner } from '@cognite/reveal/tools';
import * as reveal from '@cognite/reveal';
import { ClippingUI } from '../utils/ClippingUI';
import { NodeStylingUI } from '../utils/NodeStylingUI';
import { BulkHtmlOverlayUI } from '../utils/BulkHtmlOverlayUI';
import { initialCadBudgetUi } from '../utils/CadBudgetUi';
import { InspectNodeUI } from '../utils/InspectNodeUi';
import { CameraUI } from '../utils/CameraUI';
import { PointCloudUi } from '../utils/PointCloudUi';
import { ModelUi } from '../utils/ModelUi';
import { createSDKFromEnvironment } from '../utils/example-helpers';
import { PointCloudClassificationFilterUI } from '../utils/PointCloudClassificationFilterUI';
import { CustomCameraManager } from '../utils/CustomCameraManager';
import { MeasurementUi } from '../utils/MeasurementUi';


window.THREE = THREE;
(window as any).reveal = reveal;

export function Viewer() {

  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  const environmentParam = urlParams.get('env');
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check in order to avoid double initialization of everything, especially dat.gui.
    // See https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects for why its called twice.
    if (!canvasWrapperRef.current) {
      return () => {};
    }

    const gui = new dat.GUI({ width: Math.min(500, 0.8 * window.innerWidth) });
    let viewer: Cognite3DViewer;
    let cameraManager: DefaultCameraManager;
    let cameraManagers: {
      Default: DefaultCameraManager;
      Custom: CustomCameraManager;
    }

    async function main() {
      const project = urlParams.get('project');
      let modelUrl = urlParams.get('modelUrl');

      if (!modelUrl && !(environmentParam && project)) {
        modelUrl = 'primitives';
        url.searchParams.set('modelUrl', 'primitives');
        window.history.pushState({}, '', url.toString());
      }

      const progress = (itemsLoaded: number, itemsRequested: number, itemsCulled: number) => {
        if (itemsLoaded === 0 || itemsLoaded === itemsRequested) {
          console.log(`loaded ${itemsLoaded}/${itemsRequested} (culled: ${itemsCulled})`);
        }
      };

      let client: CogniteClient;
      if (project && environmentParam) {
        client = await createSDKFromEnvironment('reveal.example.example', project, environmentParam);
      } else {
        client = new CogniteClient({
          appId: 'reveal.example.example',
          project: 'dummy',
          getToken: async () => 'dummy'
        });
      }

      let viewerOptions: Cognite3DViewerOptions = {
        sdk: client,
        domElement: canvasWrapperRef.current!,
        onLoading: progress,
        logMetrics: false,
        antiAliasingHint: (urlParams.get('antialias') ?? undefined) as any,
        ssaoQualityHint: (urlParams.get('ssao') ?? undefined) as any,
        continuousModelStreaming: true,
        pointCloudEffects: {
          pointBlending: (urlParams.get('pointBlending') === 'true' ?? undefined)
        }
      };

      if (modelUrl !== null) {
        viewerOptions = {
          ...viewerOptions,
          // @ts-expect-error
          _localModels: true
        };
      } else if (!(project && environmentParam)) {
        throw new Error('Must either provide URL parameters "env", "project", ' +
          '"modelId" and "revisionId" to load model from CDF ' +
          '"or "modelUrl" to load model from URL.');
      }

      // Prepare viewer
      viewer = new Cognite3DViewer(viewerOptions);
      (window as any).viewer = viewer;
      
      // Add Stats.js overlay with FPS etc
      var stats = new Stats();
      stats.dom.style.position = 'absolute';
      stats.dom.style.top = stats.dom.style.left = '';
      stats.dom.style.right = stats.dom.style.bottom = '0px';
      document.body.appendChild(stats.dom);
      viewer.on('beforeSceneRendered', () => stats.begin());
      viewer.on('sceneRendered', () => stats.end());
      
      const controlsOptions: CameraControlsOptions = {
        changeCameraTargetOnClick: true,
        mouseWheelAction: 'zoomToCursor',
      };
      cameraManager = viewer.cameraManager as DefaultCameraManager;

      cameraManager.setCameraControlsOptions(controlsOptions);

      cameraManagers = {
        Default: viewer.cameraManager as DefaultCameraManager,
        Custom: new CustomCameraManager(canvasWrapperRef.current!, new THREE.PerspectiveCamera(5, 1., 0.01, 1000))
      };
      cameraManagers.Custom.enabled = false;

      // Add GUI for loading models and such
      const guiState = {
        antiAliasing: urlParams.get('antialias'),
        ssaoQuality: urlParams.get('ssao'),
        debug: {
          stats: {
            drawCalls: 0,
            points: 0,
            triangles: 0,
            geometries: 0,
            textures: 0,
            renderTime: 0
          },
          suspendLoading: false,
          ghostAllNodes: false,
          hideAllNodes: false
        },
        showCameraTool: new DebugCameraTool(viewer),
        renderMode: 'Color',
        controls: {
          mouseWheelAction: 'zoomToCursor',
          changeCameraTargetOnClick: true,
          cameraManager: 'Default'
        }
      };
      const guiActions = {
        showCameraHelper: () => {
          guiState.showCameraTool.showCameraHelper();
        }
      };
      initialCadBudgetUi(viewer, gui.addFolder('CAD budget'));


      const totalBounds = new THREE.Box3();
      function handleModelAdded(model: CogniteModelBase) {
        const bounds = model.getModelBoundingBox();
        totalBounds.expandByPoint(bounds.min);
        totalBounds.expandByPoint(bounds.max);
        clippingUi.updateWorldBounds(totalBounds);

        viewer.loadCameraFromModel(model);
        if (model instanceof Cognite3DModel) {
          new NodeStylingUI(gui.addFolder(`Node styling #${modelUi.cadModels.length}`), client, viewer, model);
          new BulkHtmlOverlayUI(gui.addFolder(`Node tagging #${modelUi.cadModels.length}`), viewer, model, client);
        } else if (model instanceof CognitePointCloudModel) {
          new PointCloudClassificationFilterUI(gui.addFolder(`Class filter #${modelUi.pointCloudModels.length}`), model);
          pointCloudUi.applyToAllModels();
        }
      }
      const modelUi = new ModelUi(gui.addFolder('Models'), viewer, handleModelAdded);

      const renderGui = gui.addFolder('Rendering');
      const renderModes = ['Color', 'Normal', 'TreeIndex', 'PackColorAndNormal', 'Depth', 'Effects', 'Ghost', 'LOD', 'DepthBufferOnly (N/A)', 'GeometryType'];
      renderGui.add(guiState, 'renderMode', renderModes).name('Render mode').onFinishChange(value => {
        const renderMode = renderModes.indexOf(value) + 1;
        (viewer as any).revealManager._renderPipeline._cadGeometryRenderPipeline._cadGeometryRenderPasses.back._renderMode = renderMode;
        viewer.requestRedraw();
      });
      renderGui.add(guiState, 'antiAliasing',
        [
          'disabled', 'fxaa', 'msaa4', 'msaa8', 'msaa16',
          'msaa4+fxaa', 'msaa8+fxaa', 'msaa16+fxaa'
        ]).name('Anti-alias').onFinishChange(v => {
          urlParams.set('antialias', v);
          window.location.href = url.toString();
        });
      renderGui.add(guiState, 'ssaoQuality',
        [
          'disabled', 'medium', 'high', 'veryhigh'
        ]).name('SSAO').onFinishChange(v => {
          urlParams.set('ssao', v);
          window.location.href = url.toString();
        });

      const debugGui = gui.addFolder('Debug');
      const debugStatsGui = debugGui.addFolder('Statistics');
      debugStatsGui.add(guiState.debug.stats, 'drawCalls').name('Draw Calls');
      debugStatsGui.add(guiState.debug.stats, 'points').name('Points');
      debugStatsGui.add(guiState.debug.stats, 'triangles').name('Triangles');
      debugStatsGui.add(guiState.debug.stats, 'geometries').name('Geometries');
      debugStatsGui.add(guiState.debug.stats, 'textures').name('Textures');
      debugStatsGui.add(guiState.debug.stats, 'renderTime').name('Ms/frame');

      viewer.on('sceneRendered', (sceneRenderedEventArgs) => {
        guiState.debug.stats.drawCalls = sceneRenderedEventArgs.renderer.info.render.calls;
        guiState.debug.stats.points = sceneRenderedEventArgs.renderer.info.render.points;
        guiState.debug.stats.triangles = sceneRenderedEventArgs.renderer.info.render.triangles;
        guiState.debug.stats.geometries = sceneRenderedEventArgs.renderer.info.memory.geometries;
        guiState.debug.stats.textures = sceneRenderedEventArgs.renderer.info.memory.textures;
        guiState.debug.stats.renderTime = sceneRenderedEventArgs.renderTime;
        debugStatsGui.updateDisplay();
      });

      debugGui.add(guiActions, 'showCameraHelper').name('Show camera');
      debugGui.add(guiState.debug, 'suspendLoading').name('Suspend loading').onFinishChange(suspend => {
        try {
          // @ts-expect-error
          viewer.revealManager._cadManager._cadModelUpdateHandler.updateLoadingHints({ suspendLoading: suspend })
        }
        catch (error) {
          alert('Could not toggle suspend loading, check console for error');
          throw error;
        }
      });
      debugGui.add(guiState.debug, 'ghostAllNodes').name('Ghost all nodes').onFinishChange(ghost => {
        modelUi.cadModels.forEach(m => m.setDefaultNodeAppearance({ renderGhosted: ghost }));
      });
      debugGui.add(guiState.debug, 'hideAllNodes').name('Hide all nodes').onFinishChange(hide => {
        modelUi.cadModels.forEach(m => m.setDefaultNodeAppearance({ visible: !hide }));
      });

      const clippingUi = new ClippingUI(gui.addFolder('Clipping'), planes => viewer.setClippingPlanes(planes));
      new CameraUI(viewer, gui.addFolder('Camera'));
      const pointCloudUi = new PointCloudUi(viewer, gui.addFolder('Point clouds'));
      await modelUi.restoreModelsFromUrl();

      let expandTool: ExplodedViewTool | null;
      let explodeSlider: dat.GUIController | null;

      const assetExplode = gui.addFolder('Asset Inspect');

      const explodeParams = { explodeFactor: 0.0, rootTreeIndex: 0 };
      const explodeActions = {
        selectAssetTreeIndex: async () => {
          if (expandTool) {
            explodeActions.reset();
          }

          const rootTreeIndex = explodeParams.rootTreeIndex;
          const treeIndices = await modelUi.cadModels[0].getSubtreeTreeIndices(rootTreeIndex);
          modelUi.cadModels[0].setDefaultNodeAppearance({ visible: false });
          const explodeSet = new TreeIndexNodeCollection(treeIndices);
          modelUi.cadModels[0].assignStyledNodeCollection(explodeSet, { visible: true });

          const rootBoundingBox = await modelUi.cadModels[0].getBoundingBoxByTreeIndex(rootTreeIndex);
          viewer.fitCameraToBoundingBox(rootBoundingBox, 0);

          expandTool = new ExplodedViewTool(rootTreeIndex, modelUi.cadModels[0]);

          await expandTool.readyPromise;

          explodeSlider = assetExplode
            .add(explodeParams, 'explodeFactor', 0, 1)
            .name('Explode Factor')
            .step(0.01)
            .onChange(p => {
              expandTool!.expand(p);
            });
        },
        reset: () => {
          expandTool?.reset();
          modelUi.cadModels[0].setDefaultNodeAppearance({ visible: true });
          modelUi.cadModels[0].removeAllStyledNodeCollections();
          explodeParams.explodeFactor = 0;
          expandTool = null;
          if (explodeSlider) {
            assetExplode.remove(explodeSlider);
            explodeSlider = null;
          }
        }
      };
      assetExplode.add(explodeParams, 'rootTreeIndex').name('Tree index');
      assetExplode.add(explodeActions, 'selectAssetTreeIndex').name('Inspect tree index');

      assetExplode.add(explodeActions, 'reset').name('Reset');

      const controlsGui = gui.addFolder('Camera controls');
      const mouseWheelActionTypes = ['zoomToCursor', 'zoomPastCursor', 'zoomToTarget'];
      const cameraManagerTypes = ['Default', 'Custom'];
      controlsGui.add(guiState.controls, 'mouseWheelAction', mouseWheelActionTypes).name('Mouse wheel action type').onFinishChange(value => {
        cameraManager.setCameraControlsOptions({ ...cameraManager.getCameraControlsOptions(), mouseWheelAction: value });
      });
      controlsGui.add(guiState.controls, 'changeCameraTargetOnClick').name('Change camera target on click').onFinishChange(value => {
        cameraManager.setCameraControlsOptions({ ...cameraManager.getCameraControlsOptions(), changeCameraTargetOnClick: value });
      });
      controlsGui.add(guiState.controls, 'cameraManager', cameraManagerTypes).name('Camera manager type').onFinishChange( (value: ('Default' | 'Custom')) => {
        viewer.setCameraManager(cameraManagers[value]);
      });

      const inspectNodeUi = new InspectNodeUI(gui.addFolder('Last clicked node'), client, viewer);

      new MeasurementUi(viewer, gui.addFolder('Measurement'));

      viewer.on('click', async (event) => {
        const { offsetX, offsetY } = event;
        console.log('2D coordinates', event);
        const start = performance.now();
        const intersection = await viewer.getIntersectionFromPixel(offsetX, offsetY);
        if (intersection !== null) {
          switch (intersection.type) {
            case 'cad':
              {
                const { treeIndex, point } = intersection;
                console.log(`Clicked node with treeIndex ${treeIndex} at`, point, `took ${(performance.now() - start).toFixed(1)} ms`);

                inspectNodeUi.inspectNode(intersection.model, treeIndex);
              }
              break;
            case 'pointcloud':
              {
                const { pointIndex, point } = intersection;
                console.log(`Clicked point with pointIndex ${pointIndex} at`, point);
              }
              break;
          }
        }
      });

      new AxisViewTool(viewer, 
        // Give some space for Stats.js overlay
        { 
          position: { 
            corner: Corner.BottomRight, 
            padding: new THREE.Vector2(60, 0) 
          }
        });
    }

    main();

    return () => {
      gui.destroy();
      viewer?.dispose();
    };
  }, []);
  return <CanvasWrapper ref={canvasWrapperRef} />;
}
