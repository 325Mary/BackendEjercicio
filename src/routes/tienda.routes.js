const express = require('express');
const router =express.Router();

const {
    crearTiendaC, ActualizarTiendaC
} = require('../controllers/tienda.controller')


router.post('/crearTienda', crearTiendaC)
router.put('/Actualizartienda/:id', ActualizarTiendaC)

/*router.put('/tiendas/:id', actualizarTienda);*/
module.exports = router;