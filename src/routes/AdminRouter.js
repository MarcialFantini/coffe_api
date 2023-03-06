const { Router } = require("express");
const { createAdmin } = require("../controllers/adminController");

const routerAdmin = Router();

routerAdmin.post("/", async (req, res, next) => createAdmin(req, res, next));

module.exports = { routerAdmin };
