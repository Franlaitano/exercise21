const express = require("express");
const router = express.Router();
const privateController = require("../controllers/privateController");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/articulos", privateController.showArticlesPanel);
router.get("/usuarios", privateController.showUsersPanel);
router.get("/comentarios", privateController.showCommentsPanel);
router.get("/editar/articulo/:id", privateController.showArticleEditForm);
router.get("/editar/usuario/:id", privateController.showUserEditForm);
router.get("/editar/comentario/:id", privateController.showCommentEditForm);

module.exports = router;
