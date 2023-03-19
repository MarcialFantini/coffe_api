const { Router } = require("express");
const {
  createOrderProductController,
  getOrdersProducts,
} = require("../controllers/OrderProductController");

const routerOrderProduct = Router();

routerOrderProduct.post(
  "/new",
  async (req, res, next) => await createOrderProductController(req, res, next)
);
routerOrderProduct.get(
  "/",
  async (req, res, next) => await getOrdersProducts(req, res, next)
);

routerOrderProduct.get("/:id", async (req, res, next) => await console.log(""));

module.exports = { routerOrderProduct };
