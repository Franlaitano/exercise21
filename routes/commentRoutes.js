const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Rutas relacionadas a los comentarios:

router.post("/crear/:id", commentController.store);
router.post("/:id/editar", commentController.update);
router.get("/destroy/:id", commentController.destroy);

module.exports = router;
