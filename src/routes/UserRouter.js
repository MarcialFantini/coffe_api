const { Router } = require("express");
const {
  userController,
  userDestroyController,
  userFindOne,
  userFindPage,
} = require("../controllers/userController");

const userRouter = Router();

userRouter.post("/new", async (req, res, next) =>
  userController(req, res, next)
);

userRouter.delete("/dell/one/:id", async (req, res, next) =>
  userDestroyController(req, res, next)
);

userRouter.get(
  "/get/one/:id",
  async (req, res, next) => await userFindOne(req, res, next)
);

userRouter.get(
  "/get/page/:page",
  async (req, res, next) => await userFindPage(req, res, next)
);

module.exports = { userRouter };
