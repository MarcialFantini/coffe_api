const { Router } = require("express");
const { createAdmin, delAdmin } = require("../controllers/adminController");
const { autAdminMiddleware } = require("../middleware/autAdminMiddleware");

const routerAdmin = Router();

routerAdmin.post(
  "/new",
  async (req, res, next) => await autAdminMiddleware(req, res, next),
  async (req, res, next) => createAdmin(req, res, next)
);
routerAdmin.delete("/one", autAdminMiddleware, async (req, res, next) =>
  delAdmin(req, res, next)
);

module.exports = { routerAdmin };
