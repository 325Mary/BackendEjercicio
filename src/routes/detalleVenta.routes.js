const express = require('express');
const router = express.Router();

const{
    CreateDetalleC, ListarDetalleC, EditarDetalleC
} = require('../controllers/detalleVenta.controller')

//metodo para ejecutar la tabla detalle venta
//router.get('/listarDetalle', ListarDetalleC);
router.post('/createDetalle', CreateDetalleC);
router.get('/listarDetalle', ListarDetalleC);
router.put('/updateDetalle/:id', EditarDetalleC);

module.exports = router;