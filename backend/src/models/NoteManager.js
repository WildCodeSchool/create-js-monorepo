const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    super({ table: "note" });
  }

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

  update(note) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ?, user_id = ?, color_id = ?, types_id = ?, category_id = ? where id = ?`,
      [
        note.title,
        note.content,
        note.user_id,
        note.color_id,
        note.types_id,
        note.category_id,
        note.id,
      ]
    );
  }
}

module.exports = NoteManager;
