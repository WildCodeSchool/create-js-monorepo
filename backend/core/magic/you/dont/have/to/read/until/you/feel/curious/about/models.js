const fs = require("fs");
const path = require("path");

const pathToManagers = "../../../../../../../../../../../../src/models";

const models = fs
  .readdirSync(path.join(__dirname, pathToManagers))
  .filter((file) => file !== "AbstractManager.js" && file !== "index.js")
  .reduce((acc, file) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const Manager = require(path.join(__dirname, pathToManagers, file));

    const managerInstance = new Manager();

    return { ...acc, [managerInstance.table]: managerInstance };
  }, {});

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
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
