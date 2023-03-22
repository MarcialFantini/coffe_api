const { serviceImagen } = require("../services/serviceImage");
const path = require("path");

const serviceImage = new serviceImagen();
const saveImageController = async (req, res, next) => {
  const save = await serviceImage.saveImage(
    req.file,
    req.nameFile,
    req.body.product_id
  );
  res.json({ save });
};

const getImageController = async (req, res, next) => {
  const pathImage = await serviceImage.getImage(req.params.id);

  res.sendFile(path.join(__dirname, "../..", pathImage));
};

module.exports = { saveImageController, getImageController };
