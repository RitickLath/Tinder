import { Request, Response } from "express";
import { uploader } from "../utils/cloudinaryUpload";

export const uploadController = async (req: Request, res: Response) => {
  const localPath = req.file?.path;

  if (!localPath) {
    res.json({ success: false, message: "Cant Upload" });
    return;
  }
  const response = await uploader(localPath);

  res
    .status(201)
    .json({ success: true, message: "Uploaded", data: response?.url });
};
