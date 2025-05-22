import express from "express";
import dotenv from "dotenv";
import cookieParsar from "cookie-parser";
import cors from "cors";

//import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../src/generated/prisma";
import { AuthRouter } from "./routes/auth.route";
import { ProfileRouter } from "./routes/profile.route";
import { connectionRouter } from "./routes/connection.route";
import { upload } from "./middlewares/localUpload";
import { uploader } from "./utils/cloudinaryUpload";

dotenv.config();

export const db = new PrismaClient();

export const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow cookies (credentials)
  })
);

app.use(express.json());
app.use(cookieParsar());

// REQUESTS: otp/send && otp/verify && signup && signin && signout
app.use("/api/v1/auth", AuthRouter);

app.use("/api/v1/profile", ProfileRouter);

// REQUESTS: send/rejected/:userId && send/interested/:userId
app.use("/api/v1/connection", connectionRouter);

// Upload image
app.post("/upload", upload.single("file"), async (req, res) => {
  const localPath = req.file?.path;

  if (!localPath) {
    res.json({ success: false, message: "Cant Upload" });
    return;
  }
  const response = await uploader(localPath);

  res
    .status(201)
    .json({ success: true, message: "Uploaded", data: response?.url });
});
