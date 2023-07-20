const AbstractManager = require("./AbstractManager");

class CompetenceManager extends AbstractManager {
  constructor() {
    super({ table: "competence" });
  }

  findAllSoftSkills() {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE type = 'softskills'`
    );
  }

  findAllHardSkills() {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE type = 'hardskills'`
    );
  }

  addHardSkill(content) {
    return this.database
      .query(
        "INSERT INTO competence (content, type) VALUES (?, 'hardskills')",
        [content]
      )
      .then((result) => {
        const newSkillId = result.insertId;
        const newSkill = {
          Id: newSkillId,
          content,
          type: "hardskills",
        };
        return newSkill;
      })
      .catch((error) => {
        throw error;
      });
  }

  addSoftSkill(content) {
    return this.database
      .query(
        "INSERT INTO competence (content, type) VALUES (?, 'softskills')",
        [content]
      )
      .then((result) => {
        const newSkillId = result.insertId;
        const newSkill = {
          Id: newSkillId,
          content,
          type: "softskills",
        };
        return newSkill;
      })
      .catch((error) => {
        throw error;
      });
  }

  deleteSoftSkill(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE Id = ? AND type = 'softskills'`,
      [id]
    );
  }

  deleteHardSkill(id) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE Id = ? AND type = 'hardskills'`,
      [id]
    );
  }
}

module.exports = CompetenceManager;
