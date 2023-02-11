const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
// USED
router.post("/crear", articleController.create);
router.get("/", articleController.store);
router.get("/:id", articleController.show);
// USED
router.post("/:id/editar", articleController.edit);
router.get("/:id", articleController.update);
// USED
router.get("/destroy/:id", articleController.destroy);

module.exports = router;
