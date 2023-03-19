const { OrderProduct } = require("../services/OrderProductService");

const services = new OrderProduct();

const createOrderProductController = async (req, res, next) => {
  try {
    console.log(req.body);
    await services.createOrderProduct({
      id_user: req.ID,
      id_product: req.body.id_product,
      amount: req.body.amount,
    });
    res.status(201).json({ status: 201, message: "created order" });
  } catch (error) {
    console.log(error);
  }
};

const getOrdersProducts = async (req, res, next) => {
  try {
    const data = await services.getAllOrders(req.params.page);
    res.json(data);
  } catch (error) {}
};

module.exports = { createOrderProductController, getOrdersProducts };
