const AbstractManager = require("./AbstractManager");

class CompetenceManager extends AbstractManager {
  constructor() {
    super({ table: "competence" });
  }

  findAll(type) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE type = ?`, [
      type,
    ]);
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

  updateSoftSkill(id, content) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ? WHERE Id = ? AND type = 'softskills'`,
      [content, id]
    );
  }

  updateHardSkill(id, content) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ? WHERE Id = ? AND type = 'hardskills'`,
      [content, id]
    );
  }
}

module.exports = CompetenceManager;
