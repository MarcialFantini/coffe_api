const { Admin, schemaAdmin } = require("./models/admin");
const { Order, orderSchema } = require("./models/order");
const { Product, productSchema } = require("./models/product");
const { User, userSchema } = require("./models/user");
const { ImagesModel, ImagesModelSchema } = require("./models/images");

async function setUpModels(sequelize) {
  // models init and sync of the tables

  Admin.init(schemaAdmin, Admin.config(sequelize));
  Order.init(orderSchema, Order.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
  User.init(userSchema, User.config(sequelize));

  ImagesModel.init(ImagesModelSchema, ImagesModel.config(sequelize));

  //relations:

  Product.hasMany(Order, {
    foreignKey: "id_product",
  });
  Order.belongsTo(Product, {
    foreignKey: "id_product",
  });

  User.hasMany(Order, {
    foreignKey: "id_user",
  });
  Order.belongsTo(User, {
    foreignKey: "id_user",
  });

  Product.hasMany(ImagesModel, {
    foreignKey: "id_product",
  });
  ImagesModel.belongsTo(Product, {
    foreignKey: "id_product",
  });
}

module.exports = { setUpModels };
