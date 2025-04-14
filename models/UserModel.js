const db = require("../db/database").getDb();

class UserModel {
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

  // createUser({ name, email }) {
  //   return new Promise((resolve, reject) => {
  //     db.run(
  //       "INSERT INTO users (name, email) VALUES (?, ?)",
  //       [name, email],
  //       function (err) {
  //         if (err) {
  //           reject("Error al agregar usuario: " + err.message);
  //         } else {
  //           resolve({ id: this.lastID, name, email });
  //         }
  //       }
  //     );
  //   });
  // }
  createUser({ name, email }) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email],
        function (err) {
          if (err) {
            reject("Error al agregar usuario: " + err.message);
          } else {
            resolve({ id: this.lastID, name, email });
          }
        }
      );
    });
  }
  

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

module.exports = UserModel;
