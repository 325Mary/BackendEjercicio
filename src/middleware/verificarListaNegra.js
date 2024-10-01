const { BlacklistToken } = require('../models');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

// Middleware para verificar si el token está en la lista negra
const VerificarTokenEnListaNegra = async (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1];  // Extrae el token del header

  // Verifica si el token está en la lista negra
  const tokenEnListaNegra = await BlacklistToken.findOne({ where: { token } });

  if (tokenEnListaNegra) {
    return res.status(401).json({ message: 'Token inválido (lista negra)' });
  }

  try {
    // Verifica el token
    jwt.verify(token, SECRET);
    next();  // Continua con la siguiente función si el token es válido
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = VerificarTokenEnListaNegra;