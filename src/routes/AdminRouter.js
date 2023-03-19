const { Router } = require("express");
const { createAdmin, delAdmin } = require("../controllers/adminController");

const routerAdmin = Router();

routerAdmin.post("/new", async (req, res, next) => createAdmin(req, res, next));
routerAdmin.delete("/one", async (req, res, next) => delAdmin(req, res, next));

module.exports = { routerAdmin };
