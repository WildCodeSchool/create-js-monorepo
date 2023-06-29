const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const smartphoneControllers = require("./controllers/smartphoneControllers");

router.get("/smartphone", smartphoneControllers.readSystemId);
router.post("/smartphone", smartphoneControllers.addSmartphonesFromCSV);

module.exports = router;
