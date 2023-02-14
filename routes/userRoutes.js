const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// USADA
router.post("/crear", userController.create);
router.get("/", userController.store);
// USADA
router.post("/:id/editar", userController.edit);
router.get("/:id", userController.update);
// USADA
router.get("/destroy/:id", userController.destroy);

module.exports = router;
