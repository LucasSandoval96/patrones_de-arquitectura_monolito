// const db = require("./database").getDb();

// function createUserTable() {
//   db.serialize(() => {
//     db.run(
//       `
//       CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL,
//         email TEXT NOT NULL UNIQUE
//       )
//     `,
//       (err) => {
//         if (err) {
//           console.error("Error al crear la tabla usuarios:", err.message);
//         } else {
//           console.log("Tabla usuarios creada o ya existe.");
//         }
//       }
//     );
//   });
// }

// module.exports = { createUserTable };
