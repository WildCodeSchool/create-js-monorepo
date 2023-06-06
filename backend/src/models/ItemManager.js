const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  create(item, callback) {
    // when using database.run, you must use an old-school function () { ... }
    // rather than an arrow function for the callback, otherwise this.lastID
    // will be undefined.

    function handleInsert(err) {
      callback(err, this.lastID);
    }

    this.database.run(
      `insert into ${this.table} (title) values (?)`,
      [item.title],
      handleInsert
    );
  }

  read(id, callback) {
    this.database.get(
      `select * from ${this.table} where id = ?`,
      [id],
      callback
    );
  }

  readAll(callback) {
    this.database.all(`select * from ${this.table}`, callback);
  }

  update(item, callback) {
    // when using database.run, you must use an old-school function () { ... }
    // rather than an arrow function for the callback, otherwise this.changes
    // will be undefined.

    function handleUpdate(err) {
      callback(err, this.changes);
    }

    this.database.run(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id],
      handleUpdate
    );
  }

  delete(id, callback) {
    // when using database.run, you must use an old-school function () { ... }
    // rather than an arrow function for the callback, otherwise this.changes
    // will be undefined.

    function handleDelete(err) {
      callback(err, this.changes);
    }

    this.database.run(
      `delete from ${this.table} where id = ?`,
      [id],
      handleDelete
    );
  }
}

module.exports = ItemManager;
