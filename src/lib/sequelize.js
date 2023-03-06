const { config } = require("dotenv");
const { Sequelize } = require("sequelize");
const { setUpModels } = require("../db/setUpModels");

config();

const sequelize = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASS_DB,
  {
    dialect: "postgres",
    host: process.env.HOST_DB,
  }
);

setUpModels(sequelize);

sequelize.sync({ alter: true });

module.exports = sequelize;
