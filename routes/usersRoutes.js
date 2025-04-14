const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAll);

router.post("/add", userController.create);

router.post("/delete/:id", userController.delete);

module.exports = router;