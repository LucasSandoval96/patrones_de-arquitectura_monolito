const db = require("../db/database").getDb();

class UsuarioModel {
  // Obtener todos los usuarios
  getAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
          reject("Error al obtener usuarios: " + err.message);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Agregar un usuario
  createUser({ nombre, dni }) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (nombre, dni) VALUES (?, ?)",
        [nombre, dni],
        function (err) {
          if (err) {
            reject("Error al agregar usuario: " + err.message);
          } else {
            resolve({ id: this.lastID, nombre, dni });
          }
        }
      );
    });
  }

  // Eliminar un usuario por ID
  deleteUser(id) {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM users WHERE id = ?", [id], (err) => {
        if (err) {
          reject("Error al eliminar usuario: " + err.message);
        } else {
          resolve({ id });
        }
      });
    });
  }
}

module.exports = UsuarioModel;
