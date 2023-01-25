use Pizzeria;
db.createCollection("Provincia", {
    validator: {
        $jsonSchema: {
            required: ['nombre'],
            properties: {
                nombre:{
                    bsonType: 'string'
                }
            }
            
        }
    }
});
db.createCollection("Localidad", {
    validator: {
        $jsonSchema: {
            required: ['nombre'],
            properties: {
                nombre:{
                    bsonType: 'string'
                }
            }
            
        }
    }
});
db.createCollection("Cliente", {
    validator: {
        $jsonSchema: {
            required: ['nombre',
             'apellidos',
            'direccion',
            'codigoPostal',
            'IdLocalidad',
            'IdProvincia',
            'telefono'],
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                apellidos: {
                    bsonType: 'string'
                },
                direccion: {
                    bsonType: 'string'
                },
                codigoPostal: {
                    bsonType: 'string'
                },
                IdLocalidad: {
                    bsonType: 'objectId'
                },
                IdProvincia: {
                    bsonType: 'objectId'
                },
                telefono: {
                    bsonType: 'int'
                }
            }
        }
    }
});
db.createCollection("Pedido", {
    validator:{
        $jsonSchema: {
            required: ['fechaHora',
            'aDomicilio',
            'IdCliente'
            ],
            properties: {
                fechaHora: {
                    bsonType: 'date'
                },
                aDomicilio: {
                    bsonType: 'bool'
                },
                IdCliente: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});
db.createCollection("Producto", {
    validator:{
        $jsonSchema: {
            required:['nombre',
            'imagen',
            'precio',
            'tipoProducto',
            'categoriaPizza'
            ],
            properties: {
                nombre: {
                    bsonType:'string'
                },
                imagen: {
                    bsonType: 'object'
                },
                precio: {
                    bsonType:'int'
                },
                tipoProducto: {
                    bsonType: 'string',
                    enum: ['pizza', 'hamburguesa', 'bebida']
                },
                categoriaPizza: {
                    bsonType: 'string'
                }
            }
        }
    }
});
db.createCollection("pedidoXproducto", {
    validator: {
        $jsonSchema: {
            required:['IdProducto',
            'IdPedido',
            'cantidad'
            ],
            properties: {
                IdProducto: {
                    bsonType: 'objectId'
                },
                IdPedido: {
                    bsonType: 'objectId'
                },
                cantidad: {
                    bsonType: 'int'
                },
            }
        }
    }
});
db.createCollection("Tienda", {
    validator: {
        $jsonSchema:{
            required: ['direccion','codigoPostal', 'IdLocalidad', 'IdProvincia'],
            properties: {
                direccion: {
                    bsonType: 'string'
                },
                codigoPostal: {
                    bsonType:'string'
                },
                IdLocalidad: {
                    bsonType:'objectId'
                },
                IdProvincia: {
                    bsonType:'objectId'
                }
            }
        }
    }
});
db.createCollection("Empleado", {
    validator:{
        $jsonSchema:{
            required: ['nombre','apellidos','NIF','telefono','puesto'],
            properties: {
                nombre:{
                    bsonType: 'string'
                },
                apellidos: {
                    bsonType: 'string'
                },
                NIF: {
                    bsonType:'string',
                    pattern: "^[0-9]{8}[A-Z]$"
                },
                telefono: {
                    bsonType:'int'
                },
                puesto: {
                    bsonType:'string',
                    enum: ['cocinero','repartidor']
                }
            }  
        }
    }
});
db.createCollection("PedidosDomicilio",{
    validator:{
        $jsonSchema:{
            required: ['IdEmpleado','IdPedido','fechaHora'],
            properties: {
                IdEmpleado: {
                    bsonType:'objectId'
                },
                IdPedido: {
                    bsonType:'objectId'
                },
                fechaHora: {
                    bsonType: 'date'
                }
            }            
        }
    }
})

