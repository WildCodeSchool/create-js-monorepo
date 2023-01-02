const mysql = require("mysql2/promise");

// create pool connection using DB values from .env

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// check connection can be established with DB

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Routes using models won't work as intended",
    "Did you create a .env file with valid credentials?"
  );
});

// framework magic: take each Manager class in this directory to fill a models object

const models = require("../../core/magic/you/dont/have/to/read/until/you/feel/curious/about/models");

// for example, if you want to create a manager connected to a table "item" in your DB,
// create a file called ItemManager.js in this directory with this minimal code:
//
// ```
// class ItemManager extends AbstractManager {
//   constructor() {
//     super({ table: "item" });
//   }
// }
//
// module.exports = ItemManager;
// ```
//
// you will then be able to write code like the following in an other file:
//
// ```
// const models = require("/path/to/your/project/backend/src/models");
//
// models.item.findAll() // will send the SQL request "select * from item" to DB
// ```

const AbstractManager = require("./AbstractManager");

for (const table in models) {
  if (models[table] instanceof AbstractManager) {
    // pass the connection pool to each manager instance in models
    models[table].setConnection(pool);
  }
}

// finally

module.exports = models;
