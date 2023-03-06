const { Router } = require("express");
const {
  productCreate,
  getProductPage,
  getProductOne,
  delProducts,
} = require("../controllers/productController");

const routerProduct = Router();

routerProduct.post(
  "/new",
  async (req, res, next) => await productCreate(req, res, next)
);

routerProduct.get(
  "/page/:id",
  async (req, res, next) => await getProductPage(req, res, next)
);

routerProduct.get(
  "/one/:id",
  async (req, res, next) => await getProductOne(req, res, next)
);

routerProduct.delete(
  "/delete/one/:id",
  async (req, res, next) => await delProducts(req, res, next)
);

module.exports = { routerProduct };
