const Usuario = require('../models/usuario.model');


const CrearUsuario = async function (UsuarioData) {
    if (!UsuarioData.identificacion || !UsuarioData.nombre || !UsuarioData.apellido || !UsuarioData.email || !UsuarioData.contrasena || !UsuarioData.direccion || !UsuarioData.fecha_nacimiento) {
        throw new Error('Todos los campos son requeridos');
    }

    try {
        const usuarioCreado = await Usuario.create(UsuarioData);
        return usuarioCreado;
    } catch (error) {
        throw error;
    }
}

(async () => {
    try {
        const usuarios = await listarUsuarios();
        console.log('Usuarios:', usuarios);
    } catch (error) {
        console.error('Error al listar usuarios:', error);
    }
})();


module.exports ={
    CrearUsuario,
    listarUsuarios
}