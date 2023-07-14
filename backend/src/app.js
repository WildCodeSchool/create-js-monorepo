// create express app

const express = require("express");

const app = express();

// configure it

/* ************************************************************************* */
// when fetching your server, you get a "CORS" error?
/* ************************************************************************* */

// you will love this package ;)
// const cors = require("cors");

// BUT use it wisely

// what you should NOT do: app.use(cors());
// this would solve the problem for you,
// but also for every hacker trying to fetch your server

// what you should do:
// list valid origins from which you want to accept requests
/*
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "https://somedomainyoutrust.com",
    ]
  })
);
*/

/* ************************************************************************* */
// req.body is undefined?
/* ************************************************************************* */

// try to uncomment one or several of the following lines
// to parse the incoming requests and have req.body defined

// parse the incoming requests with JSON payloads
// app.use(express.json());

// parse the incoming requests with URL encoded payloads
// app.use(express.urlencoded());

// parse the incoming requests with text payloads
// app.use(express.text());

// parse the incoming requests with raw payloads
// app.use(express.raw());

/* ************************************************************************* */

// import and mount the API routes

const router = require("./router");

app.use("/api", router);

/* ************************************************************************* */
// doing file upload?
/* ************************************************************************* */

// serve the `backend/public` folder for public static resources
// app.use(express.static(`${__dirname}/../public`));

/* ************************************************************************* */
// ready for production?
/* ************************************************************************* */

// const reactBuildPath = `${__dirname}/../../frontend/dist`;

// serve react resources

// app.use(express.static(reactBuildPath));

// redirect unhandled requests to the react index file

// app.get("*", (req, res) => {
//   res.sendFile(`${reactBuildPath}/index.html`);
// });

/* ************************************************************************* */

module.exports = app;
