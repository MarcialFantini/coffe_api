const { Product } = require("../db/models/product");
const { User } = require("../db/models/user");
const { models } = require("../lib/sequelize");

class OrderProduct {
  async createOrderProduct(data) {
    const newOrderProduct = await models.OrderProduct.create(data);
    return "created";
  }

  async getAllOrders() {
    const orders = await models.OrderProduct.findAll({
      attributes: ["id"],
      include: [
        {
          model: User,
          attributes: ["name", "email"],
        },
        {
          model: Product,
          attributes: ["name", "price"],
        },
      ],
    });
    return orders;
  }

  async getOneOrder(id) {
    const order = await models.OrderProduct.findOne({
      attributes: ["id", "amount"],
      include: [
        {
          model: User,
          attributes: ["name", "email"],
        },
        {
          model: Product,
          attributes: ["name", "price"],
        },
      ],
    });
  }
}

module.exports = { OrderProduct };
