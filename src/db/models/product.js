const { Model, DataTypes } = require("sequelize");

const tableProduct = "products";

class Product extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableProduct: tableProduct,
      modelName: "Product",
    };
  }
}

const productSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 23,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url_img: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

module.exports = { productSchema, Product, tableProduct };
