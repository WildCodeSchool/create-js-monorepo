const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    super({ table: "note" });
  }

  findAllNotes() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = NoteManager;
