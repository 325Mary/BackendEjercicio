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
const ActualizarTienda = async function(idTienda, nuevaTienda){
    try{
         
        const TiendaActualizado = await Tienda.editTienda(idTienda, nuevaTienda);
        if (!TiendaActualizado) {
            throw new Error('No se pudo actualizar la tienda, o la tienda no existe.');
        }
        return TiendaActualizado;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearTienda,
    ActualizarTienda
};