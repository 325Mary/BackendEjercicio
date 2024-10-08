const express = require('express');
const router =express.Router();

const {
    crearTiendaC, ActualizarTiendaC,
    deleteTienda,
    getTienda
} = require('../controllers/tienda.controller')


router.post('/crearTienda', crearTiendaC)
router.get('/:id', getTienda)
router.put('/Actualizartienda/:id', ActualizarTiendaC)
router.delete('/:id', deleteTienda);

/*router.put('/tiendas/:id', actualizarTienda);*/
module.exports = router;