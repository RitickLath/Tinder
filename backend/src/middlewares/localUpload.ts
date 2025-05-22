import multer from "multer";
import path from "path";

// This storage will save the file locally
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(error, path where to store)
    cb(null, path.join(__dirname, "../../public/temp"));

    console.log(path.join(__dirname, "../../public/temp"));
  },
  filename: function (req, file, cb) {
    // cb(error, file name to keep)
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage: storage });
