const Tienda = require('../models/tienda.model');

const crearTienda = async (data) => {
    try {
        if(!data){
            throw new Error('son requeridos todos los campos')
        }
        // Crear nueva tienda en la base de datos
        const tienda = await Tienda.create(data);
        // await tienda.save();
        return tienda;
    } catch (error) {
        throw new Error('No se pudo crear la tienda: ' + error.message);
    }
};

module.exports = {
    crearTienda
};