const { Product } = require("../db/models/product");
const { User } = require("../db/models/user");
const { models } = require("../lib/sequelize");

class OrderProduct {
  async createOrderProduct(data) {
    const newOrderProduct = await models.OrderProduct.create(data);
    return "created";
  }

  async getAllOrders(page) {
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
      limit: 20,
      offset: page * 1,
    });
    return orders;
  }

  async getOneOrder(id) {
    const order = await models.OrderProduct.findOne({
      where: {
        id: id,
      },
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
    return order;
  }

  async delOrder(id) {
    await models.OrderProduct.destroy({
      where: {
        id: id,
      },
    });

    return { message: "dell" };
  }
}

module.exports = { OrderProduct };
