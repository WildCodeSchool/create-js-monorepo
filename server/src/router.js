const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const items = require("./routers/items");

router.use("/items", items);

/* ************************************************************************* */

module.exports = router;
