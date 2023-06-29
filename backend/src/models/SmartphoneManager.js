const AbstractManager = require("./AbstractManager");

// CREATE TABLE IF NOT EXISTS `smartphone` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `brand` VARCHAR(255) NOT NULL,
//   `model` VARCHAR(255) NOT NULL,
//   `system_id` INT NOT NULL,
//   `version_system` VARCHAR(255) NOT NULL,
//   `ram` VARCHAR(10),
//   `memory` VARCHAR(10),
//   `screen_size` VARCHAR(20) NOT NULL,
//   `network` VARCHAR(10) NOT NULL,
//   PRIMARY KEY (`id`),
//   CONSTRAINT `fk_smartphone_system` FOREIGN KEY (`system_id`) REFERENCES `system`(`id`)
// );

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
    for (const smartphone of smartphonesArray) {
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
      );
    }
  }
}

module.exports = SmartphoneManager;
