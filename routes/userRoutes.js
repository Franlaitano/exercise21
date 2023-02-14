const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.create);
router.post("/usuarios/:id/editar", userController.update);
router.get("/usuarios/destroy/:id", userController.destroy);
router.get("/login", userController.showlogin);
router.post("/login", userController.authenticate);
module.exports = router;
