const express = require("express");

const { item } = require("./controllers");

const router = express.Router();

router.get("/items", item.browse);
router.get("/items/:id", item.read);
router.put("/items/:id", item.edit);
router.post("/items", item.add);
router.delete("/items/:id", item.delete);

module.exports = router;
