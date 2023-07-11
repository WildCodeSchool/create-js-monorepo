const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    super({ table: "note" });
  }

  findAllNotes() {
    return this.database
      .query(`SELECT n.id, n.title, n.content, user_id, firstname, lastname, types_id, tag, color_id, color, category_id, list FROM ${this.table} AS n
    JOIN types ON types.id = n.types_id
    JOIN user ON user.id = n.user_id
    JOIN color ON color.id= n.color_id
    JOIN category ON category.id = n.category_id;`);
  }
}

module.exports = NoteManager;
