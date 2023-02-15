const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/crear", articleController.create);
router.post("/crear", articleController.store);
router.post("/:id/editar", articleController.update);
router.get("/destroy/:id", articleController.destroy);

module.exports = router;
