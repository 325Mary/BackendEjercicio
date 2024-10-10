// este archivo es el punto de entrada para el servidor de tu aplicación y 
//se encarga de inicializar el servidor y conectarlo a la base de datos.

//llamados de las constantes de database y server (pool y bakend)
 const Backend = require('../src/config/server');
 const pool = require('../src/config/database');

 require('dotenv').config();

 Backend.listen(Backend.get("port"), ()=>{//inicializar el servidor y hacer que esté disponible en un puerto específico
    console.log('Puerto se esta ejecutando en:', Backend.get("port"));
    
 })