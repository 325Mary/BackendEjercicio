// vamos a ejecutar a traves de la libreria express
// llamar rutas del puerto que se van ejecutar atraves del puerto q se quiera
// usuarioRoutes constante que apartir de una cosnsulta me toma la ruta donde se necuentra usuairio.routes donde estan todas las rutas que se van a querer usar
const express = require('express');
const morgan = require('morgan')
const usuarioRoutes = require('../routes/usuario.routes')

// crear nuestra aplicacion express
const Backend = express();
const port = 3002;
Backend.use(express.json());
Backend.use(morgan('dev'));

Backend.use(usuarioRoutes);


Backend.set('port', process.env.PORT || port );//puerto dinamico
module.exports = Backend//exporta la instancia del servidor web, lo que permite que se pueda importar y utilizar en otros archivos
//se ejecuta a travez de la libreria de express

//RESUMEN: configura el servidor web utilizando Express, registra las rutas para los usuarios y configura el puerto dinámico.