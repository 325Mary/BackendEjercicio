const pool = require("../config/database");

const Venta = {
  findAll: async () => {
    return await pool.execute("SELECT * FROM Venta");
  },

  create: async ({ idUsuario, total }) => {
    return await pool.execute(
      "INSERT INTO Venta (id_usuario, fecha_venta, total) VALUES (?, NOW(), ?)",
      [idUsuario, total]
    );
  },

  findById: async (idVenta) => {
    return await pool.execute("SELECT * FROM Venta WHERE id_venta = ?", [
      idVenta,
    ]);
  },

  update: async ({idVenta, idUsuario, fechaVenta, total }) => {
    return await pool.execute(
      "UPDATE Venta SET id_usuario = ?, fecha_venta = ?, total = ? WHERE id_venta = ?",
      [idUsuario, fechaVenta, total, idVenta]
    );
  },

  delete: async (idVenta) => {
    return await pool.execute("DELETE FROM Venta WHERE id_venta = ?", [idVenta]);
  }
};

module.exports = Venta;
