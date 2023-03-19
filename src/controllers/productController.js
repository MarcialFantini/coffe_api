const { ProductService } = require("../services/productService");

const roles = ["user", "admin"];

const service = new ProductService();

const productCreate = async (req, res, next) => {
  try {
    const { body } = req;
    await service.createProduct(body);
    res.json({message:"created"});
  } catch (error) {
    console.log(error);
  }
};

const getProductPage = async (req, res, next) => {
  try {
    console.log(req.Role);

    const page = await service.getPage(req.params.id);
    res.json(page);
  } catch (error) {
    console.log(error);
  }
};

const getProductOne = async (req, res, next) => {
  try {
    const productGet = await service.getProductOne(req.params.id);

    res.json(productGet);
  } catch (error) {}
};

const delProducts = async (req, res, next) => {
  try {
    const responseService = await service.delProductOne(req.params.id);
    res.json(responseService);
  } catch (error) {}
};

module.exports = { productCreate, getProductPage, getProductOne, delProducts };
