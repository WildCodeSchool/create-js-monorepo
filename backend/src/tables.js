const tables = {};

/* ************************************************************************* */
// that's where you should register your managers
/* ************************************************************************* */

const ItemManager = require("./models/ItemManager");

tables.item = new ItemManager();

/* ************************************************************************* */

// use a Proxy to customize error messages when asking for a non existing table

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];

    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
