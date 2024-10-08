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
    

}
// Obtener tienda por ID
const getTiendaById = async (id) => {
    try {
        const tienda = await Tienda.findById(id);
        if (!tienda) {
            return { message: "Tienda no encontrada" };
        }
        return tienda;
    } catch (error) {
        throw new Error(`Error al obtener la tienda: ${error.message}`);
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
// Eliminar tienda por ID
const deleteTienda = async (id) => {
    try {
        const tiendaeliminada = await Tienda.findByIdAndDelete(id);
        if (!tiendaeliminada) {
            return { message: "Tienda no encontrada" };
        }
        return { message: "Tienda eliminada correctamente" };
    } catch (error) {
        throw new Error(`Error al eliminar la tienda: ${error.message}`);
    }
};


module.exports = {
    crearTienda,
    getTiendaById,
    ActualizarTienda,
    deleteTienda 


};