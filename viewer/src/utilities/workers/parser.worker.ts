/*!
 * Copyright 2020 Cognite AS
 */

import * as Comlink from 'comlink';
import { ParsedPrimitives, ParsePrimitiveAttribute, ParseCtmInput } from './types/parser.types';
import * as rustTypes from '../../../pkg';
import { SectorGeometry } from '@/datamodels/cad/sector/types';
import { InstancedMeshFile, TriangleMesh, InstancedMesh, SectorQuads } from '@/datamodels/cad/rendering/types';
const rustModule = import('../../../pkg');

export class ParserWorker {
  public async parseQuads(buffer: Uint8Array): Promise<SectorQuads> {
    const rust = await rustModule;

    const sectorData = rust.parse_and_convert_f3df(buffer);

    const result = {
      buffer: sectorData.faces(),
      treeIndexToNodeIdMap: sectorData.tree_index_to_node_id_map(),
      nodeIdToTreeIndexMap: sectorData.node_id_to_tree_index_map()
    };

    sectorData.free();

    return result;
  }

  public async parseAndFinalizeDetailed(i3dFile: Uint8Array, ctmFiles: ParseCtmInput): Promise<SectorGeometry> {
    const rust = await rustModule;
    // TODO mattman22 2020-6-24 Handle parse/finalize errors
    const sectorData = rust.parse_and_finalize_detailed(
      i3dFile,
      ctmFiles.fileNames,
      new Uint32Array(ctmFiles.lengths),
      new Uint8Array(ctmFiles.buffer)
    );

    const iMesh = sectorData.instance_meshes;
    const iMeshes: InstancedMeshFile[] = [];
    for (let i = 0; i < iMesh.length; i++) {
      const x = iMesh[i];
      const ints: InstancedMesh[] = [];
      for (let j = 0; j < x.instances.length; j++) {
        const y = x.instances[j];
        ints.push({
          triangleCount: Number(y.triangleCount),
          triangleOffset: Number(y.triangleOffset),
          colors: Uint8Array.from(y.colors),
          instanceMatrices: Float32Array.from(y.instanceMatrices),
          treeIndices: Float32Array.from(y.treeIndices)
        });
      }
      iMeshes.push({
        fileId: Number(x.fileId),
        indices: Uint32Array.from(x.indices),
        vertices: Float32Array.from(x.vertices),
        normals: this.convertToFloat32Array(x.normals),
        instances: ints
      });
    }

    const tMesh = sectorData.triangle_meshes;
    const tMeshes: TriangleMesh[] = [];
    for (let i = 0; i < tMesh.length; i++) {
      const x = tMesh[i];
      tMeshes.push({
        fileId: Number(x.fileId),
        indices: Uint32Array.from(x.indices),
        treeIndices: Float32Array.from(x.treeIndices),
        vertices: Float32Array.from(x.vertices),
        normals: this.convertToFloat32Array(x.normals),
        colors: Uint8Array.from(x.colors)
      });
    }

    const sector = sectorData.sector;
    const primitives = this.extractParsedPrimitives(sector);
    const nodeIdToTreeIndexMap = sector.node_id_to_tree_index_map();
    const treeIndexToNodeIdMap = sector.tree_index_to_node_id_map();

    const result: SectorGeometry = {
      nodeIdToTreeIndexMap,
      treeIndexToNodeIdMap,
      primitives,
      instanceMeshes: iMeshes,
      triangleMeshes: tMeshes
    };
    sectorData.free();
    return result;
  }

  private convertToFloat32Array(input: any): Float32Array | undefined {
    try {
      return Float32Array.from(input);
    } catch (TypeError) {
      return undefined;
    }
  }

  private extractParsedPrimitives(sectorData: rustTypes.Sector) {
    const boxCollection = sectorData.box_collection();
    const boxAttributes = this.convertToJSMemory(sectorData.box_attributes() as Map<string, rustTypes.Attribute>);

    const circleCollection = sectorData.circle_collection();
    const circleAttributes = this.convertToJSMemory(sectorData.circle_attributes() as Map<string, rustTypes.Attribute>);

    const coneCollection = sectorData.cone_collection();
    const coneAttributes = this.convertToJSMemory(sectorData.cone_attributes() as Map<string, rustTypes.Attribute>);

    const eccentricConeCollection = sectorData.eccentric_cone_collection();
    const eccentricConeAttributes = this.convertToJSMemory(
      sectorData.eccentric_cone_attributes() as Map<string, rustTypes.Attribute>
    );

    const ellipsoidSegmentCollection = sectorData.ellipsoid_segment_collection();
    const ellipsoidSegmentAttributes = this.convertToJSMemory(
      sectorData.ellipsoid_segment_attributes() as Map<string, rustTypes.Attribute>
    );

    const generalCylinderCollection = sectorData.general_cylinder_collection();
    const generalCylinderAttributes = this.convertToJSMemory(
      sectorData.general_cylinder_attributes() as Map<string, rustTypes.Attribute>
    );

    const generalRingCollection = sectorData.general_ring_collection();
    const generalRingAttributes = this.convertToJSMemory(
      sectorData.general_ring_attributes() as Map<string, rustTypes.Attribute>
    );

    const nutCollection = sectorData.nut_collection();
    const nutAttributes = this.convertToJSMemory(sectorData.nut_attributes() as Map<string, rustTypes.Attribute>);

    const quadCollection = sectorData.quad_collection();
    const quadAttributes = this.convertToJSMemory(sectorData.quad_attributes() as Map<string, rustTypes.Attribute>);

    const sphericalSegmentCollection = sectorData.spherical_segment_collection();
    const sphericalSegmentAttributes = this.convertToJSMemory(
      sectorData.spherical_segment_attributes() as Map<string, rustTypes.Attribute>
    );

    const torusSegmentCollection = sectorData.torus_segment_collection();
    const torusSegmentAttributes = this.convertToJSMemory(
      sectorData.torus_segment_attributes() as Map<string, rustTypes.Attribute>
    );

    const trapeziumCollection = sectorData.trapezium_collection();
    const trapeziumAttributes = this.convertToJSMemory(
      sectorData.trapezium_attributes() as Map<string, rustTypes.Attribute>
    );

    const parsedPrimitives: ParsedPrimitives = {
      boxCollection,
      boxAttributes,
      circleCollection,
      circleAttributes,
      coneCollection,
      coneAttributes,
      eccentricConeCollection,
      eccentricConeAttributes,
      ellipsoidSegmentCollection,
      ellipsoidSegmentAttributes,
      generalCylinderCollection,
      generalCylinderAttributes,
      generalRingCollection,
      generalRingAttributes,
      nutCollection,
      nutAttributes,
      quadCollection,
      quadAttributes,
      sphericalSegmentCollection,
      sphericalSegmentAttributes,
      torusSegmentCollection,
      torusSegmentAttributes,
      trapeziumCollection,
      trapeziumAttributes
    };

    return parsedPrimitives;
  }

  private convertToJSMemory(rustAttributes: Map<string, rustTypes.Attribute>): Map<string, ParsePrimitiveAttribute> {
    const jsAttributes = new Map<string, ParsePrimitiveAttribute>();

    for (const entry of rustAttributes.entries()) {
      const [key, attribute] = entry;

      jsAttributes.set(key, { size: attribute.size, offset: attribute.offset });

      attribute.free();
    }

    return jsAttributes;
  }
}

const obj = new ParserWorker();

Comlink.expose(obj);
