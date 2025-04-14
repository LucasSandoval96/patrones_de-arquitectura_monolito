const db = require("../db/database").getDb();

class VentaModel {
  // Obtener todas las ventas
  getAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM ventas", [], (err, rows) => {
        if (err) {
          reject("Error al obtener ventas: " + err.message);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Agregar una venta
  createVenta({ producto_id, usuario_id, cantidad, fecha }) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO ventas (producto_id, usuario_id, cantidad, fecha) VALUES (?, ?, ?, ?)",
        [producto_id, usuario_id, cantidad, fecha],
        function (err) {
          if (err) {
            reject("Error al registrar venta: " + err.message);
          } else {
            resolve({
              id: this.lastID,
              producto_id,
              usuario_id,
              cantidad,
              fecha,
            });
          }
        }
      );
    });
  }

  // Eliminar una venta por ID
  deleteVenta(id) {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM ventas WHERE id = ?", [id], (err) => {
        if (err) {
          reject("Error al eliminar venta: " + err.message);
        } else {
          resolve({ id });
        }
      });
    });
  }
}

module.exports = VentaModel;
