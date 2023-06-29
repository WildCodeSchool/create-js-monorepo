const models = require("../models");

const browse = (req, res) => {
  models.smartphone
    .findAll()
    .then(([rows]) => {
      res.send(rows).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readSystemId = (req, res) => {
  const filters = {
    system_id: req.query.system_id,
    brand: req.query.brand,
  };
  models.smartphone
    .findSystemId(filters)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addSmartphonesFromCSV = (req, res) => {
  models.smartphone
    .addSmartphones(req.body)
    .then((rows) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  readSystemId,
  addSmartphonesFromCSV,
};
