const { routerAdmin } = require("./AdminRouter");

const { Router } = require("express");
const { routerProduct } = require("./ProductRouter");
const { routerOrderProduct } = require("./OrderProductRouter");
const { userRouter } = require("./UserRouter");
const { authRouter } = require("./autRouter");
const { routerImages } = require("./ImagesRouter");

function setUpRoutes(app) {
  const router = Router();
  const routerV1 = Router();
  router.use("/v1", routerV1);
  app.use("/api", router);
  routerV1.use("/admin", routerAdmin);
  routerV1.use("/product", routerProduct);
  routerV1.use("/order/product/", routerOrderProduct);
  routerV1.use("/user", userRouter);
  routerV1.use("/", authRouter);
  routerV1.use("/images", routerImages);
}

module.exports = { setUpRoutes };
