const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  constructor() {
    super({ table: "projet" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = ProjetManager;
