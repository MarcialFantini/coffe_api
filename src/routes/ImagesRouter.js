const { Router } = require("express");
const {
  saveImageController,
  getImageController,
} = require("../controllers/imagenController");
const { upload } = require("../middleware/multerMiddleware");

const routerImages = Router();

routerImages.post(
  "/save",
  upload.single("img"),
  async (req, res, next) => await saveImageController(req, res, next)
);

routerImages.get(
  "/:id",
  async (req, res, next) => await getImageController(req, res, next)
);

module.exports = { routerImages };
