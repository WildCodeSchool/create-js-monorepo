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

  addSmartphones(smartphonesArray) {
    const insertPromises = smartphonesArray.map((smartphone) =>
      this.database.query(
        `INSERT INTO smartphone (brand, model, system_id, version_system, ram, memory, screen_size, network) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          smartphone.brand,
          smartphone.model,
          smartphone.system_id,
          smartphone.version_system,
          smartphone.ram,
          smartphone.memory,
          smartphone.screen_size,
          smartphone.network,
        ]
      )
    );

    return Promise.all(insertPromises);
  }
}

module.exports = SmartphoneManager;
