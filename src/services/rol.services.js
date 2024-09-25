const RolUsuario = require('../models/rol.model');


const CrearRol = async function(rolData) {
    if ( !rolData.rol){
        throw new Error('Todos los campos son requeridos');
    }
    try{
        const rolCreado = await RolUsuario.create(rolData);
        return rolCreado;
    }
    catch (error) {
        throw error;
    }
}

const ActulizarRol = async function(id, nuevoRol) {
    try{
        console.log(nuevoRol)
        const rolActualizado = await RolUsuario.editRol(id, nuevoRol);
        if (!rolActualizado){
            throw new Error('No se pudo actualizar el rol, o el rol no existe.');
        }
        return rolActualizado;
       
    }
    catch (error) {
        throw error;
    }

}

// const EditRol = async function(idRol, NuevoRol) {


//     try {console.log('NuevoRol')

//         const existente = await RolUsuario.findByPk(idRol);
//         if (!existente) {
//             throw new Error('No se pudo actualizar el rol, o el rol no existe.');
//         }
        
//         // const rolActualizado = { ...existente, ...NuevoRol}
//         // if (existente.idRol === idRol){
//         // await RolUsuario.editRol(idRol, NuevoRol);
//         // console.log('NuevoRol')
//         // console.log(rolActualizado)


//         //     await rolActualizado;
//         //     return rolActualizado;
//         // }
        
//     }
//     catch (error) {
//         throw error;
//     }
// }

const ListarUsuRol = async function () {
    try{
        const roles = await RolUsuario.findAll();
        return roles;
    }
    catch (error) {
        throw error;
    }
    
}

module.exports = {
    CrearRol,
    ActulizarRol,
    ListarUsuRol,
    // EditRol
}




