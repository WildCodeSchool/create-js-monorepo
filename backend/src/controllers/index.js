const fs = require("fs");
const path = require("path");

const controllers = fs
  .readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .reduce((controllerList, file) => {
    const camelize = (string) =>
      string.slice(0, 1).toLowerCase() + string.slice(1);

    const key = camelize(file.slice(0, -"Controller.js".length));

    // eslint-disable-next-line global-require, import/no-dynamic-require
    const Controller = require(path.join(__dirname, file));

    return { ...controllerList, [key]: new Controller() };
  }, {});

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);
    throw new ReferenceError(
      `controllers.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Controller.js?`
    );
  },
};

module.exports = new Proxy(controllers, handler);
