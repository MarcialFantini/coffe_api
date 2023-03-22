const { models } = require("../lib/sequelize");

class serviceImagen {
  async saveImage(file, name, product_id) {
    const newImg = await models.Images.create({
      name: name,
      id_product: product_id,
      path: file.path,
    });
    return newImg;
  }

  async getImage(id_img) {
    const imageGet = await models.Images.findOne({
      where: {
        id: id_img,
      },
      attributes: ["path"],
    });
    return imageGet.path;
  }
}

module.exports = { serviceImagen };
