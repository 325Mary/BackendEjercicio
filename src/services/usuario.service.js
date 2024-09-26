//manejamos las solicitudes
const Usuario = require('../models/usuario.model');
const jwt = require('jsonwebtoken');
const bCrypt = require('bcrypt');

//exportamos las funciones

//funcion para filtrar usuario por su id 
const ObtenerUsuarioPorId = async function (idUsuario) {
    try {
        const usuario = await Usuario.findByPk(idUsuario);
        if (!usuario) {
            throw new Error('No se encontró el usuario.');
        }
        return usuario;
    } catch (error) {
        throw error;
    }
}

// funcion para listar usuarios de la Bd
const ListarUsuarios = async function (){
    try {
        const usuarios = await Usuario.findAll({});
        return usuarios;
    } catch (error) {
        throw error;
    }
}
const CrearUsuario = async function (UsuarioData) {
    
    try {
        if (!UsuarioData) {
            throw new Error('Todos los campos son requeridos');
        }

        const Password = UsuarioData.identificacion;
        if(!Password){
            throw new error;
        }

        const PasswordEncripted = await bCrypt.hash(Password, 10);
        UsuarioData.contrasena = PasswordEncripted;

        const usuarioCreado = await Usuario.create(UsuarioData);
        return usuarioCreado;
    } catch (error) {
        throw error;
    }
}

const ActualizarUser = async function(idUsuario, NuevoUsuario){
    try{
         
        const usuarioActualizado = await Usuario.editUsuario(idUsuario, NuevoUsuario);

        if (!usuarioActualizado) {
            throw new Error('No se pudo actualizar el usuario, o el usuario no existe.');
        }
        
        return usuarioActualizado;
        
    }catch(error){
        throw error;
    }
}
const getUserByEmail = async (email) => {
    try {
        
        const [rows] = await Usuario.findUserByEmail(email);
        if (rows.length === 0) {
            throw new Error('Usuario no encontrado');
        }
        return rows[0]; 
    } catch (error) {
        throw error; 
    } 
}

const BuscarUsuarioporid = async function(idUsuario){
    try{
         
        const buscandousuario = await Usuario.findOneUsuario(idUsuario);

        if (!buscandousuario) {
            throw new Error('No se pudo actualizar el usuario, o el usuario no existe.');
        }

        return buscandousuario;
        
    }catch(error){
        throw error;
    }
}


module.exports ={
    CrearUsuario,
    ActualizarUser,
    BuscarUsuarioporid ,
    ListarUsuarios,
    getUserByEmail
}

/*
define un servicio para crear usuarios en una aplicación Node.js. La función CrearUsuario valida los datos del usuario, 
crea un nuevo usuario en la base de datos utilizando el modelo Usuario y maneja errores durante el proceso.
*/

/*const CrearRol = async function (rolData) {
    if (!rolData.nombreRol || !rolData.descripcionRol) {
        throw new Error('Todos los campos son requeridos');
    }
    const rol = `INSERT INTO Rol (nombreRol, descripcionRol)
        VALUES (?, ?)`;
    return pool.execute(rol, [rolData.nombreRol, rolData.descripcionRol]);
};

module.exports ={
    CrearUsuario,
    CrearRol
}*/