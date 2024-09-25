//define una ruta para la creación de usuarios en una aplicación Node.js utilizando el framework Express.
const express = require('express');
const router = express.Router();

const {
    //funciones del controller para la tabla usuarios
    CrearUserC, 
    ActualizarUserC, 
    ListarUsuariosC,
} = require('../controllers/usuario.controller')



//metodos para ejecutar la tabla usuarios
router.get('/listarUsuarios', ListarUsuariosC);
router.post('/crearUser', CrearUserC);
router.put('/actualizarUsers/:id', ActualizarUserC);





module.exports = router


