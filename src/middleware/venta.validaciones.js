const validarObtenerVentaProId = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ mensaje: 'El id es requerido' });
    }
    
}

const validarCrearVenta = (req, res, next) => {
    const { id_usuario, id_tienda, fecha_venta, total } = req.body;
    if (!id_usuario || !id_tienda || !fecha_venta || !total) {
        return res.status(400).json({ error: 'Todos los campos son requeridos para crear una venta' });
    }
    next();  
};

const validarActualizarVenta = (req, res, next) => {
    const { id_venta, id_usuario, id_tienda, fecha_venta, total } = req.body;
    if (!id_venta || !id_usuario || !id_tienda || !fecha_venta || !total) {
        return res.status(400).json({ error: 'Todos los campos son requeridos para actualizar una venta' });
    }
    next();  
};

const validarEliminarVenta = (req, res, next) => {
    const { id_venta } = req.params;
    if (!id_venta) {
        return res.status(400).json({ error: 'El ID de la venta es requerido para eliminar' });
    }
    next(); 
};

module.exports = {
    validarCrearVenta,
    validarActualizarVenta,
    validarEliminarVenta
};