const jwt = require("jsonwebtoken");

async function autAdminMiddleware(req, res, next) {
  try {
    const authorization = req.headers.authorization;
    const role = req.headers.role;
    console.log(role, req.headers);
    if (!authorization || role !== "admin") {
      throw new Error("Error:no authorization");
    }

    const [bearer, token] = authorization.split(" ");

    const admin = await jwt.verify(token, process.env.CLAVE);
    req.Role = admin.role;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

module.exports = { autAdminMiddleware };
