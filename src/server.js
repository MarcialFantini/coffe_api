const express = require("express");

const dotenv = require("dotenv");
const body_parser = require("body-parser");
const { setUpRoutes } = require("./routes/router");
const middlewareSetUp = require("./middleware/setUp");
const cors = require('cors')

dotenv.config();

const app = express();
const port = process.env.PORT_APP || 4000;

app.use(cors())
app.use(body_parser.json());
middlewareSetUp(app);

setUpRoutes(app);

app.listen(port, () => {
  console.log(`listen in: http://localhost:${port}/`);
});
