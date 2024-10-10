//, este archivo es responsable de establecer la conexión con la base de datos MySQL y
// proporcionar una interfaz para ejecutar consultas SQL desde otros archivos del proyecto.

const mysql = require('mysql2'); //módulo mysql2 de Node.js

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    //password: 'root',
    database: 'backend',
  

});

pool.query('SELECT 1 + 1 AS solution', function(err, rows){
    if(err){
        console.error('Error al conectarse a la base de datos', err)
        return
    };
    console.log('conecion exitosa a mysql:', rows[0].solution);
    
});

module.exports = pool.promise();//Esto permite que otros archivos del proyecto puedan utilizar la conexión a la base de datos.
