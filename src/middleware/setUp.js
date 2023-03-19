const { autUserMiddleware } = require("./autUserMiddleware");
const { autAdminMiddleware } = require("./autAdminMiddleware");

function middlewareSetUp(app) {
  app.use(autUserMiddleware);
  app.use(autAdminMiddleware);
}

module.exports = middlewareSetUp;
