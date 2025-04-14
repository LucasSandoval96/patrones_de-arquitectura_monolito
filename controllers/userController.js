const UserModel = require("../models/UserModel");
const userModel = new UserModel();

exports.getAll = async (req, res) => {
  try {
    const users = await userModel.getAll();
    res.render("users", { users });
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

exports.create = async (req, res) => {
  const { name, email } = req.body;
  try {
    await userModel.createUser({ name, email });
    res.redirect("/users");
  } catch (error) {
    console.error("Error detallado:", error); // <- AGREGÁ ESTO
    return res.status(500).json({ error: "Error al crear usuario" });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    res.redirect("/users");
  } catch (error) {
    return res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
