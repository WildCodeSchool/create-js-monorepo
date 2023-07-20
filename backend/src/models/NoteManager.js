const AbstractManager = require("./AbstractManager");

class NoteManager extends AbstractManager {
  constructor() {
    super({ table: "note" });
  }

  findAllNotesByUserId(userId) {
    return this.database.query(
      `SELECT n.id, n.title, n.content, n.user_id, firstname, lastname, types_id, tag, color_id, color, categories_id, categories.list FROM ${this.table} AS n
    LEFT JOIN types ON types.id = n.types_id
    LEFT JOIN user ON user.id = n.user_id
    LEFT JOIN color ON color.id= n.color_id
    LEFT JOIN categories ON categories.id = n.categories_id WHERE n.user_id = ? ORDER BY n.id DESC;`,
      [userId]
    );
  }

  findNotesByCategories(id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE categories_id = ?`,
      [id]
    );
  }

  insert(note) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, content, user_id, color_id, types_id, categories_id) VALUES (?,?,?,?,?,?)`,
      [
        note.title,
        note.content,
        note.user_id,
        note.color_id,
        note.types_id,
        note.categories_id,
      ]
    );
  }

  update(note) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ?, user_id = ?, color_id = ?, types_id = ?, categories_id = ? where id = ?`,
      [
        note.title,
        note.content,
        note.user_id,
        note.color_id,
        note.types_id,
        note.categories_id,
        note.id,
      ]
    );
  }
}

module.exports = NoteManager;
