const { Router } = require("express");
const {
  productCreate,
  getProductPage,
  getProductOne,
  delProducts,
  getProductsPage,
} = require("../controllers/productController");
const { autAdminMiddleware } = require("../middleware/autAdminMiddleware");

const routerProduct = Router();

routerProduct.post(
  "/new",
  autAdminMiddleware,
  async (req, res, next) => await productCreate(req, res, next)
);

routerProduct.get(
  "/page/:page",

  async (req, res, next) => await getProductsPage(req, res, next)
);

routerProduct.get(
  "/one/:id",

  async (req, res, next) => await getProductOne(req, res, next)
);

routerProduct.delete(
  "/delete/one/:id",
  autAdminMiddleware,
  async (req, res, next) => await delProducts(req, res, next)
);

module.exports = { routerProduct };
