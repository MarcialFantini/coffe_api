const jwt = require("jsonwebtoken");

async function autUserMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    const role = req.headers.role;

    if (!authHeader || role !== "user") {
      console.log("siguiente");
      throw new Error({ message: "not authorization" });
    }

    const [bearer, token] = authHeader.split(" ");

    const user = await jwt.verify(token, process.env.CLAVE);
    req.Role = user.role;
    req.ID = user.id;
    next();
  } catch (err) {
    res.json(err);
  }
}

module.exports = { autUserMiddleware };
