const models = require("../models");

const browse = (req, res) => {
  models.Phone.findAll()
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.Phone.find(id)
    .then(([rows]) => {
      if (rows[0]) {
        res.send(rows[0]);
      } else {
        res.status(404).send("Phone not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const select = (req, res) => {
  const { brand } = req.params;

  models.Phone.findByBrand(brand)
    .then(([rows]) => {
      if (rows[0]) {
        res.send(rows[0]);
      } else {
        res.status(404).send("Phone not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const edit = (req, res) => {
  const Phone = req.body;

  Phone.id = parseInt(req.params.id, 10);

  models.Phone.update(Phone)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Phone not found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const newphone = req.body;

  models.user
    .insert(newphone)
    .then(([result]) => {
      res.location(`/phones/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.Phone.delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  select,
};
