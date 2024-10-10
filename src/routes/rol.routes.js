//este archivo es responsable de definir las rutas HTTP para la tabla rol 
//en la base de datos y proporcionar una interfaz para ejecutar las operaciones 
//CRUD desde otros archivos del proyecto.

//define una ruta para la creación de usuarios en una aplicación Node.js utilizando el framework Express.
const express = require('express');
const router = express.Router();


const {
    //funciones del controller pare la tabla rol
    EditRolC,
    CrearRolC,
    ListarUsuRolC,
    EliminarRolC
} = require('../controllers/rol.controller')

//metodos para ejecutar la tabla rol
router.get('/listarUsuRol', ListarUsuRolC)
router.post('/crearRol', CrearRolC);
router.put('/actualizarRol/:id', EditRolC);
router.delete('/eliminarRol/:id', EliminarRolC);



module.exports = router


