const express = require("express");
const router = express.Router();
const UsuarioModel = require("../models/UsuarioModel");

const usuarioModel = new UsuarioModel();

// Obtener todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const usuarios = await usuarioModel.getAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Crear un nuevo usuario
router.post("/create", async (req, res) => {
  const { nombre, dni } = req.body;
  try {
    const nuevoUsuario = await usuarioModel.createUser({ nombre, dni });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Eliminar un usuario por ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const eliminado = await usuarioModel.deleteUser(id);
    res.json(eliminado);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
