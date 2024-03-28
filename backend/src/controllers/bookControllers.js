const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const books = await tables.book.readAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await tables.book.read(id);
    res.json(book);
  } catch (err) {
    next(err);
  }
};

// correspond à edit pour modifier la fiche d'un livre
const update = async (req, res, next) => {
  const bookInfos = {
    title: req.body.title,
    author: req.body.author,
    parutionYear: req.body.parutionYear,
    summary: req.body.summary,
    id: req.params.id,
  };
  try {
    const result = await tables.book.update(bookInfos);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "livre introuvable" });
    } else {
      res.status(200).json({
        msg: "fiche du livre modifié avec succès",
      });
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const bookInfos = {
    title: req.body.title,
    author: req.body.author,
    parutionYear: req.body.parutionYear,
    summary: req.body.summary,
  };
  try {
    const result = await tables.book.create(bookInfos);
    console.info(result);
    res.status(200).json({
      msg: "livre ajouté avec succès",
      status: result,
    });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await tables.book.destroy(req.params.id);
    if (result.affectedRows === 0) {
      res.status(404).json({ msg: "livre introuvable" });
    } else {
      res.status(200).json({
        msg: "fiche du livre supprimée avec succès",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  update,
  add,
  destroy,
};
