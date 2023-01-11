use Optica;
db.TipoMontura.insertMany([{name:"Flotantes"}, {name:"Pasta"}, {name:"Metálica"}]);
db.createCollection("Clientes", {
    validator: {
        $jsonSchema: {
            required: ['direccion',
            'telefono',
            'email',
            'fechaRegistro',
            'recomendadoPor' 
            ],
            properties: {
                direccion: {
                    bsonType: 'array',
                    items: {
                    required: [
                        'calle',
                        'numero',
                        'piso',
                        'puerta',
                        'ciudad',
                        'codigoPostal',
                        'pais'
                    ],
                    properties: {
                        calle: {
                        bsonType: 'string'
                        },
                        numero: {
                        bsonType: 'int'
                        },
                        piso: {
                        bsonType: 'int'
                        },
                        puerta: {
                        bsonType: 'string'
                        },
                        ciudad: {
                        bsonType: 'string'
                        },
                        codigoPostal: {
                        bsonType: 'int'
                        },
                        pais: {
                        bsonType: 'string'
                        }
                    }
                    }
            },
            telefono: {
                bsonType: 'int'
            },
            email: {
                bsonType: 'string'
            },
            fechaRegistro: {
                bsonType: 'date'
            },
            recomendadoPor: {
                bsonType: 'objectId'
            }
        }
    }
}});
db.createCollection("Gafas", {
    validator: {
        $jsonSchema: {
            required: ['marca',
            'graduacion',
            'tipoMontura',
            'colorMontura',
            'colorCristal',
            'precio',
            'proveedor' 
            ],
            properties: {
                marca: {
                    bsonType: 'string'
                },
                graduacion: {
                    bsonType: 'int'
                },
                tipoMontura: {
                    bsonType: 'objectId'
                },
                colorMontura: {
                    bsonType: 'string'
                },
                colorCristal: {
                    bsonType: 'string'
                },
                precio: {
                    bsonType: 'int'
                },
                proveedor: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});
db.createCollection('Proveedor', {
    validator: {
       $jsonSchema: {
           required: ['nombre',
           'direccion',
           'telefono',
           'nif'
           ],
           properties: {
               nombre: {
                   bsonType: 'string'
               },
               direccion: {
                   bsonType: 'array',
                   items: {
                   required: [
                       'calle',
                       'numero',
                       'piso',
                       'puerta',
                       'ciudad',
                       'codigoPostal',
                       'pais'
                   ],
                   properties: {
                       calle: {
                       bsonType: 'string'
                       },
                       numero: {
                       bsonType: 'int'
                       },
                       piso: {
                       bsonType: 'int'
                       },
                       puerta: {
                       bsonType: 'string'
                       },
                       ciudad: {
                       bsonType: 'string'
                       },
                       codigoPostal: {
                       bsonType: 'int'
                       },
                       pais: {
                       bsonType: 'string'
                       }
                   }
                   }
               },
               telefono: {
                   bsonType: 'int'
               },
               nif: {
                   bsonType: 'int'
               }
           }
        }
    }
});
db.createCollection('Ventas', {
    validator: {
        $jsonSchema:{
            required: ['gafa', 
                'cliente', 
                'empleado'],
            properties: {
                gafa: {
                    bsonType: 'objectId'
                },
                cliente: {
                    bsonType: 'objectId'
                },
                empleado: {
                    bsonType: 'objectId'
                }
            }
        }
        

    }
});
db.createCollection('Empleados', {
    validator: {
        $jsonSchema:{
            required: ['nombre'],
            properties: {
                nombre: {
                    bsonType: 'string'
                }
            }
        }
    }
})