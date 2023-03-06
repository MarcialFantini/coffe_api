const { userService } = require("../services/userService");

const service = new userService();

const userController = async (req, res, next) => {
  try {
    const { body } = req;

    await service.createUser(body);
    res.json("created");
  } catch (error) {
    console.log(error);
  }
};

const userDestroyController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const message = await service.delOneUser(id);
    console.log(message);
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

const userFindOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await service.findOneUser(id);

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const userFindPage = async (req, res, next) => {
  try {
    const { page } = req.params;

    const data = await service.findPageUsers(page);

    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userController,
  userDestroyController,
  userFindOne,
  userFindPage,
};
