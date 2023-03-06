const sequelize = require("../lib/sequelize");

class AdminService {
  async create(data) {
    const newAdmin = await sequelize.models.Admin.create(data);

    return newAdmin;
  }
}

module.exports = { AdminService };
