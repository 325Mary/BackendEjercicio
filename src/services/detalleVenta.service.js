const DetalleVenta = require('../models/detalleVenta.model');

const CreateDetalle = async (DetalleVentaData) => {
    try{
         if (!DetalleVentaData.cantidad || !DetalleVentaData.precio_unitario) {
        throw new Error('Todos los campos son requeridos');
        }
        const detalleVenta = await DetalleVenta.create(DetalleVentaData);
        return detalleVenta;
    }catch(error){
        throw error;
    }
}

module.exports = {
    CreateDetalle
}