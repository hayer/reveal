use heck::CamelCase;
use i3df_specification;
use quote::{format_ident, quote};
use serde_yaml;
use std::collections::{HashMap};
use std::env;
use std::error::Error;
use std::fs;
use std::io::Write;
use indexmap::IndexMap;

use proc_macro2::TokenStream;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
struct TextureType {
    #[serde(rename = "type")]
    _type: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(untagged)]
enum Type {
    Simple(String),
    Texture(HashMap<String, TextureType>),
}

#[derive(Debug, Serialize, Deserialize)]
struct Index {
    name: String,
    attribute: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct GeometryType {
    name: String,
    indices: Vec<Index>,
}

#[derive(Debug, Serialize, Deserialize)]
struct Attribute {
    name: String,
    #[serde(rename = "type")]
    _type: Type,
    count: Option<usize>,
}

#[derive(Debug, Serialize, Deserialize)]
struct Spec {
    geometry_types: IndexMap<String, GeometryType>,
    attributes: Vec<Attribute>,
}

fn transform_name(name: &str) -> String {
    match name {
        "box" => "Box3D".to_string(),
        _ => name.to_camel_case(),
    }
}

fn create_dtype(
    index: &Index,
    attribute_map: &HashMap<String, &Attribute>,
) -> TokenStream {
    // a null attribute means that the number is the actual value
    if index.attribute == "null" {
        return quote! { u64 };
    }
    let attribute = attribute_map.get(&index.attribute).unwrap();
    let count = match attribute.count {
        Some(n) => n,
        _ => 1,
    };

    // TODO implement texture
    let type_name = match &attribute._type {
        Type::Simple(t) => match t.as_str() {
            "u8" => quote! {u8},
            "u32" => quote! {u32},
            "u64" => quote! {u64},
            "f32" => quote! {f32},
            t => quote! { ERROR_NOT_IMPLEMENTED: #t },
        },
        Type::Texture(_) => quote! { Texture }
    };
    if count > 1 {
        return quote! {[#type_name; #count]};
    } else {
        return type_name;
    }
}

fn write_code_to_file(filename: &String, code: &proc_macro2::TokenStream) -> Result<(), Box<dyn Error>> {
    let code = code.to_string().replace("}", "}\n").replace(";", ";\n");

    let (_, result, _) = rustfmt::format_input(
        rustfmt::Input::Text(code),
        &Default::default(),
        None as Option<&mut std::io::Stdout>,
    ).unwrap();

    let code = &result[0].1;
    println!("build.rs writing to output file: {}", filename);
    let mut file = fs::File::create(filename)?;
    write!(file, "{}", code)?;

    Ok(())
}

fn main() -> Result<(), Box<dyn Error>> {

    let spec: Spec = serde_yaml::from_str(i3df_specification::as_string().as_str())?;

    let mut attribute_map: HashMap<String, &Attribute> = HashMap::new();
    let mut attribute_id_map: HashMap<String, usize> = HashMap::new();
    for (index, attribute) in spec.attributes.iter().enumerate() {
        attribute_map.insert(attribute.name.clone(), &attribute);
        attribute_id_map.insert(attribute.name.clone(), index);
    }

    let mut primitive_structs = Vec::new();
    let mut primitive_functions = Vec::new();
    let mut primitive_names = Vec::new();
    let mut primitive_idents = Vec::new();
    let mut primitive_match_patterns = Vec::new();
    let mut primitive_impls = Vec::new();
    let mut primitive_to_renderables = Vec::new();

    for (geometry_id, geometry_type) in spec.geometry_types {
        let snake_name = &geometry_type.name;
        let geometry_id_num = geometry_id.parse::<u8>().unwrap();
        let name = transform_name(&geometry_type.name);

        let mut attribute_idents = Vec::new();
        let mut attribute_declarations = Vec::new();
        let mut attribute_dtypes = Vec::new();
        let mut attribute_assignments = Vec::new();
        let mut attribute_impl_functions = Vec::new();
        for (id, index) in geometry_type.indices.iter().enumerate() {
            let dtype = create_dtype(&index, &attribute_map);
            let index_name_ident = format_ident!("{}", index.name);
            let attribute_ident = format_ident!("{}", index.attribute);
            let attribute_id = id;
            let body = match index.attribute.as_ref() {
                "null" => quote! {
                    #index_name_ident: chunk [ #attribute_id ],
                },
                "color" => quote! {
                    #index_name_ident: attributes.#attribute_ident[(chunk [ #attribute_id ] - 1) as usize],
                },
                "texture" => quote! {
                    #index_name_ident: {
                        let attribute_index = chunk [ #attribute_id ];
                        match attribute_index {
                            0 => Default::default(), // TODO make into None
                            _ => attributes.#attribute_ident[attribute_index as usize].clone()
                        }
                    },
                },
                _ => quote! {
                    #index_name_ident: attributes.#attribute_ident[chunk [ #attribute_id ] as usize],
                },
            };

            let declaration = quote! {
                pub #index_name_ident: #dtype,
            };

            let impl_function = match index.name.as_ref() {
                "center_x" => quote! {
                    pub fn center(&self) -> Vector3 {
                        Vector3::new(
                            self.center_x,
                            self.center_y,
                            self.center_z,
                        )
                    }
                },
                "translation_x" => quote! {
                    pub fn translation(&self) -> Vector3 {
                        Vector3::new(
                            self.translation_x,
                            self.translation_y,
                            self.translation_z,
                        )
                    }
                },
                "rotation_x" => quote! {
                    pub fn rotation(&self) -> Vector3 {
                        Vector3::new(
                            self.rotation_x,
                            self.rotation_y,
                            self.rotation_z,
                        )
                    }
                },
                "scale_x" => quote! {
                    pub fn scale(&self) -> Vector3 {
                        Vector3::new(
                            self.scale_x,
                            self.scale_y,
                            self.scale_z,
                        )
                    }
                },
                "delta_x" => quote! {
                    pub fn delta(&self) -> Vector3 {
                        Vector3::new(
                            self.delta_x,
                            self.delta_y,
                            self.delta_z,
                        )
                    }
                },
                _ => quote! {}
            };

            attribute_idents.push(index_name_ident);
            attribute_declarations.push(declaration);
            attribute_dtypes.push(dtype);
            attribute_assignments.push(body);
            attribute_impl_functions.push(impl_function);
        }

        let snake_name_collection_ident = format_ident!("{}_collection", snake_name);
        let primitive_parse_function = format_ident!("parse_{}_collection", snake_name);
        let name_ident = format_ident!("{}", name);

        let primitive_struct = quote! {
            #[derive(Clone, Debug, Default, Deserialize, Serialize)]
            pub struct #name_ident {
                pub node_id: u64,
                #(#attribute_declarations)*
            }
        };
        let primitive_impl = quote! {
            impl #name_ident {
                #(#attribute_impl_functions)*
            }
        };


        let parse_primitive_function = quote! {
            fn #primitive_parse_function(node_ids: Vec<u64>, indices: std::slice::Chunks<u64>, attributes: &SectorAttributes) -> Vec<#name_ident> {
                node_ids.iter().zip(indices).map(|(node_id, chunk)| {
                    #name_ident {
                        node_id: *node_id,
                        #(#attribute_assignments)*
                    }
                }).collect()
            }
        };

        let match_pattern = quote! {
            #geometry_id_num => {
                #snake_name_collection_ident = #primitive_parse_function(node_ids, indices, attributes);
            },
        };

