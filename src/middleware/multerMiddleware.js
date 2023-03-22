const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const arrayWordsOfFile = file.originalname.split(".");
    const typeFile = arrayWordsOfFile[arrayWordsOfFile.length - 1];

    const arrayWordsFirst = [...arrayWordsOfFile];
    arrayWordsFirst.pop();
    const dateNow = new Date();
    const name = arrayWordsFirst + Date.parse(dateNow) + "." + typeFile;
    req.nameFile = name;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
