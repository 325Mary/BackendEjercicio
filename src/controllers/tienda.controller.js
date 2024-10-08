const {crearTienda, ActualizarTienda} = require('../services/tienda.service');

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
}
// Leer tienda por ID
controller.getTienda = async (req, res) => {
    try {
        const tienda = await tiendaService.getTiendaById(req.params.id);
        if (!tienda) {
            return res.status(404).json({ message: "Tienda no encontrada" });
        }
        res.json(tienda);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

controller.ActualizarTiendaC = async function (req, res) {
    try{
        const tiendaData = req.body;
        const idTienda = req.params.id;

        // Llamar al servicio para actualizar el usuario
        const tienda = await ActualizarTienda(idTienda, tiendaData)

        // Enviar la respuesta
        return res.status(201).json(tienda);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
// Eliminar tienda por ID
controller.deleteTienda = async (req, res) => {
    try {
        const result = await tiendaService.deleteTienda(req.params.id);
        if (result.message === "Tienda no encontrada") {
            return res.status(404).json({ message: result.message });
        }
        res.json({ message: result.message });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = controller;