        let to_renderables = quote! {
            for item in &raw_primitives.#snake_name_collection_ident {
                item.to_renderables(&mut collections);
            }
        };

        primitive_functions.push(parse_primitive_function);
        primitive_names.push(name_ident);
        primitive_idents.push(snake_name_collection_ident);
        primitive_structs.push(primitive_struct);
        primitive_match_patterns.push(match_pattern);
        primitive_impls.push(primitive_impl);
        primitive_to_renderables.push(to_renderables);
    }

    let code = quote! {

        #(#primitive_structs)*

        #(#primitive_impls)*

        #[derive(Clone, Debug, Deserialize, Serialize)]
        pub struct PrimitiveCollections {
            #(pub #primitive_idents: Vec<#primitive_names>),*
        }
        #(#primitive_functions)*
        pub fn parse_primitives(input: &mut impl BufRead, attributes: &SectorAttributes) -> Result<PrimitiveCollections, Error> {
            #(let mut #primitive_idents = Default::default();)*
            loop {
                if input.eof()? {
                    break;
                }

                let geometry_type = input.read_u8()?;
                let geometry_count = input.read_u32::<LittleEndian>()?;
                let geometry_attribute_count = input.read_u8()?;
                let byte_count = input.read_u32::<LittleEndian>()?;

                if geometry_count == 0 || byte_count == 0 {
                    continue;
                }

                // Read node IDS as 56-bit integers
                let mut node_ids = Vec::new();
                for _i in 0..geometry_count {
                    let lo = input.read_u48::<LittleEndian>()?;
                    let hi = u64::from(input.read_u8()?);

                    let node_id = lo | (hi << 48);
                    node_ids.push(node_id);
                }

                let mut data = vec![0; byte_count as usize].into_boxed_slice();
                input.read_exact(&mut data)?;

                let index_count = (geometry_count as usize) * (geometry_attribute_count as usize);
                let indices = decode_fib(&data, index_count);

                let indices = indices.chunks(geometry_attribute_count as usize);

                match geometry_type {
                    #(#primitive_match_patterns)*
                    _ => return Err(error!("Unkown geometry id {}", geometry_type)),
                }
            }
            Ok(PrimitiveCollections {
                #(#primitive_idents),*
            })
        }
    // Add some newlines to make it possible to debug errors
    };

    let renderables_code = quote! {
        pub fn convert_primitives(raw_primitives: &i3df::PrimitiveCollections) -> PrimitiveCollections {
            // TODO do not make a guess at 100, but instead calculate the actual number, which we
            // should know already since we know how many renderables there are per file primitive
            let mut collections = PrimitiveCollections::with_capacity(10);
            #(#primitive_to_renderables)*
            collections
        }
    };

    let out_dir = env::var("OUT_DIR")?;
    let out_file = format!("{}/generated.rs", out_dir);
    let renderables_out_file = format!("{}/generated_renderables.rs", out_dir);

    write_code_to_file(&out_file, &code)?;
    write_code_to_file(&renderables_out_file, &renderables_code)?;

    Ok(())
}

