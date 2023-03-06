const { Model, DataTypes } = require("sequelize");

const tableOrderProduct = "order_product";

class Order extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tableOrderProduct,
      modelName: "OrderProduct",
    };
  }
}

const orderSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_product: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = { Order, tableOrderProduct, orderSchema };
