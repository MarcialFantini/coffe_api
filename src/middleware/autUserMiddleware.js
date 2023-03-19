const jwt = require("jsonwebtoken");

const autUserMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const role = req.headers.role;

  if (!authHeader || role !== "user") {
    console.log("siguiente");
    return next();
  }

  try {
    const [bearer, token] = authHeader.split(" ");

    const user = await jwt.verify(token, process.env.CLAVE);
    req.Role = user.role;
    req.ID = user.id;
  } catch (err) {
    console.log("no valid");
  }
  next();
};

module.exports = { autUserMiddleware };
