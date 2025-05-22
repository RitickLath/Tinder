import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const configuration = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

export const uploader = async (imagePath: string) => {
  // Configuration
  try {
    cloudinary.config(configuration);

    // Upload an image
    const uploadResult = await cloudinary.uploader.upload(imagePath, {
      resource_type: "auto",
    });

    // Remove from the server on file upload.
    fs.unlinkSync(imagePath);
    return uploadResult;

    console.log(uploadResult);
  } catch (error: any) {
    fs.unlinkSync(imagePath);
    console.log(error);
    return null;
  }
};
