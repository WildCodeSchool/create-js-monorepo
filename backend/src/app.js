// import some node modules for later
const express = require("express");
const fs = require("node:fs");
const path = require("node:path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./router");

// create express app

const app = express();

// configure le middleware cors pour permettre les requête provenant de l'url spécifié dans le .env frontend_url ou si cette variable n'est pas définie à partir de localhost 3000
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    // permet l'utilisation de cookies
    credentials: true,
  })
);

app.use(cookieParser());

// configure le middleware pour parser les données JSON dans les requêtes
app.use(express.json());

// import and mount the API routes

app.use(router);

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export

module.exports = app;
