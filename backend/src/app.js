// import some node modules for later

const fs = require("node:fs");
const path = require("node:path");

// create express app

const express = require("express");

const app = express();

// use some application-level middlewares

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    exposedHeaders: "Location", // expose header Location for POST requests
  })
);

// import and mount the API routes

const router = require("./router");

app.use(router);

// handle errors

app.use((err, req, res) => {
  console.error(err);
  res.sendStatus(500);
});

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));

// serve react app

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve react resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export

module.exports = app;
