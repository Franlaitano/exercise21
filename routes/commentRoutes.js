const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Rutas relacionadas a los comentarios:
// ...
router.post("/crear/:id", commentController.create);

module.exports = router;
