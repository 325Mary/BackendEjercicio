const express = require('express');
const router =express.Router();

const {
    crearTiendaC
} = require('../controllers/tienda.controller')

router.post('/crearTienda', crearTiendaC)
/*router.put('/tiendas/:id', actualizarTienda);*/
module.exports = router;