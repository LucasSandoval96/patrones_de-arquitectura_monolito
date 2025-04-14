const db = require("./database").getDb();

function createTables() {
  db.serialize(() => {
    // Tabla de productos
    db.run(
      `
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL
      )
      `,
      (err) => {
        if (err) {
          console.error("Error al crear la tabla products:", err.message);
        } else {
          console.log("Tabla products creada o ya existe.");
        }
      }
    );

    // Tabla de usuarios
    db.run(
      `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        dni TEXT NOT NULL UNIQUE
      )
      `,
      (err) => {
        if (err) {
          console.error("Error al crear la tabla users:", err.message);
        } else {
          console.log("Tabla users creada o ya existe.");
        }
      }
    );

    // Tabla de ventas
    db.run(
      `
      CREATE TABLE IF NOT EXISTS ventas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        producto_id INTEGER,
        usuario_id INTEGER,
        cantidad INTEGER,
        fecha TEXT,
        FOREIGN KEY (producto_id) REFERENCES products(id),
        FOREIGN KEY (usuario_id) REFERENCES users(id)
      )
      `,
      (err) => {
        if (err) {
          console.error("Error al crear la tabla ventas:", err.message);
        } else {
          console.log("Tabla ventas creada o ya existe.");
        }
      }
    );
  });
}

module.exports = { createTables };
