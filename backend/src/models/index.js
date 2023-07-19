// fichier pour créer un pool de connexions à une base de données MySQL et pour déclarer et remplir des modèles (managers) qui interagissent avec la bdd.

// charge les variables d'environnement à partir de .env
require("dotenv").config();

// import du module mysql2 pour permettre connexion et interaction avec la bdd MySQL
const mysql = require("mysql2/promise");

// create a connection pool to the database
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection to the database
pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers, stocke les modèles qui interagissent avec la bdd

const models = {};

const UserManager = require("./UserManager");
// créer une instance du gestionnaire d'utilisateur UserManager et l'assigne à la propriété 'user' de l'objet 'models'
models.user = new UserManager();
// appelle la méthode setDatabase du gestionnaire d'utilisaturs pour lui fournir le pool de connexion à la bdd
models.user.setDatabase(pool);

const NoteManager = require("./NoteManager");

models.note = new NoteManager();
models.note.setDatabase(pool);

const CategoriesManager = require("./CategoriesManager");

models.categories = new CategoriesManager();
models.categories.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

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
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
