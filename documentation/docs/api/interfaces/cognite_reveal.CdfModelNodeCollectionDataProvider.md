---
id: "cognite_reveal.CdfModelNodeCollectionDataProvider"
title: "Interface: CdfModelNodeCollectionDataProvider"
sidebar_label: "CdfModelNodeCollectionDataProvider"
custom_edit_url: null
---

[@cognite/reveal](../modules/cognite_reveal.md).CdfModelNodeCollectionDataProvider

Provides metadata needed to get asset mappings for a CDF 3D model

## Implemented by

- [`Cognite3DModel`](../classes/cognite_reveal.Cognite3DModel.md)

## Properties

### modelId

• **modelId**: `number`

Model and revision IDs for the model

#### Defined in

[packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts:29](https://github.com/cognitedata/reveal/blob/716e7443e/viewer/packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts#L29)

___

### nodeCount

• **nodeCount**: `number`

Total count of nodes in the model

#### Defined in

[packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts:24](https://github.com/cognitedata/reveal/blob/716e7443e/viewer/packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts#L24)

___

### revisionId

• **revisionId**: `number`

#### Defined in

[packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts:30](https://github.com/cognitedata/reveal/blob/716e7443e/viewer/packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts#L30)

## Methods

### mapBoxFromCdfToModelCoordinates

▸ **mapBoxFromCdfToModelCoordinates**(`box`, `out?`): `Box3`

Maps a box from CDF space to Reveal space

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | `Box3` |
| `out?` | `Box3` |

#### Returns

`Box3`

#### Defined in

[packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts:19](https://github.com/cognitedata/reveal/blob/716e7443e/viewer/packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts#L19)

___

### mapBoxFromModelToCdfCoordinates

▸ **mapBoxFromModelToCdfCoordinates**(`box`, `out?`): `Box3`

Maps a box from Reveal space to CDF space

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | `Box3` |
| `out?` | `Box3` |

#### Returns

`Box3`

#### Defined in

[packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts:14](https://github.com/cognitedata/reveal/blob/716e7443e/viewer/packages/cad-styling/src/CdfModelNodeCollectionDataProvider.ts#L14)
