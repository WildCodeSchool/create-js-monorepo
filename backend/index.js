require("dotenv").config();

const app = require("./src/app");

const port = process.env.APP_PORT;

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.info(`Server is listening on port ${port}`);
  }
});
