const {crearTienda,} = require('../services/tienda.service');

const { ActualizarTienda} = require('../services/tienda.service');
const controller = {};

controller.crearTiendaC = async (req, res) => {
    try {
        // Datos recibidos en la solicitud
        const { nombre, identificacion, direccion, telefono,email,fecha_registro} = req.body;

        // Llama al servicio que crea la tienda
        const nuevaTienda = await crearTienda({ nombre, identificacion, direccion,telefono,email,fecha_registro });

        // Retorna una respuesta exitosa con la tienda creada
        res.status(201).json({
            message: 'Tienda creada exitosamente',
            data: nuevaTienda
        });
    } catch (error) {
        // Manejo de errores
        console.error('Error al crear la tienda:', error);
        res.status(500).json({
            message: 'Error al crear la tienda',
            error: error.message
        });
    }
};


module.exports = controller;