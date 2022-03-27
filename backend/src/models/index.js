const fs = require("fs");
const mysql = require("mysql2/promise");
const path = require("path");

let mysqlConnectionFailed = true;
const mysqlConnectionFailedMessage =
  "Failed to connect with DB. If you need DB support, be sure to create .env from .env.sample file with valid DB parameters.";

const load = (models) => {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  mysql
    .createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    })
    .then((connection) => {
      mysqlConnectionFailed = false;
      fs.readdirSync(__dirname)
        .filter((file) => file !== "AbstractManager.js" && file !== "index.js")
        .forEach((file) => {
          // eslint-disable-next-line global-require, import/no-dynamic-require
          const Manager = require(path.join(__dirname, file));

          // eslint-disable-next-line no-param-reassign
          models[Manager.table] = new Manager(connection, Manager.table);
        });
    })
    .catch(() => {
      console.error("Warning:", mysqlConnectionFailedMessage);
    });
};

const models = {};

load(models);

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    if (mysqlConnectionFailed) {
      throw new Error(mysqlConnectionFailedMessage);
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
