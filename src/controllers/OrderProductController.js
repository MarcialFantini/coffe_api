const { OrderProduct } = require("../services/OrderProductService");

const services = new OrderProduct();

const createOrderProductController = async (req, res, next) => {
  try {
    await services.createOrderProduct(req.body);
    res.json({ message: "completed" });
  } catch (error) {
    console.log(error);
  }
};

const getOrdersProducts = async (req, res, next) => {
  try {
    const data = await services.getAllOrders();
    res.json(data);
  } catch (error) {}
};

module.exports = { createOrderProductController, getOrdersProducts };
