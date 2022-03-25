const fs = require("fs");
const path = require("path");

const controllers = fs
  .readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .reduce((controllerList, file) => {
    const key = file.slice(0, -".js".length);

    // eslint-disable-next-line global-require, import/no-dynamic-require
    const Controller = require(path.join(__dirname, file));

    return { ...controllerList, [key]: Controller };
  }, {});

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    throw new ReferenceError(
      `controllers.${prop} is not defined. Did you create ${prop}.js?`
    );
  },
};

module.exports = new Proxy(controllers, handler);
