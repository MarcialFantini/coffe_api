const express = require("express");

const dotenv = require("dotenv");
const body_parser = require("body-parser");
const { setUpRoutes } = require("./routes/router");

dotenv.config();

const app = express();
const port = process.env.PORT_APP || 4000;

app.use(body_parser.json());
setUpRoutes(app);

app.listen(port, () => {
  console.log(`listen in: http://localhost:${port}/`);
});
