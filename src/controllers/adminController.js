const { AdminService } = require("../services/adminService");

const service = new AdminService();

const createAdmin = async (req, res, next) => {
  const { body } = req;

  const newAdmin = await service.create(body);
  res.json(newAdmin);
};

module.exports = { createAdmin };
