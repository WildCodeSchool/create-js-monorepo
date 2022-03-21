const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "item";

  insert(item) {
    return this.connection.query(
      `insert into ${ItemManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ItemManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ItemManager;
