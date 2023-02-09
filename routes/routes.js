const express = require("express");
const router = express.Router();
const controller = require("../controllers/pageController");

router.get("/", controller.showHome);
router.get("/articulo/:id", controller.showProduct);
router.get("/admin");
router.get("/admin/crear", controller.createArticleForm);
router.get("/admin/editar/:id");
router.get("/admin/eliminar/:id");

module.exports = router;
