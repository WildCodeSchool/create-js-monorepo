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
  })
);

// import and mount the API routes

const router = require("./router");

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
} else {
  // serve HTML listing all the application routes as fallback

  app.get("/", (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Hello Wilder !</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="/assets/css/style.css">
          <link rel="icon" href="/assets/images/favicon.png">
        </head>
        <body>
          <h1>Hello Wilder !</h1>
          <p>Here are all your application routes:</p>
          <table>
            ${router.stack
              .map(
                ({ route }) => `
                  <tr>
                    <td style="font-weight: bold; padding-right: 4rem">
                      ${Object.keys(route.methods)
                        .map((method) => method.toUpperCase())
                        .join(", ")}
                    </td>
                    <td>
                      ${route.path}
                    </td>
                  </tr>
                `
              )
              .join("")}
          </table>
        </body>
      </html>
    `);
  });
}

// ready to export

module.exports = app;
