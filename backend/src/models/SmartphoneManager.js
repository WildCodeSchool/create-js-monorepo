const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  findSystemId(filters) {
    const initialSql = `select * from ${this.table}`;
    const where = [];

    if (filters.system_id != null) {
      where.push({
        column: "system_id",
        value: filters.system_id,
        operator: "=",
      });
    }

    if (filters.brand != null) {
      where.push({
        column: "brand",
        value: filters.brand,
        operator: "=",
      });
    }
    const sqlRequest = where.reduce(
      (sql, { column, operator }, index) =>
        `${sql} ${index === 0 ? "WHERE" : "AND"} ${column} ${operator} ?`,
      initialSql
    );
    const sqlValues = where.map(({ value }) => value);
    return this.database.query(sqlRequest, sqlValues);
  }
}

module.exports = SmartphoneManager;
