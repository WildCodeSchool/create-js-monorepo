const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories " });
  }

  findAllCategories() {
    return this.database.query(`SELECT * FROM ${this.table} ;`);
  }
}

module.exports = CategoriesManager;
