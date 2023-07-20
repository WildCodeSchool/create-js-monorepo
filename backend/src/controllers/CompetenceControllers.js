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
const deleteSoftSkill = (req, res) => {
  const { id } = req.params;

  models.competence
    .deleteSoftSkill(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Soft Skill not found" });
      } else {
        res.status(200).json({ message: "Soft Skill deleted successfully" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to delete Soft Skill" });
    });
};

const deleteHardSkill = (req, res) => {
  const { id } = req.params;

  models.competence
    .deleteHardSkill(id)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Hard Skill not found" });
      } else {
        res.status(200).json({ message: "Hard Skill deleted successfully" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to delete Hard Skill" });
    });
};
module.exports = {
  getAllSoftSkills,
  getAllHardSkills,
  addHardSkill,
  addSoftSkill,
  deleteHardSkill,
  deleteSoftSkill,
};
