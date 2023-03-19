const { models } = require("../lib/sequelize");

const bcrypt = require("bcrypt");

class userService {
  async createUser(data) {
    const newUser = { ...data };
    newUser.password = await bcrypt.hash(data.password, 10);
    await models.User.create(newUser);
    console.log(newUser);
  }
  async delOneUser(id) {
    const isDestroy = await models.User.destroy({
      where: { id: id },
    });

    if (!isDestroy) {
      return { message: "not found" };
    }
    return { message: "destroy user" };
  }

  async findOneUser(id) {
    const user = await models.User.findOne({
      attributes: ["name", "id", "email"],
      where: { id: id },
    });
    if (!user) {
      return { message: "not found" };
    }
    return { user: user, message: "found" };
  }

  async findPageUsers(page) {
    const users = await models.User.findAll({
      attributes: ["id", "name", "email"],
      offset: 20 * page,
      limit: 20,
    });
    let result = { message: "found", data: users };
    if (!users) {
      result.message = "not found";
    }

    return result;
  }

  async getUserForEmail(email) {
    const user = await models.User.findOne({
      attributes: ["email", "password", "id"],
      where: {
        email: email,
      },
    });

    return user;
  }
}

module.exports = { userService };
