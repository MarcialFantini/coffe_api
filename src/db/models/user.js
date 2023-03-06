const { Model, DataTypes } = require("sequelize");

const tableUser = "users";

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tableUser,
      modelName: "User",
    };
  }
}

const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = { tableUser, User, userSchema };
