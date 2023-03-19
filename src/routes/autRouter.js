const { Router } = require("express");
const { userService } = require("../services/userService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AdminService } = require("../services/adminService");

const authRouter = Router();

const service = new userService();

const serviceAdmin = new AdminService();

authRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await service.getUserForEmail(email);

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        { id: user.id, email: user.email, role: "user" },
        process.env.CLAVE,
        { expiresIn: "8h" }
      );
      res.json({ token });
    } else {
      res.status(401).json({ error: "password or email invalid" });
    }
  } catch (error) {
    console.log(error);
  }
});

authRouter.post("/login/admin", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await serviceAdmin.findForEmail(email);

    console.log(bcrypt.compareSync(password, admin.password));

    const isGodToken = await bcrypt.compareSync(password, admin.password);

    if (admin && isGodToken) {
      const token = jwt.sign(
        {
          id: admin.id,
          email: admin.email,
          role: "admin",
        },
        process.env.CLAVE,
        {
          expiresIn: "1h",
        }
      );

      res.json({ token });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = { authRouter };
