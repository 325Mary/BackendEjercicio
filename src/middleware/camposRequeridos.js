//este archivo es responsable de validar que todos los campos requeridos estén presentes en la solicitud 
//HTTP antes de permitir que el control vuelva al siguiente middleware o al controlador.

function validarCamposRequeridos(camposRequeridos) {
    return function(req, res, next) {
      const camposFaltantes = camposRequeridos.filter(campo => !req.body[campo]);
  
      if (camposFaltantes.length > 0) {
        const errores = camposFaltantes.map(campo => `${campo} es requerido`);
        return res.status(400).json({ error: 'La solicitud es incorrecta. Falta el parámetro ', errores });
      }
  
      // Si todos los campos requeridos están presentes, pasar al siguiente middleware o controlador
      next();
    }
  }
  
  module.exports = validarCamposRequeridos;