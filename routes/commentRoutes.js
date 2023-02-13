const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Rutas relacionadas a los comentarios:
// ...
router.post("/crear/:id", commentController.create);
router.post("/:id/editar", commentController.edit);
router.get("/destroy/:id", commentController.destroy);

module.exports = router;
