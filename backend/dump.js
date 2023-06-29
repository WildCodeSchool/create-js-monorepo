require("dotenv").config();
const mysql = require("mysql2/promise");
const fs = require("fs").promises;

const dump = async () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const db = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    multipleStatements: true,
  });

  const [tables] = await db.query("show tables");

  const tableDumps = tables.map(async (table) => {
    const [[result]] = await db.query(
      `show create table ${table[`Tables_in_${db.config.database}`]}`
    );

    return result["Create Table"];
  });

  const statements = await Promise.all(tableDumps);

  await fs.writeFile("database.sql", statements.join("\n\n"));

  db.end();
};

try {
  dump();
} catch (e) {
  console.error(e);
}
