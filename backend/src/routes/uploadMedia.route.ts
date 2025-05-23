import express from "express";
import { upload } from "../middlewares/localUpload";
import { uploadController } from "../controllers/upload.controller";

export const UploadMedia = express.Router();

UploadMedia.post("/", upload.single("file"), uploadController);
