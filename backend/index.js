require("dotenv").config();

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "6000", 10);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.info(`Server is listening on ${port}`);
  }
});
