const { Model, DataTypes } = require("sequelize");

const tableAdmin = "admin";

class Admin extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tableAdmin,
      modelName: "Admin",
    };
  }
}

const schemaAdmin = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = { tableAdmin, Admin, schemaAdmin };
