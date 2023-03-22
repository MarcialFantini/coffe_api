const { Model } = require("sequelize");
const { DataTypes } = require("sequelize");

const tableName = "images";

class ImagesModel extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: tableName,
      modelName: "Images",
    };
  }
}

const ImagesModelSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  id_product: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  path: { type: DataTypes.STRING, allowNull: false },
};

module.exports = { ImagesModel, ImagesModelSchema };
