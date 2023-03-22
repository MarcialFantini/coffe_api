const { Router } = require("express");
const {
  createOrderProductController,
  getOrdersProducts,
} = require("../controllers/OrderProductController");
const { autUserMiddleware } = require("../middleware/autUserMiddleware");

const routerOrderProduct = Router();

routerOrderProduct.post(
  "/new",
  autUserMiddleware,
  async (req, res, next) => await createOrderProductController(req, res, next)
);
routerOrderProduct.get(
  "/",
  autUserMiddleware,
  async (req, res, next) => await getOrdersProducts(req, res, next)
);

routerOrderProduct.get(
  "/:id",
  autUserMiddleware,
  async (req, res, next) => await console.log("")
);

module.exports = { routerOrderProduct };
