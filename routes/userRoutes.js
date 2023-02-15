const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/register", userController.create);
router.post("/register", userController.register);

router.post("/usuarios/:id/editar", userController.update);
router.get("/usuarios/destroy/:id", userController.destroy);

router.get("/login", userController.showlogin);
router.post("/login", userController.login);

router.get("/home/user", userController.homeUser);

module.exports = router;
