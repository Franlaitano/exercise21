const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", userController.index);
// USADA
router.post("/crear", userController.create);
router.get("/", userController.store);
router.get("/:id", userController.show);
// USADA
router.post("/:id/editar", userController.edit);
router.get("/:id", userController.update);
// USADA
router.get("/destroy/:id", userController.destroy);

module.exports = router;
