const models = require("../models");

const getAllSoftSkills = (req, res) => {
  models.competence

    .findAllSoftSkills()
    .then(([row]) => res.send(row))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAllHardSkills = (req, res) => {
  models.competence

    .findAllHardSkills()
    .then(([row]) => res.send(row))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const addHardSkill = (req, res) => {
  const { content } = req.body;
  models.competence
    .addHardSkill(content)
    .then((newSkill) => res.json(newSkill))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addSoftSkill = (req, res) => {
  const { content } = req.body;
  models.competence
    .addSoftSkill(content)
    .then((newSkill) => res.json(newSkill))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllSoftSkills,
  getAllHardSkills,
  addHardSkill,
  addSoftSkill,
};
