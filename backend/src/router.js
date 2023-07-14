const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// that's where you should declare your routes
/* ************************************************************************* */

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
