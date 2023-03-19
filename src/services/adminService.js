const sequelize = require("../lib/sequelize");
const bcrypt = require("bcrypt");

class AdminService {
  async create(data) {
    try {
      const newAdmin = { ...data };
      newAdmin.password = await bcrypt.hash(data.password, 10);
      const admin = await sequelize.models.Admin.create(newAdmin);

      return admin;
    } catch (error) {
      console.log(error);
    }
  }
  async findForEmail(email) {
    const admin = await sequelize.models.Admin.findOne({
      where: { email: email },
      attributes: ["id", "name", "email", "password"],
    });

    return admin.dataValues;
  }

  async delOne(id) {
    await sequelize.models.Admin.destroy({
      where: {
        id: id,
      },
    });

    return { message: "del admin" };
  }
}

module.exports = { AdminService };
