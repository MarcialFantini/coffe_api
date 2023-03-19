const jwt = require("jsonwebtoken");

const autAdminMiddleware = async (req, res, next) => {
  const authorization = req.headers.Authorization;
  const role = req.headers.role;

  if (!authorization || role !== "admin") {
    return next();
  }

  try {
    const [bearer, token] = authorization.split(" ");

    const admin = await jwt.verify(token, process.env.CLAVE);
    req.Role = admin.role;
  } catch (error) {
    console.log("error");
  }

  next();
};

module.exports = { autAdminMiddleware };
