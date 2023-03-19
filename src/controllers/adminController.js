const { AdminService } = require("../services/adminService");

const service = new AdminService();

const createAdmin = async (req, res, next) => {
  const { body } = req;

  const newAdmin = await service.create(body);
  res.json({ created: true });
};

const delAdmin = async (req, res, next) => {
  try {
    const id = req.params.id;

    const message = await service.delOne(id);

    res.json(message);
  } catch (error) {}
};

module.exports = { createAdmin, delAdmin };
