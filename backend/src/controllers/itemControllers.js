const tables = require("../tables");

const browse = (req, res, next) => {
  tables.item.readAll((err, rows) => {
    if (err) {
      next(err);
    } else {
      res.send(rows);
    }
  });
};

const read = (req, res, next) => {
  tables.item.read(req.params.id, (err, row) => {
    if (err) {
      next(err);
    } else if (row == null) {
      res.sendStatus(404);
    } else {
      res.send(row);
    }
  });
};

const edit = (req, res, next) => {
  const item = req.body;

  item.id = parseInt(req.params.id, 10);

  tables.item.update(item, (err, changes) => {
    if (err) {
      next(err);
    } else if (changes === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
};

const add = (req, res, next) => {
  const item = req.body;

  tables.item.create(item, (err, insertID) => {
    if (err) {
      next(err);
    } else {
      res.location(`/items/${insertID}`).sendStatus(201);
    }
  });
};

const destroy = (req, res, next) => {
  tables.item.delete(req.params.id, (err, changes) => {
    if (err) {
      next(err);
    } else if (changes === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
