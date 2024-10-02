const {crearVenta, obtenerVentas, obtenerVentaPorId, actualizarVenta, eliminarVenta} = require("../services/venta.service");

const controller = {};

controller.CrearVentaC = async (req, res) => {
  const ventaData = req.body;
  try {
    const result = await crearVenta(ventaData);
    res.status(201).json({ message: "Venta creada exitosamente", result });
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

controller.ObtenerVentasC = async (req, res) => {
  try {
    const ventas = await obtenerVentas();
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

controller.ObtenerVentaPorIdC = async (req, res) => {
  const id = req.params.id;
  try {
    const venta = await obtenerVentaPorId(id);
    res.status(200).json(venta);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

controller.ActualizarVentaC = async (req, res) => {
  const ventaData = req.body;
  try {
    const result = await actualizarVenta(ventaData);
    res.status(200).json({ message: "Venta actualizada exitosamente", result });
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

controller.EliminarVentaC = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await eliminarVenta(id);
    res.status(200).json({ message: 'Venta eliminada exitosamente', result })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = controller;
