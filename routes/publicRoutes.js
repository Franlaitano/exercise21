const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pagesController");

// Rutas relacionadas a la parte pública del sitio web:
// ...

router.get("/", pageController.showHome);
router.get("/crear_articulo", pageController.showArticleForm);
router.get("/articulo/:id", pageController.showOneArticle);
router.get("/crear_usuario", pageController.showUserForm);

module.exports = router;
