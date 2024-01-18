/* eslint-disable camelcase */
const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");

const { hashPwd } = require("./services/hashPwd");

// Authentification routes
router.post("/login", authControllers.login);

const user_productControllers = require("./controllers/user_productControllers");

router.get("/user_products", user_productControllers.browse);
router.get("/user_products/:id", user_productControllers.read);
// router.post("/user_products", validateUser_product, user_productControllers.add);
// router.put(
//   "/user_products/:id",
//   validateUser_product,
//   user_productControllers.edit
// );
// router.delete("/user_products/:id", user_productControllers.destroy);

const productControllers = require("./controllers/productControllers");
// const validateProduct = require("./validators/validateProduct");

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
// router.post("/products", validateProduct, productControllers.add);
// router.put("/products/:id", validateProduct, productControllers.edit);
// router.delete("/products/:id", productControllers.destroy);

const userControllers = require("./controllers/userControllers");
const validateUser = require("./validators/validateUser");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
// router.post("/users", validateUser, userControllers.add);
router.put("/users/:id", validateUser, userControllers.edit);
router.post("/users", hashPwd, userControllers.add);
// router.delete("/users/:id", userControllers.destroy);

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
