const express = require('express');
const router = express.Router();

const { CrearVentaC, ObtenerVentasC, ObtenerVentaPorIdC, ActualizarVentaC, EliminarVentaC } = require("../controllers/venta.controller");
const {validarCrearVenta,
    validarActualizarVenta,
    validarEliminarVenta} = require('../middleware/venta.validaciones')

router.get('/obtenerVentas', ObtenerVentasC);
router.get('/obtenerVentas/:id', ObtenerVentaPorIdC);
router.post('/crearVenta', CrearVentaC);
router.put('/actualizarVenta', ActualizarVentaC);
router.delete('/eliminarVenta/:id', EliminarVentaC);

module.exports = router;
