const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories " });
  }

  findAllCategories() {
    return this.database.query(`SELECT * FROM ${this.table} ;`);
  }

  insert(categories) {
    return this.database.query(
      `INSERT INTO ${this.table} (list, user_id) VALUES(?,?)`,
      [categories.list, categories.user_id]
    );
  }
}

module.exports = CategoriesManager;
