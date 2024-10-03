const pool = require('../config/database');
const mysql = require('mysql2');


const Tienda = {
    create: async function(tiendaData){
        const tienda = `INSERT INTO tienda (nombre, direccion, telefono, email, fecha_registro, identificacion)
            VALUES (?, ?, ?, ?, ?, ?)`;
        return await pool.execute(tienda,[ tiendaData.nombre, tiendaData.direccion,tiendaData.telefono,tiendaData.email,tiendaData.fecha_registro, tiendaData.identificacion

        ]);
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
/*
controller.ActualizarTiendaC = async function (req, res) {
    try{
        const { id,nombre, direccion, telefono,email,fecha_registro} = req.body;

        const tiendaId = req.params.id;
        // Llamar al servicio para actualizar el usuario
        const tienda = await Tienda.finpoolyId(tiendaId);
        //si no se encuantra la tienda
        if (!tienda) {
            return res.status(404).json({ error: 'Tienda no encontrada' });
        }

        const tiendaActualizada = await tienda.save();
        // Enviar la respuesta
        return res.status(201).json(tiendaActualizada);
    }catch(error){
        res.status(500).json({error:error.message })
    }
}*/

module.exports = Tienda;
