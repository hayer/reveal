
<a name="readmemd"></a>

[@cognite/reveal](#readmemd)

# @cognite/reveal

## Index

### Modules

* ["index"](#modules_index_md)
* ["tools"](#modules_tools_md)

# Classes


<a name="classes_index_boundingboxclippermd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [BoundingBoxClipper](#classes_index_boundingboxclippermd)

## Class: BoundingBoxClipper

### Hierarchy

* **BoundingBoxClipper**

### Index

#### Constructors

* [constructor](#constructor)

#### Accessors

* [clippingPlanes](#clippingplanes)
* [intersection](#intersection)
* [maxX](#maxx)
* [maxY](#maxy)
* [maxZ](#maxz)
* [minX](#minx)
* [minY](#miny)
* [minZ](#minz)

### Constructors

####  constructor

\+ **new BoundingBoxClipper**(`box?`: THREE.Box3, `intersection?`: undefined | false | true): *[BoundingBoxClipper](#classes_index_boundingboxclippermd)*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:17](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`box?` | THREE.Box3 |
`intersection?` | undefined &#124; false &#124; true |

**Returns:** *[BoundingBoxClipper](#classes_index_boundingboxclippermd)*

### Accessors

####  clippingPlanes

• **get clippingPlanes**(): *Plane‹›[]*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:115](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L115)*

**Returns:** *Plane‹›[]*

___

####  intersection

• **get intersection**(): *boolean*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:84](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L84)*

**Returns:** *boolean*

• **set intersection**(`value`: boolean): *void*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:79](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *void*

___

####  maxX

• **get maxX**(): *number*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:57](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L57)*

**Returns:** *number*

• **set maxX**(`x`: number): *void*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:52](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *void*

___

####  maxY

• **get maxY**(): *number*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:66](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L66)*

**Returns:** *number*

• **set maxY**(`y`: number): *void*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:61](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

**Returns:** *void*

___

####  maxZ

• **get maxZ**(): *number*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:75](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L75)*

**Returns:** *number*

• **set maxZ**(`z`: number): *void*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:70](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`z` | number |

**Returns:** *void*

___

####  minX

• **get minX**(): *number*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:30](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L30)*

**Returns:** *number*

• **set minX**(`x`: number): *void*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:25](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *void*

___

####  minY

• **get minY**(): *number*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:39](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L39)*

**Returns:** *number*

• **set minY**(`y`: number): *void*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:34](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

**Returns:** *void*

___

####  minZ

• **get minZ**(): *number*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:48](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L48)*

**Returns:** *number*

• **set minZ**(`z`: number): *void*

*Defined in [viewer/src/utilities/BoundingBoxClipper.ts:43](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/BoundingBoxClipper.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`z` | number |

**Returns:** *void*


<a name="classes_index_cognite3dmodelmd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [Cognite3DModel](#classes_index_cognite3dmodelmd)

## Class: Cognite3DModel

Represents a single 3D CAD model loaded from CDF.

**`module`** @cognite/reveal

### Hierarchy

* Object3D

  ↳ **Cognite3DModel**

### Implements

* [CogniteModelBase](#interfaces_index_cognitemodelbasemd)

### Index

#### Properties

* [modelId](#modelid)
* [revisionId](#revisionid)
* [type](#type)

#### Accessors

* [loadingHints](#loadinghints)

#### Methods

* [deselectAllNodes](#deselectallnodes)
* [deselectNode](#deselectnode)
* [deselectNodeByTreeIndex](#deselectnodebytreeindex)
* [dispose](#dispose)
* [getBoundingBox](#getboundingbox)
* [getBoundingBoxByNodeId](#getboundingboxbynodeid)
* [getBoundingBoxByTreeIndex](#getboundingboxbytreeindex)
* [getCameraConfiguration](#getcameraconfiguration)
* [getModelBoundingBox](#getmodelboundingbox)
* [getModelTransformation](#getmodeltransformation)
* [getNodeColor](#getnodecolor)
* [getSubtreeNodeIds](#getsubtreenodeids)
* [getSubtreeTreeIndices](#getsubtreetreeindices)
* [ghostAllNodes](#ghostallnodes)
* [ghostNodeByTreeIndex](#ghostnodebytreeindex)
* [hideAllNodes](#hideallnodes)
* [hideNode](#hidenode)
* [hideNodeByTreeIndex](#hidenodebytreeindex)
* [iterateNodes](#iteratenodes)
* [iterateNodesByTreeIndex](#iteratenodesbytreeindex)
* [iterateSubtree](#iteratesubtree)
* [iterateSubtreeByTreeIndex](#iteratesubtreebytreeindex)
* [mapFromCdfToModelCoordinates](#mapfromcdftomodelcoordinates)
* [mapNodeIdToTreeIndex](#mapnodeidtotreeindex)
* [mapNodeIdsToTreeIndices](#mapnodeidstotreeindices)
* [mapPositionFromModelToCdfCoordinates](#mappositionfrommodeltocdfcoordinates)
* [mapTreeIndexToNodeId](#maptreeindextonodeid)
* [mapTreeIndicesToNodeIds](#maptreeindicestonodeids)
* [resetAllNodeColors](#resetallnodecolors)
* [resetNodeColor](#resetnodecolor)
* [resetNodeColorByTreeIndex](#resetnodecolorbytreeindex)
* [resetNodeTransformByTreeIndex](#resetnodetransformbytreeindex)
* [selectNode](#selectnode)
* [selectNodeByTreeIndex](#selectnodebytreeindex)
* [setAllNodeColors](#setallnodecolors)
* [setModelTransformation](#setmodeltransformation)
* [setNodeColor](#setnodecolor)
* [setNodeColorByTreeIndex](#setnodecolorbytreeindex)
* [setNodeTransformByTreeIndex](#setnodetransformbytreeindex)
* [showAllNodes](#showallnodes)
* [showNode](#shownode)
* [showNodeByTreeIndex](#shownodebytreeindex)
* [unghostAllNodes](#unghostallnodes)
* [unghostNodeByTreeIndex](#unghostnodebytreeindex)

### Properties

####  modelId

• **modelId**: *number*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:46](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L46)*

The CDF model ID of the model.

___

####  revisionId

• **revisionId**: *number*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:50](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L50)*

The CDF revision ID of the model.

___

####  type

• **type**: *[SupportedModelTypes](#supportedmodeltypes)* = "cad"

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd).[type](#type)*

*Overrides void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:26](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L26)*

### Accessors

####  loadingHints

• **get loadingHints**(): *[CadLoadingHints](#cadloadinghints)*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:32](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L32)*

Get settings used for loading pipeline.

**Returns:** *[CadLoadingHints](#cadloadinghints)*

• **set loadingHints**(`hints`: [CadLoadingHints](#cadloadinghints)): *void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:39](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L39)*

Specify settings for loading pipeline.

**Parameters:**

Name | Type |
------ | ------ |
`hints` | [CadLoadingHints](#cadloadinghints) |

**Returns:** *void*

### Methods

####  deselectAllNodes

▸ **deselectAllNodes**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:559](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L559)*

Removes selection from all nodes.

**Returns:** *void*

___

####  deselectNode

▸ **deselectNode**(`nodeId`: number): *Promise‹void›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:528](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L528)*

Removes selection from the node by node ID.

**`deprecated`** Use [Cognite3DModel.deselectNodeByTreeIndex](#deselectnodebytreeindex).

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |

**Returns:** *Promise‹void›*

___

####  deselectNodeByTreeIndex

▸ **deselectNodeByTreeIndex**(`treeIndex`: number, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:538](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L538)*

Removes selection from the node by tree index.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`treeIndex` | number | - | - |
`applyToChildren` | boolean | false |   |

**Returns:** *Promise‹number›*

___

####  dispose

▸ **dispose**(): *void*

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd)*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:154](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L154)*

Cleans up used resources.

**Returns:** *void*

___

####  getBoundingBox

▸ **getBoundingBox**(`_nodeId?`: undefined | number, `_box?`: THREE.Box3): *Box3*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:183](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L183)*

**`deprecated`** Use [Cognite3DModel.getModelBoundingBox](#getmodelboundingbox) or [Cognite3DModel.getBoundingBoxByTreeIndex](#getboundingboxbytreeindex).

**`throws`** NotSupportedInMigrationWrapperError.

**Parameters:**

Name | Type |
------ | ------ |
`_nodeId?` | undefined &#124; number |
`_box?` | THREE.Box3 |

**Returns:** *Box3*

___

####  getBoundingBoxByNodeId

▸ **getBoundingBoxByNodeId**(`nodeId`: number, `box?`: THREE.Box3): *Promise‹Box3›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:263](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L263)*

Fetches a bounding box from the CDF by the nodeId.

**`example`** 
```js
const box = new THREE.Box3()
const nodeId = 100500;
await model.getBoundingBoxByNodeId(nodeId, box);
// box now has the bounding box
```
```js
// the following code does the same
const box = await model.getBoundingBoxByNodeId(nodeId);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | number | - |
`box?` | THREE.Box3 | Optional. Used to write result to. |

**Returns:** *Promise‹Box3›*

___

####  getBoundingBoxByTreeIndex

▸ **getBoundingBoxByTreeIndex**(`treeIndex`: number, `box?`: THREE.Box3): *Promise‹Box3›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:302](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L302)*

Determine the bounding box of the node identified by the tree index provided. Note that this
function uses the CDF API to look up the bounding box.

**`example`** 
```js
const box = new THREE.Box3()
const treeIndex = 42;
await model.getBoundingBoxByTreeIndex(treeIndex, box);
// box now has the bounding box
```
```js
// the following code does the same
const box = await model.getBoundingBoxByTreeIndex(treeIndex);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`treeIndex` | number | Tree index of the node to find bounding box for. |
`box?` | THREE.Box3 | Optional preallocated container to hold the bounding box. |

**Returns:** *Promise‹Box3›*

___

####  getCameraConfiguration

▸ **getCameraConfiguration**(): *[CameraConfiguration](#cameraconfiguration) | undefined*

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd)*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:225](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L225)*

Retrieves the camera position and target stored for the model. Typically this
is used to store a good starting position for a model. Returns `undefined` if there
isn't any stored camera configuration for the model.

**Returns:** *[CameraConfiguration](#cameraconfiguration) | undefined*

___

####  getModelBoundingBox

▸ **getModelBoundingBox**(`outBbox?`: THREE.Box3, `restrictToMostGeometry?`: undefined | false | true): *Box3*

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd)*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:209](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L209)*

Determines the full bounding box of the model.

**`version`** `restrictToMostGeometry` added in 1.3.0

**`example`** 
```js
const box = new THREE.Box3()
model.getModelBoundingBox(box);
// box now has the bounding box
```
```js
// the following code does the same
const box = model.getModelBoundingBox();
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`outBbox?` | THREE.Box3 | Optional. Used to write result to. |
`restrictToMostGeometry?` | undefined &#124; false &#124; true | Optional. When true, returned bounds are restricted to where most of the geometry is located. This is useful for models that have junk geometry located far from the "main" model. Added in version 1.3.0. |

**Returns:** *Box3*

Model bounding box.

___

####  getModelTransformation

▸ **getModelTransformation**(`out?`: THREE.Matrix4): *Matrix4*

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd)*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:243](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L243)*

Gets transformation matrix of the model.

**`version`** new in 1.1.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`out?` | THREE.Matrix4 | Preallocated `THREE.Matrix4` (optional).  |

**Returns:** *Matrix4*

___

####  getNodeColor

▸ **getNodeColor**(`_nodeId`: number): *Promise‹[Color](#color)›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:378](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L378)*

Not supported.

**`deprecated`** This function is no longer supported. There is no replacement.

**`throws`** NotSupportedInMigrationWrapperError.

**Parameters:**

Name | Type |
------ | ------ |
`_nodeId` | number |

**Returns:** *Promise‹[Color](#color)›*

___

####  getSubtreeNodeIds

▸ **getSubtreeNodeIds**(`_nodeId`: number, `_subtreeSize?`: undefined | number): *Promise‹number[]›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:164](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L164)*

**`deprecated`** 

**`throws`** NotSupportedInMigrationWrapperError.

**Parameters:**

Name | Type |
------ | ------ |
`_nodeId` | number |
`_subtreeSize?` | undefined &#124; number |

**Returns:** *Promise‹number[]›*

___

####  getSubtreeTreeIndices

▸ **getSubtreeTreeIndices**(`treeIndex`: number): *Promise‹number[]›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:172](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L172)*

Get array of subtree tree indices.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`treeIndex` | number |   |

**Returns:** *Promise‹number[]›*

___

####  ghostAllNodes

▸ **ghostAllNodes**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:674](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L674)*

Enable ghost mode for all nodes in the model, making the whole model be rendered transparent
and in gray.

**`version`** new in 1.1.0

**Returns:** *void*

___

####  ghostNodeByTreeIndex

▸ **ghostNodeByTreeIndex**(`treeIndex`: number, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:626](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L626)*

Enables ghost mode for the tree index given, making the object appear transparent and gray.
Note that ghosted objects are ignored in ray picking actions.

**`version`** new in 1.1.0

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`treeIndex` | number | - | Tree index of node to ghost. |
`applyToChildren` | boolean | false | When true, all descendants of the node is also ghosted. |

**Returns:** *Promise‹number›*

Promise that resolves to the number of affected nodes.

___

####  hideAllNodes

▸ **hideAllNodes**(`makeGray?`: undefined | false | true): *void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:748](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L748)*

Hides all nodes in the model.

**`throws`** NotSupportedInMigrationWrapperError if `makeGray` is passed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`makeGray?` | undefined &#124; false &#124; true | Not supported. |

**Returns:** *void*

___

####  hideNode

▸ **hideNode**(`nodeId`: number, `makeGray?`: undefined | false | true): *Promise‹void›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:764](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L764)*

Hide the node by node ID.
This method is async because nodeId might be not loaded yet.

**`deprecated`** Use [Cognite3DModel.hideNodeByTreeIndex](#hidenodebytreeindex).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | number | - |
`makeGray?` | undefined &#124; false &#124; true | Not supported yet.  |

**Returns:** *Promise‹void›*

___

####  hideNodeByTreeIndex

▸ **hideNodeByTreeIndex**(`treeIndex`: number, `makeGray?`: undefined | false | true, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:777](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L777)*

Hide the node by tree index.

**`throws`** NotSupportedInMigrationWrapperError if `makeGray` is passed.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`treeIndex` | number | - | Tree index of node to hide. |
`makeGray?` | undefined &#124; false &#124; true | - | Not supported. |
`applyToChildren` | boolean | false | When true, all descendants of the node is also hidden. |

**Returns:** *Promise‹number›*

Number of nodes affected.

___

####  iterateNodes

▸ **iterateNodes**(`_action`: function): *void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:312](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L312)*

**`deprecated`** Use [Cognite3DModel.iterateNodesByTreeIndex](#iteratenodesbytreeindex) instead.

**`throws`** NotSupportedInMigrationWrapperError.

**Parameters:**

▪ **_action**: *function*

▸ (`nodeId`: number, `treeIndex?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |
`treeIndex?` | undefined &#124; number |

**Returns:** *void*

___

####  iterateNodesByTreeIndex

▸ **iterateNodesByTreeIndex**(`action`: function): *Promise‹void›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:328](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L328)*

Iterates over all nodes in the model and applies the provided action to each node (identified by tree index).
The passed action is applied incrementally to avoid main thread blocking, meaning that the changes can be partially
applied until promise is resolved (iteration is done).

**`example`** 
```js
const logIndex = (treeIndex) => console.log(treeIndex);
await model.iterateNodesByTreeIndex(logIndex); // 0, 1, 2, ...
```

**Parameters:**

▪ **action**: *function*

Function that will be called with a treeIndex argument.

▸ (`treeIndex`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`treeIndex` | number |

**Returns:** *Promise‹void›*

Promise that is resolved once the iteration is done.

___

####  iterateSubtree

▸ **iterateSubtree**(`_nodeId`: number, `_action`: function, `_treeIndex?`: undefined | number, `_subtreeSize?`: undefined | number): *Promise‹boolean›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:340](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L340)*

**`deprecated`** Use [Cognite3DModel.iterateNodesByTreeIndex](#iteratenodesbytreeindex) instead.

**`throws`** NotSupportedInMigrationWrapperError.

**Parameters:**

▪ **_nodeId**: *number*

▪ **_action**: *function*

▸ (`nodeId`: number, `treeIndex?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |
`treeIndex?` | undefined &#124; number |

▪`Optional`  **_treeIndex**: *undefined | number*

▪`Optional`  **_subtreeSize**: *undefined | number*

**Returns:** *Promise‹boolean›*

___

####  iterateSubtreeByTreeIndex

▸ **iterateSubtreeByTreeIndex**(`treeIndex`: number, `action`: function): *Promise‹void›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:367](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L367)*

Iterates over all nodes in a subtree of the model and applies the provided action to each node
(identified by tree index). The provided node is included in the visited set.  The passed action
is applied incrementally to avoid main thread blocking, meaning that the changes can be partially
applied until promise is resolved (iteration is done).

**`example`** 
```js
// make a subtree to be gray
await model.iterateNodesByTreeIndex(treeIndex => {
  model.setNodeColorByTreeIndex(treeIndex, 127, 127, 127);
});
```

**Parameters:**

▪ **treeIndex**: *number*

Tree index of the top parent of the subtree.

▪ **action**: *function*

Function that will be called with a treeIndex argument.

▸ (`treeIndex`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`treeIndex` | number |

**Returns:** *Promise‹void›*

Promise that is resolved once the iteration is done.

___

####  mapFromCdfToModelCoordinates

▸ **mapFromCdfToModelCoordinates**(`p`: Vector3, `out?`: THREE.Vector3): *Vector3*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:125](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L125)*

Maps a position retrieved from the CDF API (e.g. 3D node information) to
coordinates in "ThreeJS model space". This is necessary because CDF has a right-handed
Z-up coordinate system while ThreeJS uses a right-hand Y-up coordinate system.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`p` | Vector3 | The CDF coordinate to transform. |
`out?` | THREE.Vector3 | Optional preallocated buffer for storing the result. May be `p`. |

**Returns:** *Vector3*

Transformed position.

___

####  mapNodeIdToTreeIndex

▸ **mapNodeIdToTreeIndex**(`nodeId`: CogniteInternalId): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:810](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L810)*

Maps a single node ID to tree index. This is useful when you e.g. have a
node ID from an asset mapping and want to highlight the given asset using
[selectNodeByTreeIndex](#selectnodebytreeindex). If you have multiple node IDs to map,
[mapNodeIdsToTreeIndices](#mapnodeidstotreeindices) is recommended for better performance.

**`throws`** If an invalid/non-existant node ID is provided the function throws an error.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | CogniteInternalId | A Node ID to map to a tree index. |

**Returns:** *Promise‹number›*

TreeIndex of the provided node.

___

####  mapNodeIdsToTreeIndices

▸ **mapNodeIdsToTreeIndices**(`nodeIds`: CogniteInternalId[]): *Promise‹number[]›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:796](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L796)*

Maps a list of Node IDs to tree indices. This function is useful when you have
a list of nodes, e.g. from Asset Mappings, that you want to highlight, hide,
color etc in the viewer.

**`throws`** If an invalid/non-existant node ID is provided the function throws an error.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodeIds` | CogniteInternalId[] | List of node IDs to map to tree indices. |

**Returns:** *Promise‹number[]›*

A list of tree indices corresponing to the elements in the input.

___

####  mapPositionFromModelToCdfCoordinates

▸ **mapPositionFromModelToCdfCoordinates**(`p`: Vector3, `out?`: THREE.Vector3): *Vector3*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:142](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L142)*

Maps from a 3D position in "ThreeJS model space" (e.g. a ray intersection coordinate)
to coordinates in "CDF space". This is necessary because CDF has a right-handed
Z-up coordinate system while ThreeJS uses a right-hand Y-up coordinate system.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`p` | Vector3 | The ThreeJS coordinate to transform. |
`out?` | THREE.Vector3 | Optional preallocated buffer for storing the result. May be `p`. |

**Returns:** *Vector3*

Transformed position.

___

####  mapTreeIndexToNodeId

▸ **mapTreeIndexToNodeId**(`treeIndex`: number): *Promise‹CogniteInternalId›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:836](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L836)*

Maps a single tree index to node ID for use with the API. If you have multiple
tree indices to map, [mapNodeIdsToTreeIndices](#mapnodeidstotreeindices) is recommended for better
performance.

**`throws`** If an invalid/non-existant node ID is provided the function throws an error.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`treeIndex` | number | A tree index to map to a Node ID. |

**Returns:** *Promise‹CogniteInternalId›*

TreeIndex of the provided node.

___

####  mapTreeIndicesToNodeIds

▸ **mapTreeIndicesToNodeIds**(`treeIndices`: number[]): *Promise‹CogniteInternalId[]›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:824](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L824)*

Maps a list of tree indices to node IDs for use with the Cognite SDK.
This function is useful if you have a list of tree indices, e.g. from
[Cognite3DModel.iterateSubtreeByTreeIndex](#iteratesubtreebytreeindex), and want to perform
some operations on these nodes using the SDK.

**`throws`** If an invalid tree index is provided the function throws an error.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`treeIndices` | number[] | Tree indices to map to node IDs. |

**Returns:** *Promise‹CogniteInternalId[]›*

A list of node IDs corresponding to the elements of the inpu.

___

####  resetAllNodeColors

▸ **resetAllNodeColors**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:482](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L482)*

Restore original colors for all nodes.

**Returns:** *void*

___

####  resetNodeColor

▸ **resetNodeColor**(`nodeId`: number): *Promise‹void›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:436](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L436)*

Set original node color by node ID.
This method is async because node ID might be not loaded yet.

**`deprecated`** [Cognite3DModel.resetNodeColorByTreeIndex](#resetnodecolorbytreeindex)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | number |   |

**Returns:** *Promise‹void›*

___

####  resetNodeColorByTreeIndex

▸ **resetNodeColorByTreeIndex**(`treeIndex`: number, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:446](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L446)*

Set original node color by tree index.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`treeIndex` | number | - | - |
`applyToChildren` | boolean | false |   |

**Returns:** *Promise‹number›*

___

####  resetNodeTransformByTreeIndex

▸ **resetNodeTransformByTreeIndex**(`treeIndex`: number, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:600](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L600)*

Remove override transform of the node by tree index.

**`version`** new in 1.1.0

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`treeIndex` | number | - | - |
`applyToChildren` | boolean | true |   |

**Returns:** *Promise‹number›*

___

####  selectNode

▸ **selectNode**(`nodeId`: number): *Promise‹void›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:494](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L494)*

Highlight node by node ID.
This method is async because node ID might be not loaded yet.

**`deprecated`** Use [Cognite3DModel.selectNodeByTreeIndex](#selectnodebytreeindex).

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |

**Returns:** *Promise‹void›*

___

####  selectNodeByTreeIndex

▸ **selectNodeByTreeIndex**(`treeIndex`: number, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:505](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L505)*

Highlight node by tree index.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`treeIndex` | number | - |
`applyToChildren` | boolean | false |

**Returns:** *Promise‹number›*

Promise with a number of selected tree indices.

___

####  setAllNodeColors

▸ **setAllNodeColors**(`r`: number, `g`: number, `b`: number): *void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:471](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L471)*

Overrrides color for all nodes in the scene.

**`version`** new in 1.1.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`r` | number | Red component between 0 and 255. |
`g` | number | Green component between 0 and 255. |
`b` | number | Blue component between 0 and 255. |

**Returns:** *void*

___

####  setModelTransformation

▸ **setModelTransformation**(`matrix`: Matrix4): *void*

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd)*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:234](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L234)*

Sets transformation matrix of the model. This overrides the current transformation.

**`version`** new in 1.1.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matrix` | Matrix4 | Transformation matrix.  |

**Returns:** *void*

___

####  setNodeColor

▸ **setNodeColor**(`nodeId`: number, `r`: number, `g`: number, `b`: number): *Promise‹void›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:391](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L391)*

Set node color by node ID.
This method is async because nodeId might be not loaded yet.

**`deprecated`** Use [Cognite3DModel.setNodeColorByTreeIndex](#setnodecolorbytreeindex).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nodeId` | number | - |
`r` | number | Red component (0-255). |
`g` | number | Green component (0-255). |
`b` | number | Blue componenet (0-255).  |

**Returns:** *Promise‹void›*

___

####  setNodeColorByTreeIndex

▸ **setNodeColorByTreeIndex**(`treeIndex`: number, `r`: number, `g`: number, `b`: number, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:405](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L405)*

Update color of a 3D node identified by it's tree index.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`treeIndex` | number | - | Tree index of the node to update. |
`r` | number | - | Red component (0-255). |
`g` | number | - | Green component (0-255). |
`b` | number | - | Blue component (0-255). |
`applyToChildren` | boolean | false | When true, the color will be applied to all descendants. |

**Returns:** *Promise‹number›*

Promise that resolves to number of nodes affected.

___

####  setNodeTransformByTreeIndex

▸ **setNodeTransformByTreeIndex**(`treeIndex`: number, `transform`: Matrix4, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:572](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L572)*

Set override transform of the node by tree index.

**`version`** new in 1.1.0

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`treeIndex` | number | - | - |
`transform` | Matrix4 | - | - |
`applyToChildren` | boolean | true |   |

**Returns:** *Promise‹number›*

___

####  showAllNodes

▸ **showAllNodes**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:737](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L737)*

Show all the nodes that were hidden by [Cognite3DModel.hideNodeByTreeIndex](#hidenodebytreeindex),
[Cognite3DModel.hideNode](#hidenode) or [Cognite3DModel.hideAllNodes](#hideallnodes).

**Returns:** *void*

___

####  showNode

▸ **showNode**(`nodeId`: number): *Promise‹void›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:703](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L703)*

Show the node by node ID, that was hidden by [Cognite3DModel.hideNodeByTreeIndex](#hidenodebytreeindex),
[Cognite3DModel.hideNode](#hidenode) or [Cognite3DModel.hideAllNodes](#hideallnodes)
This method is async because nodeId might be not loaded yet.

**`deprecated`** Use [Cognite3DModel.showNodeByTreeIndex](#shownodebytreeindex).

**`example`** 
```js
model.hideAllNodes();
model.showNode(nodeId);
```

**Parameters:**

Name | Type |
------ | ------ |
`nodeId` | number |

**Returns:** *Promise‹void›*

___

####  showNodeByTreeIndex

▸ **showNodeByTreeIndex**(`treeIndex`: number, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:715](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L715)*

Show the node by tree index, that was hidden by [Cognite3DModel.hideNodeByTreeIndex](#hidenodebytreeindex),
[Cognite3DModel.hideNode](#hidenode) or [Cognite3DModel.hideAllNodes](#hideallnodes).

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`treeIndex` | number | - | Tree index of node to make visible. |
`applyToChildren` | boolean | false | When true all descendants of the provided node is also shown. |

**Returns:** *Promise‹number›*

Number of nodes affected.

___

####  unghostAllNodes

▸ **unghostAllNodes**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:685](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L685)*

Disable ghost mode for all nodes in the model.

**`version`** new in 1.1.0

**Returns:** *void*

___

####  unghostNodeByTreeIndex

▸ **unghostNodeByTreeIndex**(`treeIndex`: number, `applyToChildren`: boolean): *Promise‹number›*

*Defined in [viewer/src/public/migration/Cognite3DModel.ts:651](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DModel.ts#L651)*

Disables ghost mode for the tree index given, making the object be rendered normal.

**`version`** new in 1.1.0

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`treeIndex` | number | - | Tree index of node to un-ghost. |
`applyToChildren` | boolean | false | When true, all descendants of the node is also un-ghosted. |

**Returns:** *Promise‹number›*

Promise that resolves to the number of affected nodes.


<a name="classes_index_cognite3dviewermd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [Cognite3DViewer](#classes_index_cognite3dviewermd)

## Class: Cognite3DViewer

**`example`** 
```js
const viewer = new Cognite3DViewer({
  noBackground: true,
  sdk: CogniteClient({...})
});
```

**`module`** @cognite/reveal

### Hierarchy

* **Cognite3DViewer**

### Index

#### Constructors

* [constructor](#constructor)

#### Accessors

* [cadBudget](#cadbudget)
* [cameraControls](#cameracontrols)
* [cameraControlsEnabled](#cameracontrolsenabled)
* [domElement](#domelement)
* [renderer](#renderer)

#### Methods

* [addCadModel](#addcadmodel)
* [addModel](#addmodel)
* [addObject3D](#addobject3d)
* [addPointCloudModel](#addpointcloudmodel)
* [clearCache](#clearcache)
* [determineModelType](#determinemodeltype)
* [disableKeyboardNavigation](#disablekeyboardnavigation)
* [dispose](#dispose)
* [enableKeyboardNavigation](#enablekeyboardnavigation)
* [fitCameraToBoundingBox](#fitcameratoboundingbox)
* [fitCameraToModel](#fitcameratomodel)
* [requestRedraw](#requestRedraw)
* [getCamera](#getcamera)
* [getCameraPosition](#getcameraposition)
* [getCameraTarget](#getcameratarget)
* [getIntersectionFromPixel](#getintersectionfrompixel)
* [getScene](#getscene)
* [getScreenshot](#getscreenshot)
* [getVersion](#getversion)
* [loadCameraFromModel](#loadcamerafrommodel)
* [off](#off)
* [on](#on)
* [removeModel](#removemodel)
* [removeObject3D](#removeobject3d)
* [setBackgroundColor](#setbackgroundcolor)
* [setCameraPosition](#setcameraposition)
* [setCameraTarget](#setcameratarget)
* [setSlicingPlanes](#setslicingplanes)
* [worldToScreen](#worldtoscreen)
* [isBrowserSupported](#static-isbrowsersupported)

### Constructors

####  constructor

\+ **new Cognite3DViewer**(`options`: [Cognite3DViewerOptions](#interfaces_index_cognite3dvieweroptionsmd)): *[Cognite3DViewer](#classes_index_cognite3dviewermd)*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:188](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Cognite3DViewerOptions](#interfaces_index_cognite3dvieweroptionsmd) |

**Returns:** *[Cognite3DViewer](#classes_index_cognite3dviewermd)*

### Accessors

####  cadBudget

• **get cadBudget**(): *[CadModelBudget](#cadmodelbudget)*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:166](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L166)*

Gets the current budget for downloading geometry for CAD models. Note that this
budget is shared between all added CAD models and not a per-model budget.

**`version`** New in 1.2.0

**Returns:** *[CadModelBudget](#cadmodelbudget)*

• **set cadBudget**(`budget`: [CadModelBudget](#cadmodelbudget)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:177](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L177)*

Sets the current budget for downloading geometry for CAD models. Note that this
budget is shared between all added CAD models and not a per-model budget.

**`version`** New in 1.2.0

**Parameters:**

Name | Type |
------ | ------ |
`budget` | [CadModelBudget](#cadmodelbudget) |

**Returns:** *void*

___

####  cameraControls

• **get cameraControls**(): *ComboControls*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:790](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L790)*

Gets the camera controller. See https://www.npmjs.com/package/@cognite/three-combo-controls
for documentation. Note that by default the `minDistance` setting of the controls will
be automatic. This can be disabled using [Cognite3DViewerOptions.automaticControlsSensitivity](#optional-automaticcontrolssensitivity).

**`version`** new in 1.4.0

**Returns:** *ComboControls*

___

####  cameraControlsEnabled

• **get cameraControlsEnabled**(): *boolean*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:798](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L798)*

Gets wheter camera controls through mouse, touch and keyboard are enabled.

**`version`** new in 1.2.0

**Returns:** *boolean*

• **set cameraControlsEnabled**(`enabled`: boolean): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:808](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L808)*

Sets wheter camera controls through mouse, touch and keyboard are enabled.
This can be useful to e.g. temporarily disable navigation when manipulating other
objects in the scene or when implementing a "cinematic" viewer.

**`version`** new in 1.2.0

**Parameters:**

Name | Type |
------ | ------ |
`enabled` | boolean |

**Returns:** *void*

___

####  domElement

• **get domElement**(): *HTMLElement*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:92](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L92)*

The DOM element the viewer will insert its rendering canvas into.
The DOM element can be specified in the options when the viewer is created.
If not specified, the DOM element will be created automatically.
The DOM element cannot be changed after the viewer has been created.

**Returns:** *HTMLElement*

___

####  renderer

• **get renderer**(): *WebGLRenderer*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:99](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L99)*

Returns the renderer used to produce images from 3D geometry.

**Returns:** *WebGLRenderer*

### Methods

####  addCadModel

▸ **addCadModel**(`options`: [AddModelOptions](#interfaces_index_addmodeloptionsmd)): *Promise‹[Cognite3DModel](#classes_index_cognite3dmodelmd)›*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:466](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L466)*

Add a new CAD 3D model to the viewer.
Call [Cognite3DViewer.fitCameraToModel](#fitcameratomodel) to see the model after the model has loaded.

**`example`** 
```js
const options = {
modelId:     'COGNITE_3D_MODEL_ID',
revisionId:  'COGNITE_3D_REVISION_ID',
};
viewer.addCadModel(options).then(model => {
viewer.fitCameraToModel(model, 0);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AddModelOptions](#interfaces_index_addmodeloptionsmd) |

**Returns:** *Promise‹[Cognite3DModel](#classes_index_cognite3dmodelmd)›*

___

####  addModel

▸ **addModel**(`options`: [AddModelOptions](#interfaces_index_addmodeloptionsmd)): *Promise‹[Cognite3DModel](#classes_index_cognite3dmodelmd) | [CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd)›*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:439](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L439)*

Add a new model to the viewer.
Call [Cognite3DViewer.fitCameraToModel](#fitcameratomodel) to see the model after the model has loaded.

**`example`** 
```js
const options = {
modelId:     'COGNITE_3D_MODEL_ID',
revisionId:  'COGNITE_3D_REVISION_ID',
};
viewer.addModel(options).then(model => {
viewer.fitCameraToModel(model, 0);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AddModelOptions](#interfaces_index_addmodeloptionsmd) |

**Returns:** *Promise‹[Cognite3DModel](#classes_index_cognite3dmodelmd) | [CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd)›*

___

####  addObject3D

▸ **addObject3D**(`object`: Object3D): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:615](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L615)*

Add a THREE.Object3D to the viewer.

**`example`** 
```js
const sphere = new THREE.Mesh(
new THREE.SphereBufferGeometry(),
new THREE.MeshBasicMaterial()
);
viewer.addObject3D(sphere);
```

**Parameters:**

Name | Type |
------ | ------ |
`object` | Object3D |

**Returns:** *void*

___

####  addPointCloudModel

▸ **addPointCloudModel**(`options`: [AddModelOptions](#interfaces_index_addmodeloptionsmd)): *Promise‹[CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd)›*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:510](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L510)*

Add a new pointcloud 3D model to the viewer.
Call [Cognite3DViewer.fitCameraToModel](#fitcameratomodel) to see the model after the model has loaded.

**`example`** 
```js
const options = {
modelId:     'COGNITE_3D_MODEL_ID',
revisionId:  'COGNITE_3D_REVISION_ID',
};
viewer.addPointCloudModel(options).then(model => {
viewer.fitCameraToModel(model, 0);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AddModelOptions](#interfaces_index_addmodeloptionsmd) |

**Returns:** *Promise‹[CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd)›*

___

####  clearCache

▸ **clearCache**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:1103](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L1103)*

**`deprecated`** There is no cache anymore.

**`throws`** [NotSupportedInMigrationWrapperError](#classes_index_notsupportedinmigrationwrappererrormd)

**Returns:** *void*

___

####  determineModelType

▸ **determineModelType**(`modelId`: number, `revisionId`: number): *Promise‹[SupportedModelTypes](#supportedmodeltypes) | ""›*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:592](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L592)*

Use to determine of which type the model is.

**`example`** 
```typescript
const viewer = new Cognite3DViewer(...);
const type = await viewer.determineModelType(options.modelId, options.revisionId)
let model: Cognite3DModel | CognitePointCloudModel
switch (type) {
  case 'cad':
    model = await viewer.addCadModel(options);
    break;
  case 'pointcloud':
    model = await viewer.addPointCloudModel(options);
    break;
  default:
    throw new Error('Model is not supported');
}
viewer.fitCameraToModel(model);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`modelId` | number | The model's id. |
`revisionId` | number | The model's revision id.  |

**Returns:** *Promise‹[SupportedModelTypes](#supportedmodeltypes) | ""›*

Empty string if type is not supported.

___

####  disableKeyboardNavigation

▸ **disableKeyboardNavigation**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:911](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L911)*

Disables camera movement by pressing WASM or arrows keys.

**Returns:** *void*

___

####  dispose

▸ **dispose**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:291](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L291)*

Dispose of WebGL resources. Can be used to free up memory when the viewer is no longer in use.

**`see`** [https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects)
```ts
// Viewer is no longer in use, free up memory
viewer.dispose();
```.

**Returns:** *void*

___

####  enableKeyboardNavigation

▸ **enableKeyboardNavigation**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:904](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L904)*

Allows to move camera with WASM or arrows keys.

**Returns:** *void*

___

####  fitCameraToBoundingBox

▸ **fitCameraToBoundingBox**(`box`: Box3, `duration?`: undefined | number, `radiusFactor`: number): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:874](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L874)*

Move camera to a place where the content of a bounding box is visible to the camera.

**`example`** 
```js
// Fit camera to bounding box over 500 milliseconds
viewer.fitCameraToBoundingBox(boundingBox, 500);
```
```js
// Fit camera to bounding box instantaneously
viewer.fitCameraToBoundingBox(boundingBox, 0);
```
```js
// Place the camera closer to the bounding box
viewer.fitCameraToBoundingBox(boundingBox, 500, 2);
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`box` | Box3 | - | The bounding box in world space. |
`duration?` | undefined &#124; number | - | The duration of the animation moving the camera. Set this to 0 (zero) to disable animation. |
`radiusFactor` | number | 2 | The ratio of the distance from camera to center of box and radius of the box. |

**Returns:** *void*

___

####  fitCameraToModel

▸ **fitCameraToModel**(`model`: [CogniteModelBase](#interfaces_index_cognitemodelbasemd), `duration?`: undefined | number): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:850](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L850)*

Move camera to a place where the 3D model is visible.
It uses the bounding box of the 3D model and calls [Cognite3DViewer.fitCameraToBoundingBox](#fitcameratoboundingbox).

**`example`** 
```js
// Fit camera to model
viewer.fitCameraToModel(model);
```
```js
// Fit camera to model over 500 milliseconds
viewer.fitCameraToModel(model, 500);
```
```js
// Fit camera to model instantly
viewer.fitCameraToModel(model, 0);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | [CogniteModelBase](#interfaces_index_cognitemodelbasemd) | The 3D model. |
`duration?` | undefined &#124; number | The duration of the animation moving the camera. Set this to 0 (zero) to disable animation. |

**Returns:** *void*

___

####  requestRedraw

▸ **requestRedraw**(): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:897](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L897)*

Typically used when you perform some changes and can't see them unless you move camera.
To fix this requestRedraw might be used.

**Returns:** *void*

___

####  getCamera

▸ **getCamera**(): *PerspectiveCamera*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:709](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L709)*

**`obvious`** 

**Returns:** *PerspectiveCamera*

The THREE.Camera used for rendering.

___

####  getCameraPosition

▸ **getCameraPosition**(): *Vector3*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:725](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L725)*

**`obvious`** 

**Returns:** *Vector3*

Camera's position in world space.

___

####  getCameraTarget

▸ **getCameraTarget**(): *Vector3*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:736](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L736)*

**`obvious`** 

**Returns:** *Vector3*

Camera's target in world space.

___

####  getIntersectionFromPixel

▸ **getIntersectionFromPixel**(`offsetX`: number, `offsetY`: number, `options?`: [IntersectionFromPixelOptions](#interfaces_index_intersectionfrompixeloptionsmd)): *null | [Intersection](#intersection)*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:1038](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L1038)*

Raycasting model(s) for finding where the ray intersects with the model.

**`see`** [https://en.wikipedia.org/wiki/Ray_casting](https://en.wikipedia.org/wiki/Ray_casting).

**`example`** For CAD model
```js
const offsetX = 50 // pixels from the left
const offsetY = 100 // pixels from the top
const intersection = viewer.getIntersectionFromPixel(offsetX, offsetY);
if (intersection) // it was a hit
  console.log(
  'You hit model ', intersection.model,
  ' at the node with tree index ', intersection.treeIndex,
  ' at this exact point ', intersection.point
  );
```

**`example`** For point cloud
```js
const offsetX = 50 // pixels from the left
const offsetY = 100 // pixels from the top
const intersection = viewer.getIntersectionFromPixel(offsetX, offsetY);
if (intersection) // it was a hit
  console.log(
  'You hit model ', intersection.model,
  ' at the point index ', intersection.pointIndex,
  ' at this exact point ', intersection.point
  );
```

**`version`** The options parameter was added in version 1.3.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`offsetX` | number | X coordinate in pixels (relative to the domElement). |
`offsetY` | number | Y coordinate in pixels (relative to the domElement). |
`options?` | [IntersectionFromPixelOptions](#interfaces_index_intersectionfrompixeloptionsmd) | Options to control the behaviour of the intersection operation. Optional (new in 1.3.0). |

**Returns:** *null | [Intersection](#intersection)*

If there was an intersection then return the intersection object - otherwise it returns `null` if there were no intersections.

___

####  getScene

▸ **getScene**(): *Scene*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:717](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L717)*

**`obvious`** 

**Returns:** *Scene*

The THREE.Scene used for rendering.

___

####  getScreenshot

▸ **getScreenshot**(`width`: number, `height`: number): *Promise‹string›*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:982](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L982)*

Take screenshot from the current camera position.

**`example`** 
```js
// Take a screenshot with custom resolution
const url = await viewer.getScreenshot(1920, 1080);
```
```js
// Add a screenshot with resolution of the canvas to the page
const url = await viewer.getScreenshot();
const image = document.createElement('img');
image.src = url;
document.body.appendChild(url);
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`width` | number | this.canvas.width | Width of the final image. Default is current canvas size. |
`height` | number | this.canvas.height | Height of the final image. Default is current canvas size. |

**Returns:** *Promise‹string›*

A [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) of the image ('image/png').

___

####  getVersion

▸ **getVersion**(): *string*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:279](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L279)*

Returns reveal version installed.

**Returns:** *string*

___

####  loadCameraFromModel

▸ **loadCameraFromModel**(`model`: [CogniteModelBase](#interfaces_index_cognitemodelbasemd)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:822](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L822)*

Attempts to load the camera settings from the settings stored for the
provided model. See [https://docs.cognite.com/api/v1/#operation/get3DRevision](https://docs.cognite.com/api/v1/#operation/get3DRevision)
and [https://docs.cognite.com/api/v1/#operation/update3DRevisions](https://docs.cognite.com/api/v1/#operation/update3DRevisions) for
information on how this setting is retrieved and stored. This setting can
also be changed through the 3D models management interface in Cognite Fusion.
If no camera configuration is stored in CDF, [Cognite3DViewer.fitCameraToModel](#fitcameratomodel)
is used as a fallback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | [CogniteModelBase](#interfaces_index_cognitemodelbasemd) | The model to load camera settings from.  |

**Returns:** *void*

___

####  off

▸ **off**(`event`: "click" | "hover", `callback`: [PointerEventDelegate](#pointereventdelegate)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:386](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L386)*

Remove event listener from the viewer.
Call [Cognite3DViewer.on](#on) to add event listener.

**`example`** 
```js
viewer.off('click', onClick);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | "click" &#124; "hover" | - |
`callback` | [PointerEventDelegate](#pointereventdelegate) |   |

**Returns:** *void*

▸ **off**(`event`: "cameraChange", `callback`: [CameraChangeDelegate](#camerachangedelegate)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:387](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L387)*

Remove event listener from the viewer.
Call [Cognite3DViewer.on](#on) to add event listener.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | "cameraChange" | - |
`callback` | [CameraChangeDelegate](#camerachangedelegate) |   |

**Returns:** *void*

▸ **off**(`event`: "sceneRendered", `callback`: [SceneRenderedDelegate](#scenerendereddelegate)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:388](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L388)*

Remove event listener from the viewer.
Call [Cognite3DViewer.on](#on) to add event listener.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | "sceneRendered" | - |
`callback` | [SceneRenderedDelegate](#scenerendereddelegate) |   |

**Returns:** *void*

▸ **off**(`event`: "disposed", `callback`: [DisposedDelegate](#disposeddelegate)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:389](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L389)*

Remove event listener from the viewer.
Call [Cognite3DViewer.on](#on) to add event listener.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | "disposed" | - |
`callback` | [DisposedDelegate](#disposeddelegate) |   |

**Returns:** *void*

___

####  on

▸ **on**(`event`: "disposed", `callback`: [DisposedDelegate](#disposeddelegate)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:319](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L319)*

Triggered when the viewer is disposed. Listeners should clean up any
resources held and remove the reference to the viewer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | "disposed" | - |
`callback` | [DisposedDelegate](#disposeddelegate) |   |

**Returns:** *void*

▸ **on**(`event`: "click" | "hover", `callback`: [PointerEventDelegate](#pointereventdelegate)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:328](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L328)*

Add event listener to the viewer.
Call [Cognite3DViewer.off](#off) to remove an event listener.

**`example`** 
```js
const onClick = (event) => { console.log(event.offsetX, event.offsetY) };
viewer.on('click', onClick);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | "click" &#124; "hover" | - |
`callback` | [PointerEventDelegate](#pointereventdelegate) |   |

**Returns:** *void*

▸ **on**(`event`: "cameraChange", `callback`: [CameraChangeDelegate](#camerachangedelegate)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:337](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L337)*

Add event listener to the viewer.
Call [Cognite3DViewer.off](#off) to remove an event listener.

**`example`** 
```js
viewer.on('cameraChange', (position, target) => {
  console.log('Camera changed: ', position, target);
});
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | "cameraChange" | - |
`callback` | [CameraChangeDelegate](#camerachangedelegate) |   |

**Returns:** *void*

▸ **on**(`event`: "sceneRendered", `callback`: [SceneRenderedDelegate](#scenerendereddelegate)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:343](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L343)*

Event that is triggered immediatly after the scene has been rendered.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | "sceneRendered" | - |
`callback` | [SceneRenderedDelegate](#scenerendereddelegate) |   |

**Returns:** *void*

___

####  removeModel

▸ **removeModel**(`model`: [Cognite3DModel](#classes_index_cognite3dmodelmd) | [CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd)): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:541](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L541)*

Removes a model that was previously added using [Cognite3DViewer.addModel](#addmodel),
[Cognite3DViewer.addCadModel](#addcadmodel) or [Cognite3DViewer.addPointCloudModel](#addpointcloudmodel)
.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | [Cognite3DModel](#classes_index_cognite3dmodelmd) &#124; [CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd) |   |

**Returns:** *void*

___

####  removeObject3D

▸ **removeObject3D**(`object`: Object3D): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:636](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L636)*

Remove a THREE.Object3D from the viewer.

**`example`** 
```js
const sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(), new THREE.MeshBasicMaterial());
viewer.addObject3D(sphere);
viewer.removeObject3D(sphere);
```

**Parameters:**

Name | Type |
------ | ------ |
`object` | Object3D |

**Returns:** *void*

___

####  setBackgroundColor

▸ **setBackgroundColor**(`color`: Color): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:653](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L653)*

Sets the color used as the clear color of the renderer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | Color |   |

**Returns:** *void*

___

####  setCameraPosition

▸ **setCameraPosition**(`position`: Vector3): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:756](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L756)*

**`obvious`** 

**`example`** 
```js
// store position, target
const position = viewer.getCameraPosition();
const target = viewer.getCameraTarget();
// restore position, target
viewer.setCameraPosition(position);
viewer.setCameraTarget(target);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`position` | Vector3 | Position in world space. |

**Returns:** *void*

___

####  setCameraTarget

▸ **setCameraTarget**(`target`: Vector3): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:777](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L777)*

Set camera's target.

**`example`** 
```js
// store position, target
const position = viewer.getCameraPosition();
const target = viewer.getCameraTarget();
// restore position, target
viewer.setCameraPosition(position);
viewer.setCameraTarget(target);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | Vector3 | Target in world space. |

**Returns:** *void*

___

####  setSlicingPlanes

▸ **setSlicingPlanes**(`slicingPlanes`: Plane[]): *void*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:691](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L691)*

Sets per-pixel slicing planes. Pixels behind any of the planes will be sliced away.

**`example`** 
```js
// Hide pixels with values less than 0 in the x direction
const plane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
viewer.setSlicingPlanes([plane]);
```
```js
// Hide pixels with values greater than 20 in the x direction
 const plane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 20);
viewer.setSlicingPlanes([plane]);
```
```js
// Hide pixels with values less than 0 in the x direction or greater than 0 in the y direction
const xPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
const yPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
viewer.setSlicingPlanes([xPlane, yPlane]);
```
```js
// Hide pixels behind an arbitrary, non axis-aligned plane
 const plane = new THREE.Plane(new THREE.Vector3(1.5, 20, -19), 20);
viewer.setSlicingPlanes([plane]);
```
```js
// Disable slicing planes
 viewer.setSlicingPlanes([]);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`slicingPlanes` | Plane[] | The planes to use for slicing. |

**Returns:** *void*

___

####  worldToScreen

▸ **worldToScreen**(`point`: Vector3, `normalize?`: undefined | false | true): *Vector2 | null*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:949](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L949)*

Convert a point in world space to its coordinates in the canvas. This can be used to place HTML objects near 3D objects on top of the 3D viewer.

**`see`** [https://www.w3schools.com/graphics/canvas_coordinates.asp](https://www.w3schools.com/graphics/canvas_coordinates.asp).

**`example`** 
```js
const boundingBoxCenter = new THREE.Vector3();
// Find center of bounding box in world space
model.getBoundingBox(nodeId).getCenter(boundingBoxCenter);
// Screen coordinates of that point
const screenCoordinates = viewer.worldToScreen(boundingBoxCenter);
```
```js
const boundingBoxCenter = new THREE.Vector3();
// Find center of bounding box in world space
model.getBoundingBox(nodeId).getCenter(boundingBoxCenter);
// Screen coordinates of that point normalized in the range [0,1]
const screenCoordinates = viewer.worldToScreen(boundingBoxCenter, true);
```
```js
const boundingBoxCenter = new THREE.Vector3();
// Find center of bounding box in world space
model.getBoundingBox(nodeId).getCenter(boundingBoxCenter);
// Screen coordinates of that point
const screenCoordinates = viewer.worldToScreen(boundingBoxCenter);
if (screenCoordinates == null) {
  // Object not visible on screen
} else {
  // Object is visible on screen
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | Vector3 | World space coordinate. |
`normalize?` | undefined &#124; false &#124; true | Optional. If true, coordinates are normalized into [0,1]. If false, the values are in the range [0, <canvas_size>). |

**Returns:** *Vector2 | null*

Returns 2D coordinates if the point is visible on screen, or `null` if object is outside screen.

___

#### `Static` isBrowserSupported

▸ **isBrowserSupported**(): *true*

*Defined in [viewer/src/public/migration/Cognite3DViewer.ts:82](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/Cognite3DViewer.ts#L82)*

For now it just always returns true.

**`see`** Https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext#Browser_compatibility.

**Returns:** *true*


<a name="classes_index_cognitepointcloudmodelmd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd)

## Class: CognitePointCloudModel

Represents a point clouds model loaded from CDF.

**`module`** @cognite/reveal

### Hierarchy

* Object3D

  ↳ **CognitePointCloudModel**

### Implements

* [CogniteModelBase](#interfaces_index_cognitemodelbasemd)

### Index

#### Properties

* [modelId](#modelid)
* [revisionId](#revisionid)
* [type](#type)

#### Accessors

* [pointBudget](#pointbudget)
* [pointColorType](#pointcolortype)
* [pointShape](#pointshape)
* [pointSize](#pointsize)

#### Methods

* [dispose](#dispose)
* [getCameraConfiguration](#getcameraconfiguration)
* [getClasses](#getclasses)
* [getModelBoundingBox](#getmodelboundingbox)
* [getModelTransformation](#getmodeltransformation)
* [hasClass](#hasclass)
* [isClassVisible](#isclassvisible)
* [setClassVisible](#setclassvisible)
* [setModelTransformation](#setmodeltransformation)

### Properties

####  modelId

• **modelId**: *number*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:19](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L19)*

___

####  revisionId

• **revisionId**: *number*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:23](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L23)*

The modelId of the point cloud model in Cognite Data Fusion.

___

####  type

• **type**: *[SupportedModelTypes](#supportedmodeltypes)* = "pointcloud"

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd).[type](#type)*

*Overrides void*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:18](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L18)*

### Accessors

####  pointBudget

• **get pointBudget**(): *number*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:145](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L145)*

Returns the current budget measured in number of points.

**Returns:** *number*

• **set pointBudget**(`count`: number): *void*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:154](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L154)*

The point budget limits the number of points loaded and rendered at any given time,
which helps to adapt performance requirements to the capabilities of different hardware.
Recommended values are between 500.000  and 10.000.000.

**Parameters:**

Name | Type |
------ | ------ |
`count` | number |

**Returns:** *void*

___

####  pointColorType

• **get pointColorType**(): *[PotreePointColorType](#enums_index_potreepointcolortypemd)*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:161](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L161)*

Determines how points currently are colored.

**Returns:** *[PotreePointColorType](#enums_index_potreepointcolortypemd)*

• **set pointColorType**(`type`: [PotreePointColorType](#enums_index_potreepointcolortypemd)): *void*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:173](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L173)*

Specifies how points are colored.

**`default`** PotreePointColorType.Rgb

**`example`** 
```js
model.pointColorType = PotreePointColorType.Rgb
```

**Parameters:**

Name | Type |
------ | ------ |
`type` | [PotreePointColorType](#enums_index_potreepointcolortypemd) |

**Returns:** *void*

___

####  pointShape

• **get pointShape**(): *[PotreePointShape](#enums_index_potreepointshapemd)*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:200](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L200)*

Sets the point shape of each rendered point in the point cloud.

**`default`** `PotreePointShape.Circle`

**`see`** [PotreePointShape](#enums_index_potreepointshapemd).

**`version`** New in 1.1.0

**Returns:** *[PotreePointShape](#enums_index_potreepointshapemd)*

• **set pointShape**(`shape`: [PotreePointShape](#enums_index_potreepointshapemd)): *void*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:209](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L209)*

Gets the point shape of each rendered point in the point cloud.

**`see`** [PotreePointShape](#enums_index_potreepointshapemd).

**`version`** New in 1.1.0

**Parameters:**

Name | Type |
------ | ------ |
`shape` | [PotreePointShape](#enums_index_potreepointshapemd) |

**Returns:** *void*

___

####  pointSize

• **get pointSize**(): *number*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:181](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L181)*

Returns the size of each rendered point in the point cloud.

**`version`** New in 1.1.0

**Returns:** *number*

• **set pointSize**(`size`: number): *void*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:190](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L190)*

Sets the size of each rendered point in the point cloud.

**`default`** `1`

**`version`** New in 1.1.0

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

### Methods

####  dispose

▸ **dispose**(): *void*

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd)*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:48](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L48)*

Used to clean up memory.

**Returns:** *void*

___

####  getCameraConfiguration

▸ **getCameraConfiguration**(): *[CameraConfiguration](#cameraconfiguration) | undefined*

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd)*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:76](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L76)*

Retrieves the camera position and target stored for the model. Typically this
is used to store a good starting position for a model. Returns `undefined` if there
isn't any stored camera configuration for the model.

**Returns:** *[CameraConfiguration](#cameraconfiguration) | undefined*

___

####  getClasses

▸ **getClasses**(): *Array‹number | [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd)›*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:138](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L138)*

Returns a list of sorted classification codes present in the model.

**`version`** New in 1.2.0

**Returns:** *Array‹number | [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd)›*

A sorted list of classification codes from the model.

___

####  getModelBoundingBox

▸ **getModelBoundingBox**(`outBbox?`: THREE.Box3): *Box3*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:67](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L67)*

**`example`** 
```js
const box = new THREE.Box3()
model.getModelBoundingBox(box);
// box now has the bounding box
```
```js
// the following code does the same
const box = model.getModelBoundingBox();
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`outBbox?` | THREE.Box3 | Optional. Used to write result to. |

**Returns:** *Box3*

Model's bounding box.

___

####  getModelTransformation

▸ **getModelTransformation**(`out?`: THREE.Matrix4): *Matrix4*

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd)*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:94](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L94)*

Gets transformation matrix of the model.

**`version`** new in 1.1.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`out?` | THREE.Matrix4 | Preallocated `THREE.Matrix4` (optional).  |

**Returns:** *Matrix4*

___

####  hasClass

▸ **hasClass**(`pointClass`: number | [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd)): *boolean*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:129](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L129)*

Returns true if the model has values with the given classification class.

**`version`** New in 1.2.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pointClass` | number &#124; [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd) | ASPRS classification class code. Either one of the well known classes from [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd) or a number for user defined classes. |

**Returns:** *boolean*

True if model has values in the class given.

___

####  isClassVisible

▸ **isClassVisible**(`pointClass`: number | [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd)): *boolean*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:118](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L118)*

Determines if points from a given class are visible.

**`throws`** Error if the model doesn't have the class given.

**`version`** New in 1.2.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pointClass` | number &#124; [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd) | ASPRS classification class code. Either one of the well known classes from [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd) or a number for user defined classes. |

**Returns:** *boolean*

True if points from the given class will be visible.

___

####  setClassVisible

▸ **setClassVisible**(`pointClass`: number | [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd), `visible`: boolean): *void*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:106](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L106)*

Sets a visible filter on points of a given class.

**`throws`** Error if the model doesn't have the class given.

**`version`** New in 1.2.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pointClass` | number &#124; [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd) | ASPRS classification class code. Either one of the well known classes from [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd) or a number for user defined classes. |
`visible` | boolean | Boolean flag that determines if the point class type should be visible or not. |

**Returns:** *void*

___

####  setModelTransformation

▸ **setModelTransformation**(`transformationMatrix`: Matrix4): *void*

*Implementation of [CogniteModelBase](#interfaces_index_cognitemodelbasemd)*

*Defined in [viewer/src/public/migration/CognitePointCloudModel.ts:85](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CognitePointCloudModel.ts#L85)*

Sets transformation matrix of the model. This overrides the current transformation.

**`version`** new in 1.1.0

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`transformationMatrix` | Matrix4 |   |

**Returns:** *void*


<a name="classes_index_notsupportedinmigrationwrappererrormd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [NotSupportedInMigrationWrapperError](#classes_index_notsupportedinmigrationwrappererrormd)

## Class: NotSupportedInMigrationWrapperError

Error that is thrown for certain type of functionality that was supported in @cognite/3d-viewer,
but not in @cognite/reveal.

**`module`** @cognite/reveal

### Hierarchy

* [Error](#static-error)

  ↳ **NotSupportedInMigrationWrapperError**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [message](#message)
* [name](#name)
* [stack](#optional-stack)
* [Error](#static-error)

### Constructors

####  constructor

\+ **new NotSupportedInMigrationWrapperError**(`message?`: undefined | string): *[NotSupportedInMigrationWrapperError](#classes_index_notsupportedinmigrationwrappererrormd)*

*Defined in [viewer/src/public/migration/NotSupportedInMigrationWrapperError.ts:10](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/NotSupportedInMigrationWrapperError.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |

**Returns:** *[NotSupportedInMigrationWrapperError](#classes_index_notsupportedinmigrationwrappererrormd)*

### Properties

####  message

• **message**: *string*

*Inherited from [NotSupportedInMigrationWrapperError](#classes_index_notsupportedinmigrationwrappererrormd).[message](#message)*

Defined in documentation/node_modules/typescript/lib/lib.es5.d.ts:974

___

####  name

• **name**: *string*

*Inherited from [NotSupportedInMigrationWrapperError](#classes_index_notsupportedinmigrationwrappererrormd).[name](#name)*

Defined in documentation/node_modules/typescript/lib/lib.es5.d.ts:973

___

#### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [NotSupportedInMigrationWrapperError](#classes_index_notsupportedinmigrationwrappererrormd).[stack](#optional-stack)*

Defined in documentation/node_modules/typescript/lib/lib.es5.d.ts:975

___

#### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in documentation/node_modules/typescript/lib/lib.es5.d.ts:984


<a name="classes_tools_debugcameratoolmd"></a>

[@cognite/reveal](#readmemd) › ["tools"](#modules_tools_md) › [DebugCameraTool](#classes_tools_debugcameratoolmd)

## Class: DebugCameraTool

### Hierarchy

* Cognite3DViewerToolBase

  ↳ **DebugCameraTool**

### Index

#### Constructors

* [constructor](#constructor)

#### Methods

* [dispose](#dispose)
* [hideCameraHelper](#hidecamerahelper)
* [off](#off)
* [showCameraHelper](#showcamerahelper)

### Constructors

####  constructor

\+ **new DebugCameraTool**(`viewer`: [Cognite3DViewer](#classes_index_cognite3dviewermd)): *[DebugCameraTool](#classes_tools_debugcameratoolmd)*

*Defined in [viewer/src/tools/DebugCameraTool.ts:18](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/DebugCameraTool.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`viewer` | [Cognite3DViewer](#classes_index_cognite3dviewermd) |

**Returns:** *[DebugCameraTool](#classes_tools_debugcameratoolmd)*

### Methods

####  dispose

▸ **dispose**(): *void*

*Overrides [ExplodedViewTool](#classes_tools_explodedviewtoolmd).[dispose](#dispose)*

*Defined in [viewer/src/tools/DebugCameraTool.ts:32](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/DebugCameraTool.ts#L32)*

Removes all elements and detaches from the viewer.

**`override`** 

**Returns:** *void*

___

####  hideCameraHelper

▸ **hideCameraHelper**(): *void*

*Defined in [viewer/src/tools/DebugCameraTool.ts:43](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/DebugCameraTool.ts#L43)*

**Returns:** *void*

___

####  off

▸ **off**(`event`: "disposed", `handler`: function): *void*

*Inherited from [HtmlOverlayTool](#classes_tools_htmloverlaytoolmd).[off](#off)*

*Defined in [viewer/src/tools/Cognite3DViewerToolBase.ts:39](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/Cognite3DViewerToolBase.ts#L39)*

Unregisters an event handler for the 'disposed'-event.

**Parameters:**

▪ **event**: *"disposed"*

▪ **handler**: *function*

▸ (): *void*

**Returns:** *void*

___

####  showCameraHelper

▸ **showCameraHelper**(): *void*

*Defined in [viewer/src/tools/DebugCameraTool.ts:37](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/DebugCameraTool.ts#L37)*

**Returns:** *void*


<a name="classes_tools_debugloadedsectorstoolmd"></a>

[@cognite/reveal](#readmemd) › ["tools"](#modules_tools_md) › [DebugLoadedSectorsTool](#classes_tools_debugloadedsectorstoolmd)

## Class: DebugLoadedSectorsTool

### Hierarchy

* Cognite3DViewerToolBase

  ↳ **DebugLoadedSectorsTool**

### Index

#### Constructors

* [constructor](#constructor)

#### Methods

* [dispose](#dispose)
* [off](#off)
* [setOptions](#setoptions)
* [showSectorBoundingBoxes](#showsectorboundingboxes)

### Constructors

####  constructor

\+ **new DebugLoadedSectorsTool**(`viewer`: [Cognite3DViewer](#classes_index_cognite3dviewermd), `options`: [DebugLoadedSectorsToolOptions](#debugloadedsectorstooloptions)): *[DebugLoadedSectorsTool](#classes_tools_debugloadedsectorstoolmd)*

*Defined in [viewer/src/tools/DebugLoadedSectorsTool.ts:27](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/DebugLoadedSectorsTool.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`viewer` | [Cognite3DViewer](#classes_index_cognite3dviewermd) | - |
`options` | [DebugLoadedSectorsToolOptions](#debugloadedsectorstooloptions) | {} |

**Returns:** *[DebugLoadedSectorsTool](#classes_tools_debugloadedsectorstoolmd)*

### Methods

####  dispose

▸ **dispose**(): *void*

*Overrides [ExplodedViewTool](#classes_tools_explodedviewtoolmd).[dispose](#dispose)*

*Defined in [viewer/src/tools/DebugLoadedSectorsTool.ts:48](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/DebugLoadedSectorsTool.ts#L48)*

**Returns:** *void*

___

####  off

▸ **off**(`event`: "disposed", `handler`: function): *void*

*Inherited from [HtmlOverlayTool](#classes_tools_htmloverlaytoolmd).[off](#off)*

*Defined in [viewer/src/tools/Cognite3DViewerToolBase.ts:39](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/Cognite3DViewerToolBase.ts#L39)*

Unregisters an event handler for the 'disposed'-event.

**Parameters:**

▪ **event**: *"disposed"*

▪ **handler**: *function*

▸ (): *void*

**Returns:** *void*

___

####  setOptions

▸ **setOptions**(`options`: [DebugLoadedSectorsToolOptions](#debugloadedsectorstooloptions)): *void*

*Defined in [viewer/src/tools/DebugLoadedSectorsTool.ts:37](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/DebugLoadedSectorsTool.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DebugLoadedSectorsToolOptions](#debugloadedsectorstooloptions) |

**Returns:** *void*

___

####  showSectorBoundingBoxes

▸ **showSectorBoundingBoxes**(`model`: [Cognite3DModel](#classes_index_cognite3dmodelmd)): *void*

*Defined in [viewer/src/tools/DebugLoadedSectorsTool.ts:52](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/DebugLoadedSectorsTool.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | [Cognite3DModel](#classes_index_cognite3dmodelmd) |

**Returns:** *void*


<a name="classes_tools_explodedviewtoolmd"></a>

[@cognite/reveal](#readmemd) › ["tools"](#modules_tools_md) › [ExplodedViewTool](#classes_tools_explodedviewtoolmd)

## Class: ExplodedViewTool

### Hierarchy

* Cognite3DViewerToolBase

  ↳ **ExplodedViewTool**

### Index

#### Constructors

* [constructor](#constructor)

#### Accessors

* [readyPromise](#readypromise)

#### Methods

* [dispose](#dispose)
* [expand](#expand)
* [off](#off)
* [reset](#reset)

### Constructors

####  constructor

\+ **new ExplodedViewTool**(`treeIndex`: number, `cadModel`: [Cognite3DModel](#classes_index_cognite3dmodelmd)): *[ExplodedViewTool](#classes_tools_explodedviewtoolmd)*

*Defined in [viewer/src/tools/ExplodedViewTool.ts:15](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/ExplodedViewTool.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`treeIndex` | number |
`cadModel` | [Cognite3DModel](#classes_index_cognite3dmodelmd) |

**Returns:** *[ExplodedViewTool](#classes_tools_explodedviewtoolmd)*

### Accessors

####  readyPromise

• **get readyPromise**(): *Promise‹void›*

*Defined in [viewer/src/tools/ExplodedViewTool.ts:13](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/ExplodedViewTool.ts#L13)*

**Returns:** *Promise‹void›*

### Methods

####  dispose

▸ **dispose**(): *void*

*Inherited from [ExplodedViewTool](#classes_tools_explodedviewtoolmd).[dispose](#dispose)*

*Defined in [viewer/src/tools/Cognite3DViewerToolBase.ts:54](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/Cognite3DViewerToolBase.ts#L54)*

Disposes the element and triggeres the 'disposed' event before clearing the list
of dipose-listeners.

**Returns:** *void*

___

####  expand

▸ **expand**(`expandRadius`: number): *Promise‹void›*

*Defined in [viewer/src/tools/ExplodedViewTool.ts:26](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/ExplodedViewTool.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`expandRadius` | number |

**Returns:** *Promise‹void›*

___

####  off

▸ **off**(`event`: "disposed", `handler`: function): *void*

*Inherited from [HtmlOverlayTool](#classes_tools_htmloverlaytoolmd).[off](#off)*

*Defined in [viewer/src/tools/Cognite3DViewerToolBase.ts:39](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/Cognite3DViewerToolBase.ts#L39)*

Unregisters an event handler for the 'disposed'-event.

**Parameters:**

▪ **event**: *"disposed"*

▪ **handler**: *function*

▸ (): *void*

**Returns:** *void*

___

####  reset

▸ **reset**(): *void*

*Defined in [viewer/src/tools/ExplodedViewTool.ts:43](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/ExplodedViewTool.ts#L43)*

**Returns:** *void*


<a name="classes_tools_htmloverlaytoolmd"></a>

[@cognite/reveal](#readmemd) › ["tools"](#modules_tools_md) › [HtmlOverlayTool](#classes_tools_htmloverlaytoolmd)

## Class: HtmlOverlayTool

Manages HTMLoverlays for {@see Cognite3DViewer}. Attaches HTML elements to a
3D position and updates it's position/visibility as user moves the camera. This is
useful to create HTML overlays to highlight information about key positions in the 3D model.

Attached elements *must* have CSS style 'position: absolute'. It's also recommended
in most cases to have styles 'pointerEvents: none' and 'touchAction: none' to avoid
interfering with 3D navigation. Consider also applying 'transform: translate(-50%, -50%)'
to anchor the center of the element rather than the top-left corner. In some cases the
`zIndex`-attribute is necessary for the element to appear on top of the viewer.

**`example`** 
```js
const el = document.createElement('div');
el.style.position = 'absolute'; // Required!
// Anchor to center of element
el.style.transform = 'translate(-50%, -50%)';
// Avoid being target for events
el.style.pointerEvents = 'none;
el.style.touchAction = 'none';
// Render in front of other elements
el.style.zIndex = 10;

el.style.color = 'red';
el.innerHtml = '<h1>Overlay</h1>';

const overlayTool = new HtmlOverlayTool(viewer);
overlayTool.add(el, new THREE.Vector3(10, 10, 10));
// ...
overlayTool.remove(el);
// or, to remove all attached elements
overlayTool.clear();

// detach the tool from the viewer
overlayTool.dispose();
```

### Hierarchy

* Cognite3DViewerToolBase

  ↳ **HtmlOverlayTool**

### Index

#### Constructors

* [constructor](#constructor)

#### Methods

* [add](#add)
* [clear](#clear)
* [dispose](#dispose)
* [forceUpdate](#forceupdate)
* [off](#off)
* [remove](#remove)

### Constructors

####  constructor

\+ **new HtmlOverlayTool**(`viewer`: [Cognite3DViewer](#classes_index_cognite3dviewermd)): *[HtmlOverlayTool](#classes_tools_htmloverlaytoolmd)*

*Defined in [viewer/src/tools/HtmlOverlayTool.ts:91](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/HtmlOverlayTool.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`viewer` | [Cognite3DViewer](#classes_index_cognite3dviewermd) |

**Returns:** *[HtmlOverlayTool](#classes_tools_htmloverlaytoolmd)*

### Methods

####  add

▸ **add**(`htmlElement`: HTMLElement, `position3D`: Vector3, `options`: [HtmlOverlayOptions](#htmloverlayoptions)): *void*

*Defined in [viewer/src/tools/HtmlOverlayTool.ts:121](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/HtmlOverlayTool.ts#L121)*

Registers a HTML overlay that will be updated on rendering.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`htmlElement` | HTMLElement | - | - |
`position3D` | Vector3 | - | - |
`options` | [HtmlOverlayOptions](#htmloverlayoptions) | {} |   |

**Returns:** *void*

___

####  clear

▸ **clear**(): *void*

*Defined in [viewer/src/tools/HtmlOverlayTool.ts:158](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/HtmlOverlayTool.ts#L158)*

Removes all attached HTML overlay elements.

**Returns:** *void*

___

####  dispose

▸ **dispose**(): *void*

*Overrides [ExplodedViewTool](#classes_tools_explodedviewtoolmd).[dispose](#dispose)*

*Defined in [viewer/src/tools/HtmlOverlayTool.ts:107](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/HtmlOverlayTool.ts#L107)*

Removes all elements and detaches from the viewer.

**`override`** 

**Returns:** *void*

___

####  forceUpdate

▸ **forceUpdate**(): *void*

*Defined in [viewer/src/tools/HtmlOverlayTool.ts:170](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/HtmlOverlayTool.ts#L170)*

Updates positions of all overlays. This is automatically managed and there
shouldn't be any reason to trigger this unless the attached elements are
modified externally.

**Returns:** *void*

___

####  off

▸ **off**(`event`: "disposed", `handler`: function): *void*

*Inherited from [HtmlOverlayTool](#classes_tools_htmloverlaytoolmd).[off](#off)*

*Defined in [viewer/src/tools/Cognite3DViewerToolBase.ts:39](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/Cognite3DViewerToolBase.ts#L39)*

Unregisters an event handler for the 'disposed'-event.

**Parameters:**

▪ **event**: *"disposed"*

▪ **handler**: *function*

▸ (): *void*

**Returns:** *void*

___

####  remove

▸ **remove**(`htmlElement`: HTMLElement): *void*

*Defined in [viewer/src/tools/HtmlOverlayTool.ts:146](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/HtmlOverlayTool.ts#L146)*

Removes a overlay and removes it from the DOM.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`htmlElement` | HTMLElement |   |

**Returns:** *void*

# Enums


<a name="enums_index_antialiasingmodemd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [AntiAliasingMode](#enums_index_antialiasingmodemd)

## Enumeration: AntiAliasingMode

Anti-aliasing modes supported by Reveal.

### Index

#### Enumeration members

* [FXAA](#fxaa)
* [NoAA](#noaa)

### Enumeration members

####  FXAA

• **FXAA**: = 1

*Defined in [viewer/src/public/types.ts:22](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L22)*

Fast-approximate anti-aliasing (FXAA) (1).

___

####  NoAA

• **NoAA**: = 0

*Defined in [viewer/src/public/types.ts:18](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L18)*

No anti-aliasing (0).


<a name="enums_index_potreepointcolortypemd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [PotreePointColorType](#enums_index_potreepointcolortypemd)

## Enumeration: PotreePointColorType

### Index

#### Enumeration members

* [Classification](#classification)
* [Depth](#depth)
* [Height](#height)
* [Intensity](#intensity)
* [LevelOfDetail](#levelofdetail)
* [PointIndex](#pointindex)
* [Rgb](#rgb)

### Enumeration members

####  Classification

• **Classification**: = Potree.PointColorType.CLASSIFICATION

*Defined in [viewer/src/datamodels/pointcloud/types.ts:35](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L35)*

Indicates whether a point is part of some class of objects.
Classes are mapped to colors.

___

####  Depth

• **Depth**: = Potree.PointColorType.DEPTH

*Defined in [viewer/src/datamodels/pointcloud/types.ts:17](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L17)*

Shows the distance from current camera with color gradient

___

####  Height

• **Height**: = Potree.PointColorType.HEIGHT

*Defined in [viewer/src/datamodels/pointcloud/types.ts:20](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L20)*

Height, or elevation, mapped to a color with a gradient.

___

####  Intensity

• **Intensity**: = Potree.PointColorType.INTENSITY

*Defined in [viewer/src/datamodels/pointcloud/types.ts:38](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L38)*

Indicates the strength of the backscattered signal in a laser scan.

___

####  LevelOfDetail

• **LevelOfDetail**: = Potree.PointColorType.LOD

*Defined in [viewer/src/datamodels/pointcloud/types.ts:29](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L29)*

Calculated during rendering.
It is equal to the level of the most detailed visible node in a region

___

####  PointIndex

• **PointIndex**: = Potree.PointColorType.POINT_INDEX

*Defined in [viewer/src/datamodels/pointcloud/types.ts:23](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L23)*

Specifies the order in which points were captured from a single beam.

___

####  Rgb

• **Rgb**: = Potree.PointColorType.RGB

*Defined in [viewer/src/datamodels/pointcloud/types.ts:14](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L14)*

Describes the observed real-world color of a point.


<a name="enums_index_potreepointshapemd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [PotreePointShape](#enums_index_potreepointshapemd)

## Enumeration: PotreePointShape

### Index

#### Enumeration members

* [Circle](#circle)
* [Square](#square)

### Enumeration members

####  Circle

• **Circle**: = Potree.PointShape.CIRCLE

*Defined in [viewer/src/datamodels/pointcloud/types.ts:8](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L8)*

___

####  Square

• **Square**: = Potree.PointShape.SQUARE

*Defined in [viewer/src/datamodels/pointcloud/types.ts:9](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L9)*


<a name="enums_index_potreepointsizetypemd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [PotreePointSizeType](#enums_index_potreepointsizetypemd)

## Enumeration: PotreePointSizeType

### Index

#### Enumeration members

* [Adaptive](#adaptive)
* [Fixed](#fixed)

### Enumeration members

####  Adaptive

• **Adaptive**: = Potree.PointSizeType.ADAPTIVE

*Defined in [viewer/src/datamodels/pointcloud/types.ts:42](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L42)*

___

####  Fixed

• **Fixed**: = Potree.PointSizeType.FIXED

*Defined in [viewer/src/datamodels/pointcloud/types.ts:43](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L43)*


<a name="enums_index_ssaosamplequalitymd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [SsaoSampleQuality](#enums_index_ssaosamplequalitymd)

## Enumeration: SsaoSampleQuality

SSAO rendering quality modes supported by Reveal.

### Index

#### Enumeration members

* [Default](#default)
* [High](#high)
* [Medium](#medium)
* [None](#none)
* [VeryHigh](#veryhigh)

### Enumeration members

####  Default

• **Default**: = Medium

*Defined in [viewer/src/public/types.ts:33](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L33)*

___

####  High

• **High**: = 64

*Defined in [viewer/src/public/types.ts:30](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L30)*

___

####  Medium

• **Medium**: = 32

*Defined in [viewer/src/public/types.ts:29](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L29)*

___

####  None

• **None**: = 1

*Defined in [viewer/src/public/types.ts:32](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L32)*

___

####  VeryHigh

• **VeryHigh**: = 128

*Defined in [viewer/src/public/types.ts:31](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L31)*


<a name="enums_index_wellknownasprspointclasscodesmd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd)

## Enumeration: WellKnownAsprsPointClassCodes

ASPRS well known point class types.

**`see`** [http://www.asprs.org/wp-content/uploads/2019/03/LAS_1_4_r14.pdf](http://www.asprs.org/wp-content/uploads/2019/03/LAS_1_4_r14.pdf) (page 30)

### Index

#### Enumeration members

* [BridgeDeck](#bridgedeck)
* [Building](#building)
* [Created](#created)
* [Default](#default)
* [Ground](#ground)
* [HighNoise](#highnoise)
* [HighVegetation](#highvegetation)
* [IgnoredGround](#ignoredground)
* [LowPoint](#lowpoint)
* [LowVegetation](#lowvegetation)
* [MedVegetation](#medvegetation)
* [OverheadStructure](#overheadstructure)
* [Rail](#rail)
* [ReservedOrBridgeDeck](#reservedorbridgedeck)
* [ReservedOrHighPoint](#reservedorhighpoint)
* [RoadSurface](#roadsurface)
* [Snow](#snow)
* [TemporalExclusion](#temporalexclusion)
* [TransmissionTower](#transmissiontower)
* [Unclassified](#unclassified)
* [UserDefinableOffset](#userdefinableoffset)
* [Water](#water)
* [WireConductor](#wireconductor)
* [WireGuard](#wireguard)
* [WireStructureConnector](#wirestructureconnector)

### Enumeration members

####  BridgeDeck

• **BridgeDeck**: = 17

*Defined in [viewer/src/datamodels/pointcloud/types.ts:100](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L100)*

Note that [WellKnownAsprsPointClassCodes.ReservedOrBridgeDeck](#reservedorbridgedeck) has been used
historically.

___

####  Building

• **Building**: = 6

*Defined in [viewer/src/datamodels/pointcloud/types.ts:65](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L65)*

___

####  Created

• **Created**: = 0

*Defined in [viewer/src/datamodels/pointcloud/types.ts:59](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L59)*

Created, never classified.

___

####  Default

• **Default**: = -1

*Defined in [viewer/src/datamodels/pointcloud/types.ts:55](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L55)*

Special value for all other classes. Some point in Potree might be in this class

___

####  Ground

• **Ground**: = 2

*Defined in [viewer/src/datamodels/pointcloud/types.ts:61](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L61)*

___

####  HighNoise

• **HighNoise**: = 18

*Defined in [viewer/src/datamodels/pointcloud/types.ts:106](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L106)*

High point, or "high noise".
Note that [WellKnownAsprsPointClassCodes.ReservedOrHighPoint](#reservedorhighpoint) has been used
historically.

___

####  HighVegetation

• **HighVegetation**: = 5

*Defined in [viewer/src/datamodels/pointcloud/types.ts:64](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L64)*

___

####  IgnoredGround

• **IgnoredGround**: = 20

*Defined in [viewer/src/datamodels/pointcloud/types.ts:114](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L114)*

E.g. breakline proximity.

___

####  LowPoint

• **LowPoint**: = 7

*Defined in [viewer/src/datamodels/pointcloud/types.ts:69](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L69)*

Low point, typically "low noise".

___

####  LowVegetation

• **LowVegetation**: = 3

*Defined in [viewer/src/datamodels/pointcloud/types.ts:62](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L62)*

___

####  MedVegetation

• **MedVegetation**: = 4

*Defined in [viewer/src/datamodels/pointcloud/types.ts:63](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L63)*

___

####  OverheadStructure

• **OverheadStructure**: = 19

*Defined in [viewer/src/datamodels/pointcloud/types.ts:110](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L110)*

E.g. conveyors, mining equipment, traffic lights.

___

####  Rail

• **Rail**: = 10

*Defined in [viewer/src/datamodels/pointcloud/types.ts:76](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L76)*

___

####  ReservedOrBridgeDeck

• **ReservedOrBridgeDeck**: = 12

*Defined in [viewer/src/datamodels/pointcloud/types.ts:82](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L82)*

In previous revisions of LAS this was "Bridge deck", but in more recent
revisions this value is reserved.

___

####  ReservedOrHighPoint

• **ReservedOrHighPoint**: = 8

*Defined in [viewer/src/datamodels/pointcloud/types.ts:74](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L74)*

In previous revisions of LAS this was High point ("high noise"), in more recent
revisions this value is reserved.

___

####  RoadSurface

• **RoadSurface**: = 11

*Defined in [viewer/src/datamodels/pointcloud/types.ts:77](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L77)*

___

####  Snow

• **Snow**: = 21

*Defined in [viewer/src/datamodels/pointcloud/types.ts:115](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L115)*

___

####  TemporalExclusion

• **TemporalExclusion**: = 22

*Defined in [viewer/src/datamodels/pointcloud/types.ts:120](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L120)*

Features excluded due to changes over time between data sources – e.g., water
levels, landslides, permafrost

___

####  TransmissionTower

• **TransmissionTower**: = 15

*Defined in [viewer/src/datamodels/pointcloud/types.ts:91](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L91)*

___

####  Unclassified

• **Unclassified**: = 1

*Defined in [viewer/src/datamodels/pointcloud/types.ts:60](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L60)*

___

####  UserDefinableOffset

• **UserDefinableOffset**: = 64

*Defined in [viewer/src/datamodels/pointcloud/types.ts:126](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L126)*

First user definable class identifier (64).
Values up to and including 63 are reserved

___

####  Water

• **Water**: = 9

*Defined in [viewer/src/datamodels/pointcloud/types.ts:75](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L75)*

___

####  WireConductor

• **WireConductor**: = 14

*Defined in [viewer/src/datamodels/pointcloud/types.ts:90](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L90)*

Wire conductor (phase).

___

####  WireGuard

• **WireGuard**: = 13

*Defined in [viewer/src/datamodels/pointcloud/types.ts:86](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L86)*

Wire guard shield.

___

####  WireStructureConnector

• **WireStructureConnector**: = 16

*Defined in [viewer/src/datamodels/pointcloud/types.ts:95](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/pointcloud/types.ts#L95)*

Wire-structure connector (e.g. insulator).

# Interfaces


<a name="interfaces_index_addmodeloptionsmd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [AddModelOptions](#interfaces_index_addmodeloptionsmd)

## Interface: AddModelOptions

**`module`** @cognite/reveal

### Hierarchy

* **AddModelOptions**

### Index

#### Properties

* [geometryFilter](#optional-geometryfilter)
* [localPath](#optional-localpath)
* [modelId](#modelid)
* [onComplete](#optional-oncomplete)
* [orthographicCamera](#optional-orthographiccamera)
* [revisionId](#revisionid)

### Properties

#### `Optional` geometryFilter

• **geometryFilter**? : *[GeometryFilter](#interfaces_index_geometryfiltermd)*

*Defined in [viewer/src/public/migration/types.ts:178](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L178)*

___

#### `Optional` localPath

• **localPath**? : *undefined | string*

*Defined in [viewer/src/public/migration/types.ts:177](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L177)*

___

####  modelId

• **modelId**: *number*

*Defined in [viewer/src/public/migration/types.ts:174](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L174)*

___

#### `Optional` onComplete

• **onComplete**? : *undefined | function*

*Defined in [viewer/src/public/migration/types.ts:180](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L180)*

___

#### `Optional` orthographicCamera

• **orthographicCamera**? : *undefined | false | true*

*Defined in [viewer/src/public/migration/types.ts:179](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L179)*

___

####  revisionId

• **revisionId**: *number*

*Defined in [viewer/src/public/migration/types.ts:175](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L175)*


<a name="interfaces_index_cadmodelmetadatamd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [CadModelMetadata](#interfaces_index_cadmodelmetadatamd)

## Interface: CadModelMetadata

### Hierarchy

* **CadModelMetadata**

### Index

#### Properties

* [blobUrl](#bloburl)
* [cameraConfiguration](#optional-cameraconfiguration)
* [inverseModelMatrix](#inversemodelmatrix)
* [modelMatrix](#modelmatrix)
* [scene](#scene)

### Properties

####  blobUrl

• **blobUrl**: *string*

*Defined in [viewer/src/datamodels/cad/CadModelMetadata.ts:10](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/cad/CadModelMetadata.ts#L10)*

___

#### `Optional` cameraConfiguration

• **cameraConfiguration**? : *[CameraConfiguration](#cameraconfiguration)*

*Defined in [viewer/src/datamodels/cad/CadModelMetadata.ts:13](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/cad/CadModelMetadata.ts#L13)*

___

####  inverseModelMatrix

• **inverseModelMatrix**: *Matrix4*

*Defined in [viewer/src/datamodels/cad/CadModelMetadata.ts:12](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/cad/CadModelMetadata.ts#L12)*

___

####  modelMatrix

• **modelMatrix**: *Matrix4*

*Defined in [viewer/src/datamodels/cad/CadModelMetadata.ts:11](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/cad/CadModelMetadata.ts#L11)*

___

####  scene

• **scene**: *SectorScene*

*Defined in [viewer/src/datamodels/cad/CadModelMetadata.ts:14](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/cad/CadModelMetadata.ts#L14)*


<a name="interfaces_index_cognite3dvieweroptionsmd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [Cognite3DViewerOptions](#interfaces_index_cognite3dvieweroptionsmd)

## Interface: Cognite3DViewerOptions

**`module`** @cognite/reveal

### Hierarchy

* **Cognite3DViewerOptions**

### Index

#### Properties

* [antiAliasingHint](#optional-antialiasinghint)
* [automaticCameraNearFar](#optional-automaticcameranearfar)
* [automaticControlsSensitivity](#optional-automaticcontrolssensitivity)
* [domElement](#optional-domelement)
* [enableCache](#optional-enablecache)
* [enableEdges](#optional-enableedges)
* [highlightColor](#optional-highlightcolor)
* [logMetrics](#optional-logmetrics)
* [noBackground](#optional-nobackground)
* [onLoading](#optional-onloading)
* [renderTargetOptions](#optional-rendertargetoptions)
* [renderer](#optional-renderer)
* [sdk](#sdk)
* [ssaoQualityHint](#optional-ssaoqualityhint)
* [viewCube](#optional-viewcube)

### Properties

#### `Optional` antiAliasingHint

• **antiAliasingHint**? : *"disabled" | "fxaa" | "msaa2+fxaa" | "msaa4+fxaa" | "msaa8+fxaa" | "msaa16+fxaa" | "msaa2" | "msaa4" | "msaa8" | "msaa16"*

*Defined in [viewer/src/public/migration/types.ts:111](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L111)*

Hints Reveal to use a given anti-aliasing technique.

Fast approximate anti-aliasing (FXAA) is a fast technique that will remove some, but not all aliasing effects. See
https://en.wikipedia.org/wiki/Fast_approximate_anti-aliasing.

Multi-sampling anti-aliasinbg (MSAA) is a technique for taking multiple samples per pixel to avoid aliasing effects.
This mode requires WebGL 2. See https://www.khronos.org/opengl/wiki/Multisampling.

The combined modes will apply both MSAA and FXAA anti-aliasing and yields the best visual result.

When using the MSAA modes combined with FXAA Reveal will fall back to FXAA on WebGL 1. There is no fallback for the
"plain" MSAA modes on WebGL 1.

Currently the default mode is FXAA, but this is subject to change.

**`version`** new in 1.3.0

___

#### `Optional` automaticCameraNearFar

• **automaticCameraNearFar**? : *undefined | false | true*

*Defined in [viewer/src/public/migration/types.ts:66](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L66)*

When false, camera near and far planes will not be updated automatically (defaults to true).
This can be useful when you have custom content in the 3D view and need to better
control the view frustum.

When automatic camera near/far planes are disabled, you are responsible for setting
this on your own.

**`example`** 
```
viewer.camera.near = 0.1;
viewer.camera.far = 1000.0;
viewer.camera.updateProjectionMatrix();
```

**`version`** new in 1.4.0

___

#### `Optional` automaticControlsSensitivity

• **automaticControlsSensitivity**? : *undefined | false | true*

*Defined in [viewer/src/public/migration/types.ts:76](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L76)*

When false, the sensitivity of the camera controls will not be updated automatically.
This can be useful to better control the sensitivity of the 3D navigation.

When not set, control the sensitivity of the camera using `viewer.cameraControls.minDistance`
and `viewer.cameraControls.maxDistance`.

**`version`** new in 1.4.0

___

#### `Optional` domElement

• **domElement**? : *HTMLElement*

*Defined in [viewer/src/public/migration/types.ts:39](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L39)*

An existing DOM element that we will render canvas into.

___

#### `Optional` enableCache

• **enableCache**? : *undefined | false | true*

*Defined in [viewer/src/public/migration/types.ts:88](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L88)*

**`deprecated`** And not supported.

___

#### `Optional` enableEdges

• **enableEdges**? : *undefined | false | true*

*Defined in [viewer/src/public/migration/types.ts:134](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L134)*

Enables / disables visualizing the edges of geometry. Defaults to true.

___

#### `Optional` highlightColor

• **highlightColor**? : *THREE.Color*

*Defined in [viewer/src/public/migration/types.ts:79](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L79)*

**`deprecated`** And ignored.

___

#### `Optional` logMetrics

• **logMetrics**? : *undefined | false | true*

*Defined in [viewer/src/public/migration/types.ts:42](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L42)*

Send anonymous usage statistics.

___

#### `Optional` noBackground

• **noBackground**? : *undefined | false | true*

*Defined in [viewer/src/public/migration/types.ts:82](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L82)*

**`deprecated`** And ignored.

___

#### `Optional` onLoading

• **onLoading**? : *[OnLoadingCallback](#onloadingcallback)*

*Defined in [viewer/src/public/migration/types.ts:137](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L137)*

Callback to download stream progress.

___

#### `Optional` renderTargetOptions

• **renderTargetOptions**? : *undefined | object*

*Defined in [viewer/src/public/migration/types.ts:48](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L48)*

Render to offscreen buffer instead of canvas.

**`version`** new in 1.3.0

___

#### `Optional` renderer

• **renderer**? : *THREE.WebGLRenderer*

*Defined in [viewer/src/public/migration/types.ts:91](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L91)*

Renderer used to visualize model (optional).

___

####  sdk

• **sdk**: *CogniteClient*

*Defined in [viewer/src/public/migration/types.ts:36](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L36)*

Initialized connection to CDF used to load data.

___

#### `Optional` ssaoQualityHint

• **ssaoQualityHint**? : *"medium" | "high" | "veryhigh" | "disabled"*

*Defined in [viewer/src/public/migration/types.ts:129](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L129)*

Hints the renderer of the quality it should aim for for screen space ambient occlusion,
an effect creating shadows and that gives the rendered image more depth.

**`version`** new in 1.4.0

___

#### `Optional` viewCube

• **viewCube**? : *"topleft" | "topright" | "bottomleft" | "bottomright"*

*Defined in [viewer/src/public/migration/types.ts:85](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L85)*

**`deprecated`** And not supported.


<a name="interfaces_index_cognitemodelbasemd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [CogniteModelBase](#interfaces_index_cognitemodelbasemd)

## Interface: CogniteModelBase

Base class for 3D models supported by [Cognite3DViewer](#classes_index_cognite3dviewermd).

**`module`** @cognite/reveal

### Hierarchy

* **CogniteModelBase**

### Implemented by

* [Cognite3DModel](#classes_index_cognite3dmodelmd)
* [CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd)

### Index

#### Properties

* [type](#type)

#### Methods

* [dispose](#dispose)
* [getCameraConfiguration](#getcameraconfiguration)
* [getModelBoundingBox](#getmodelboundingbox)
* [getModelTransformation](#getmodeltransformation)
* [setModelTransformation](#setmodeltransformation)

### Properties

####  type

• **type**: *[SupportedModelTypes](#supportedmodeltypes)*

*Defined in [viewer/src/public/migration/CogniteModelBase.ts:13](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CogniteModelBase.ts#L13)*

### Methods

####  dispose

▸ **dispose**(): *void*

*Defined in [viewer/src/public/migration/CogniteModelBase.ts:14](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CogniteModelBase.ts#L14)*

**Returns:** *void*

___

####  getCameraConfiguration

▸ **getCameraConfiguration**(): *[CameraConfiguration](#cameraconfiguration) | undefined*

*Defined in [viewer/src/public/migration/CogniteModelBase.ts:16](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CogniteModelBase.ts#L16)*

**Returns:** *[CameraConfiguration](#cameraconfiguration) | undefined*

___

####  getModelBoundingBox

▸ **getModelBoundingBox**(`outBbox?`: THREE.Box3, `restrictToMostGeometry?`: undefined | false | true): *Box3*

*Defined in [viewer/src/public/migration/CogniteModelBase.ts:15](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CogniteModelBase.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`outBbox?` | THREE.Box3 |
`restrictToMostGeometry?` | undefined &#124; false &#124; true |

**Returns:** *Box3*

___

####  getModelTransformation

▸ **getModelTransformation**(`out?`: THREE.Matrix4): *Matrix4*

*Defined in [viewer/src/public/migration/CogniteModelBase.ts:18](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CogniteModelBase.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`out?` | THREE.Matrix4 |

**Returns:** *Matrix4*

___

####  setModelTransformation

▸ **setModelTransformation**(`matrix`: Matrix4): *void*

*Defined in [viewer/src/public/migration/CogniteModelBase.ts:17](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/CogniteModelBase.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`matrix` | Matrix4 |

**Returns:** *void*


<a name="interfaces_index_geometryfiltermd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [GeometryFilter](#interfaces_index_geometryfiltermd)

## Interface: GeometryFilter

**`module`** @cognite/reveal

### Hierarchy

* **GeometryFilter**

### Index

#### Properties

* [boundingBox](#optional-boundingbox)
* [isBoundingBoxInModelCoordinates](#optional-isboundingboxinmodelcoordinates)

### Properties

#### `Optional` boundingBox

• **boundingBox**? : *THREE.Box3*

*Defined in [viewer/src/public/migration/types.ts:158](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L158)*

The bounds to load geometry within. By default this box is in CDF coordinate space which
will be transformed into coordinates relative to the model using the the model transformation
which can be specified using [the CDF API](https://docs.cognite.com/api/v1/#operation/update3DRevisions ),
or set in [Cognite Fusion](https://fusion.cognite.com/ ).

**`see`** [isBoundingBoxInModelCoordinates](#optional-isboundingboxinmodelcoordinates).

___

#### `Optional` isBoundingBoxInModelCoordinates

• **isBoundingBoxInModelCoordinates**? : *undefined | false | true*

*Defined in [viewer/src/public/migration/types.ts:167](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L167)*

When set, the geometry filter [boundingBox](#optional-boundingbox) will be considered to be in "Reveal space".
Rather than CDF space which is the default. When using Reveal space, the model transformation
which can be specified using [the CDF API](https://docs.cognite.com/api/v1/#operation/update3DRevisions ),
or set in [Cognite Fusion](https://fusion.cognite.com/ ).

**`version`** New in 1.5.0


<a name="interfaces_index_intersectionfrompixeloptionsmd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [IntersectionFromPixelOptions](#interfaces_index_intersectionfrompixeloptionsmd)

## Interface: IntersectionFromPixelOptions

Options to control how [Cognite3DViewer.getIntersectionFromPixel](#getintersectionfrompixel) behaves.

**`version`** new in 1.3.0

### Hierarchy

* **IntersectionFromPixelOptions**

### Index

#### Properties

* [pointIntersectionThreshold](#optional-pointintersectionthreshold)

### Properties

#### `Optional` pointIntersectionThreshold

• **pointIntersectionThreshold**? : *undefined | number*

*Defined in [viewer/src/public/migration/types.ts:308](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L308)*

Threshold (in meters) for how close a point must be an intersection
ray for it to be considered an intersection for point clouds. Defaults
to 0.05.

**`version`** new in 1.3.0


<a name="interfaces_index_nodeappearanceprovidermd"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md) › [NodeAppearanceProvider](#interfaces_index_nodeappearanceprovidermd)

## Interface: NodeAppearanceProvider

### Hierarchy

* **NodeAppearanceProvider**

### Index

#### Methods

* [styleNode](#stylenode)

### Methods

####  styleNode

▸ **styleNode**(`treeIndex`: number): *NodeAppearance | undefined*

*Defined in [viewer/src/datamodels/cad/NodeAppearance.ts:48](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/cad/NodeAppearance.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`treeIndex` | number |

**Returns:** *NodeAppearance | undefined*

# Modules


<a name="modules_index_md"></a>

[@cognite/reveal](#readmemd) › ["index"](#modules_index_md)

## Module: "index"

### Index

#### Enumerations

* [AntiAliasingMode](#enums_index_antialiasingmodemd)
* [PotreePointColorType](#enums_index_potreepointcolortypemd)
* [PotreePointShape](#enums_index_potreepointshapemd)
* [PotreePointSizeType](#enums_index_potreepointsizetypemd)
* [SsaoSampleQuality](#enums_index_ssaosamplequalitymd)
* [WellKnownAsprsPointClassCodes](#enums_index_wellknownasprspointclasscodesmd)

#### Classes

* [BoundingBoxClipper](#classes_index_boundingboxclippermd)
* [Cognite3DModel](#classes_index_cognite3dmodelmd)
* [Cognite3DViewer](#classes_index_cognite3dviewermd)
* [CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd)
* [NotSupportedInMigrationWrapperError](#classes_index_notsupportedinmigrationwrappererrormd)

#### Interfaces

* [AddModelOptions](#interfaces_index_addmodeloptionsmd)
* [CadModelMetadata](#interfaces_index_cadmodelmetadatamd)
* [Cognite3DViewerOptions](#interfaces_index_cognite3dvieweroptionsmd)
* [CogniteModelBase](#interfaces_index_cognitemodelbasemd)
* [GeometryFilter](#interfaces_index_geometryfiltermd)
* [IntersectionFromPixelOptions](#interfaces_index_intersectionfrompixeloptionsmd)
* [NodeAppearanceProvider](#interfaces_index_nodeappearanceprovidermd)

#### Type aliases

* [CadIntersection](#cadintersection)
* [CadLoadingHints](#cadloadinghints)
* [CadModelBudget](#cadmodelbudget)
* [CameraChangeDelegate](#camerachangedelegate)
* [CameraConfiguration](#cameraconfiguration)
* [Color](#color)
* [DisposedDelegate](#disposeddelegate)
* [EdgeDetectionParameters](#edgedetectionparameters)
* [Intersection](#intersection)
* [LoadingStateChangeListener](#loadingstatechangelistener)
* [OnLoadingCallback](#onloadingcallback)
* [PointCloudIntersection](#pointcloudintersection)
* [PointerEventDelegate](#pointereventdelegate)
* [RenderOptions](#renderoptions)
* [RevealOptions](#revealoptions)
* [SceneRenderedDelegate](#scenerendereddelegate)
* [SsaoParameters](#ssaoparameters)
* [SupportedModelTypes](#supportedmodeltypes)

#### Object literals

* [defaultRenderOptions](#const-defaultrenderoptions)
* [revealEnv](#const-revealenv)

### Type aliases

####  CadIntersection

Ƭ **CadIntersection**: *object*

*Defined in [viewer/src/public/migration/types.ts:183](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L183)*

##### Type declaration:

* **distanceToCamera**: *number*

* **model**: *[Cognite3DModel](#classes_index_cognite3dmodelmd)*

* **point**: *Vector3*

* **treeIndex**: *number*

* **type**: *"cad"*

___

####  CadLoadingHints

Ƭ **CadLoadingHints**: *object*

*Defined in [viewer/src/datamodels/cad/CadLoadingHints.ts:9](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/cad/CadLoadingHints.ts#L9)*

Hints that are used to modify how CAD sectors are loaded.

**`property`** `suspendLoading` - disables loading of sectors.

##### Type declaration:

* **suspendLoading**? : *undefined | false | true*

___

####  CadModelBudget

Ƭ **CadModelBudget**: *object*

*Defined in [viewer/src/public/migration/types.ts:277](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L277)*

Represents a measurement of how much geometry can be loaded.

##### Type declaration:

* **geometryDownloadSizeBytes**: *number*

* **highDetailProximityThreshold**: *number*

* **maximumNumberOfDrawCalls**: *number*

___

####  CameraChangeDelegate

Ƭ **CameraChangeDelegate**: *function*

*Defined in [viewer/src/public/migration/types.ts:252](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L252)*

Delegate for camera update events.

**`module`** @cognite/reveal

**`see`** [Cognite3DViewer.on](#on).

##### Type declaration:

▸ (`position`: Vector3, `target`: Vector3): *void*

**Parameters:**

Name | Type |
------ | ------ |
`position` | Vector3 |
`target` | Vector3 |

___

####  CameraConfiguration

Ƭ **CameraConfiguration**: *object*

*Defined in [viewer/src/utilities/types.ts:55](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/utilities/types.ts#L55)*

Represents a camera configuration, consisting of a camera position and target.

##### Type declaration:

* **position**: *Vector3*

* **target**: *Vector3*

___

####  Color

Ƭ **Color**: *object*

*Defined in [viewer/src/public/migration/types.ts:14](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L14)*

**`module`** @cognite/reveal

##### Type declaration:

* **b**: *number*

* **g**: *number*

* **r**: *number*

___

####  DisposedDelegate

Ƭ **DisposedDelegate**: *function*

*Defined in [viewer/src/public/migration/types.ts:257](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L257)*

Delegate for disposal events.

##### Type declaration:

▸ (): *void*

___

####  EdgeDetectionParameters

Ƭ **EdgeDetectionParameters**: *object*

*Defined in [viewer/src/public/types.ts:39](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L39)*

Edge detection parameters supported by Reveal.

##### Type declaration:

* **enabled**: *boolean*

___

####  Intersection

Ƭ **Intersection**: *[CadIntersection](#cadintersection) | [PointCloudIntersection](#pointcloudintersection)*

*Defined in [viewer/src/public/migration/types.ts:233](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L233)*

Represents the result from [Cognite3DViewer.getIntersectionFromPixel](#getintersectionfrompixel).

**`module`** @cognite/reveal

___

####  LoadingStateChangeListener

Ƭ **LoadingStateChangeListener**: *function*

*Defined in [viewer/src/public/types.ts:112](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L112)*

Handler for events about data being loaded.

##### Type declaration:

▸ (`loadingState`: LoadingState): *any*

**Parameters:**

Name | Type |
------ | ------ |
`loadingState` | LoadingState |

___

####  OnLoadingCallback

Ƭ **OnLoadingCallback**: *function*

*Defined in [viewer/src/public/migration/types.ts:29](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L29)*

Callback to monitor loaded requests and progress.
Use OnLoadingCallback instead of onProgress/onComplete.

**`module`** @cognite/reveal

**`param`** Number of items loaded so far in this batch.

**`param`** Total number of items to load in this batch.

**`param`** Number of items deemed unnecessary to load in this batch.

**`version`** itemsCulled is new in 2.0.0

##### Type declaration:

▸ (`itemsLoaded`: number, `itemsRequested`: number, `itemsCulled`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`itemsLoaded` | number |
`itemsRequested` | number |
`itemsCulled` | number |

___

####  PointCloudIntersection

Ƭ **PointCloudIntersection**: *object*

*Defined in [viewer/src/public/migration/types.ts:206](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L206)*

##### Type declaration:

* **distanceToCamera**: *number*

* **model**: *[CognitePointCloudModel](#classes_index_cognitepointcloudmodelmd)*

* **point**: *Vector3*

* **pointIndex**: *number*

* **type**: *"pointcloud"*

___

####  PointerEventDelegate

Ƭ **PointerEventDelegate**: *function*

*Defined in [viewer/src/public/migration/types.ts:245](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L245)*

Delegate for pointer events.

**`module`** @cognite/reveal

**`see`** [Cognite3DViewer.on](#on).

##### Type declaration:

▸ (`event`: object): *void*

**Parameters:**

▪ **event**: *object*

Name | Type |
------ | ------ |
`offsetX` | number |
`offsetY` | number |

___

####  RenderOptions

Ƭ **RenderOptions**: *object*

*Defined in [viewer/src/public/types.ts:64](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L64)*

Options and hints for how the Reveal viewer applies rendering effects.

##### Type declaration:

* **antiAliasing**? : *[AntiAliasingMode](#enums_index_antialiasingmodemd)*

* **edgeDetectionParameters**? : *[EdgeDetectionParameters](#edgedetectionparameters)*

* **multiSampleCountHint**? : *undefined | number*

* **ssaoRenderParameters**? : *[SsaoParameters](#ssaoparameters)*

___

####  RevealOptions

Ƭ **RevealOptions**: *object*

*Defined in [viewer/src/public/types.ts:99](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L99)*

**`property`** logMetrics Might be used to disable usage statistics.

**`property`** nodeAppearanceProvider Style node by tree-index.

**`property`** internal Internals are for internal usage only (like unit-testing).

##### Type declaration:

* **internal**? : *undefined | object*

* **logMetrics**? : *undefined | false | true*

* **nodeAppearanceProvider**? : *[NodeAppearanceProvider](#interfaces_index_nodeappearanceprovidermd)*

* **renderOptions**? : *[RenderOptions](#renderoptions)*

___

####  SceneRenderedDelegate

Ƭ **SceneRenderedDelegate**: *function*

*Defined in [viewer/src/public/migration/types.ts:264](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/migration/types.ts#L264)*

Delegate for rendering events.

**`module`** @cognite/reveal

**`see`** [Cognite3DViewer.on](#on).

##### Type declaration:

▸ (`event`: object): *void*

**Parameters:**

▪ **event**: *object*

Name | Type |
------ | ------ |
`camera` | PerspectiveCamera |
`frameNumber` | number |
`renderTime` | number |
`renderer` | WebGLRenderer |

___

####  SsaoParameters

Ƭ **SsaoParameters**: *object*

*Defined in [viewer/src/public/types.ts:46](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L46)*

Screen-space ambient occlusion parameters supported by Reveal.

##### Type declaration:

* **depthCheckBias**: *number*

* **sampleRadius**: *number*

* **sampleSize**: *[SsaoSampleQuality](#enums_index_ssaosamplequalitymd)*

___

####  SupportedModelTypes

Ƭ **SupportedModelTypes**: *"pointcloud" | "cad"*

*Defined in [viewer/src/datamodels/base/SupportedModelTypes.ts:4](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/datamodels/base/SupportedModelTypes.ts#L4)*

### Object literals

#### `Const` defaultRenderOptions

#### ▪ **defaultRenderOptions**: *object*

*Defined in [viewer/src/public/types.ts:87](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L87)*

Defaults for {@ref RevealRenderOptions}.

####  antiAliasing

• **antiAliasing**: *[FXAA](#fxaa)* = AntiAliasingMode.FXAA

*Defined in [viewer/src/public/types.ts:88](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L88)*

####  multiSampleCountHint

• **multiSampleCountHint**: *number* = 1

*Defined in [viewer/src/public/types.ts:89](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L89)*

▪ **edgeDetectionParameters**: *object*

*Defined in [viewer/src/public/types.ts:91](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L91)*

* **enabled**: *true* = true

▪ **ssaoRenderParameters**: *object*

*Defined in [viewer/src/public/types.ts:90](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/public/types.ts#L90)*

* **depthCheckBias**: *number* = 0.0125

* **sampleRadius**: *number* = 1

* **sampleSize**: *[Medium](#medium)* = SsaoSampleQuality.Default

___

#### `Const` revealEnv

#### ▪ **revealEnv**: *object*

*Defined in [viewer/src/revealEnv.ts:9](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/revealEnv.ts#L9)*

Used to specify custom url for worker/wasm files
in cases when you need the latest local files or CDN is blocked by CSP.

####  publicPath

• **publicPath**: *string* = ""

*Defined in [viewer/src/revealEnv.ts:10](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/revealEnv.ts#L10)*


<a name="modules_tools_md"></a>

[@cognite/reveal](#readmemd) › ["tools"](#modules_tools_md)

## Module: "tools"

### Index

#### Classes

* [DebugCameraTool](#classes_tools_debugcameratoolmd)
* [DebugLoadedSectorsTool](#classes_tools_debugloadedsectorstoolmd)
* [ExplodedViewTool](#classes_tools_explodedviewtoolmd)
* [HtmlOverlayTool](#classes_tools_htmloverlaytoolmd)

#### Type aliases

* [DebugLoadedSectorsToolOptions](#debugloadedsectorstooloptions)
* [HtmlOverlayOptions](#htmloverlayoptions)

### Type aliases

####  DebugLoadedSectorsToolOptions

Ƭ **DebugLoadedSectorsToolOptions**: *object*

*Defined in [viewer/src/tools/DebugLoadedSectorsTool.ts:15](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/DebugLoadedSectorsTool.ts#L15)*

##### Type declaration:

* **colorBy**? : *"depth" | "lod" | "loadedTimestamp"*

* **leafsOnly**? : *undefined | false | true*

* **showDetailedSectors**? : *undefined | false | true*

* **showDiscardedSectors**? : *undefined | false | true*

* **showSimpleSectors**? : *undefined | false | true*

___

####  HtmlOverlayOptions

Ƭ **HtmlOverlayOptions**: *object*

*Defined in [viewer/src/tools/HtmlOverlayTool.ts:19](https://github.com/cognitedata/reveal/blob/35c41286/viewer/src/tools/HtmlOverlayTool.ts#L19)*

##### Type declaration:

* **positionUpdatedCallback**? : *HtmlOverlayPositionUpdatedDelegate*
