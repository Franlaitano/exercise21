const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/crear", userController.store);
router.post("/:id/editar", userController.update);
router.get("/destroy/:id", userController.destroy);

module.exports = router;
