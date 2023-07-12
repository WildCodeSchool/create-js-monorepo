const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    super({ table: "note" });
  }

  // findAllNotes() {
  //   return this.database
  //     .query(`SELECT n.id, n.title, n.content, types_id, tag, color_id, color, category_id, list FROM ${this.table} AS n
  //   JOIN types ON types.id = n.types_id
  //   JOIN color ON color.id= n.color_id
  //   JOIN category ON category.id = n.category_id;`);
  // }

  findAllNotes() {
    return this.database.query(`SELECT * FROM ${this.table} ;`);
  }

  insert(note) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, content, user_id, color_id, types_id, category_id) VALUES (?,?,?,?,?,?)`,
      [
        note.title,
        note.content,
        note.user_id,
        note.color_id,
        note.types_id,
        note.category_id,
      ]
    );
  }
}

module.exports = NoteManager;
