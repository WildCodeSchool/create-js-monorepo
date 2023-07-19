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
}

module.exports = CompetenceManager;
