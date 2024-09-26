const Usuario = require('../models/usuario.model');
const bcrypt  = require("bcrypt")
const jwt = require("jsonwebtoken")


const CrearUsuario = async function (UsuarioData) {
    

    try {
        if(!password){
            throw new Error('Todos los campos son requeridos');
        }
        const password = UsuarioData.identificacion
        if(!password){
            throw new Error
        }

        const passwordEncriptado = await bcrypt.hash(password,10);
        UsuarioData.contrasena = passwordEncriptado;
        const usuarioCreado = await Usuario.create(UsuarioData);
        return usuarioCreado;
    } catch (error) {
        throw new error;
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
    BuscarUsuarioporid 
}
