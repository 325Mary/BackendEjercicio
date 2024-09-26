//configuracion a la base de datos
const mysql = require('mysql2'); //importa la biblioteca

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'backend',
    
});

pool.query('SELECT 1 + 1 AS solution', function(err, rows){
    if(err){
        console.error('Error al conectarse a la base de datos', err)
        return
    };
    console.log('conecion exitosa a mysql:', rows[0].solution);
    
});

module.exports = pool.promise();

//configura una conexión a una base de datos MySQL y prueba la conexión ejecutando una consulta simple.