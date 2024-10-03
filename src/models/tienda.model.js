const pool = require('../config/database');
const mysql = require('mysql2');


const Tienda = {
    create: async function(tiendaData){
        const tienda = `INSERT INTO tienda (nombre, direccion, telefono, email, fecha_registro, identificacion)
            VALUES (?, ?, ?, ?, ?, ?)`;
        return await pool.execute(tienda,[ tiendaData.nombre, tiendaData.direccion,tiendaData.telefono,tiendaData.email,tiendaData.fecha_registro, tiendaData.identificacion

        ]);
    },
    editTienda: async function (idTienda, NuevaTienda) {//actualiza un usuario existente en la base de datos
        try {
            const [result] = await pool.execute(
                `UPDATE tienda SET nombre = ?, direccion = ?, telefono = ?, email = ?, fecha_registro = ?, identificacion = ? WHERE id = ?`,
                [NuevaTienda.nombre, NuevaTienda.direccion, NuevaTienda.telefono, NuevaTienda.email, NuevaTienda.fecha_registro, NuevaTienda.identificacion, idTienda]
            );
            if (result.affectedRows === 0) {
                throw new Error('No se encontró la tienda');
            }
            return { mensaje: 'la tienda se actualizó correctamente' };
        } catch (error) {
            throw error;
        }
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM tienda';
        pool.query(query, callback);
    },
    finpoolyId: (id, callback) => {
        const query = 'SELECT * FROM tienda WHERE id = ?';
        pool.query(query, [id], callback);
    },
    update: (id, data, callback) => {
        const query = 'UPDATE tienda SET ? WHERE id = ?';
        pool.query(query, [data, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM tienda WHERE id = ?';
        pool.query(query, [id], callback);
    }
};


module.exports = Tienda;
