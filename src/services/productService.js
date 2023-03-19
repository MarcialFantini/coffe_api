const { models } = require("../lib/sequelize");

class ProductService {
  async createProduct(data) {
    const product = await models.Product.create(data);
    return "created";
  }

  async getPage(pageNumber) {
    const page = await models.Product.findAll({
      attributes: ["name", "price", "stock", "description", "url_img",'id'],
      limit: 20,
      offset: pageNumber * 20,
    });
    return page;
  }

  async getProductOne(id) {
    const product = await models.Product.findOne({
      where: { id: id },
      attributes: ["id", "price", "name", "stock", "description", "url_img"],
    });

    if (product === null) {
      return { message: "not found" };
    }
    return product;
  }

  async delProductOne(id) {
    const message = await models.Product.destroy({
      where: {
        id: id,
      },
    });

    if (message === 0) {
      return { message: "no found" };
    }

    return { message: "del" };
  }
}

module.exports = { ProductService };
