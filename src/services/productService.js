const { Op } = require("sequelize");
const { models } = require("../lib/sequelize");
const { ImagesModel } = require("../db/models/images");

class ProductService {
  async createProduct(data) {
    const product = await models.Product.create(data);
    return "created";
  }

  async getPage(pageNumber) {
    const page = await models.Product.findAll({
      attributes: ["name", "price", "stock", "description", "id"],
      include: { model: ImagesModel, attributes: ["id"] },
      limit: 20,
      offset: pageNumber * 20,
    });
    return page;
  }

  async getProductOne(id) {
    const product = await models.Product.findOne({
      where: { id: id },
      include: { model: ImagesModel, attributes: ["id"] },
      attributes: ["id", "price", "name", "stock", "description"],
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

  async productPageClient(page) {
    const pageProducts = await models.Product.findAll({
      attributes: ["id", "name", "price", "stock", "description", "url_img"],
      where: {
        stock: {
          [Op.gt]: 0,
        },
      },
      offset: 20 * page,
      limit: 20,
    });

    return pageProducts;
  }
}

module.exports = { ProductService };
