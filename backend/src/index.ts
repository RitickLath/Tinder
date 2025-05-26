import express from "express";
import dotenv from "dotenv";
import cookieParsar from "cookie-parser";
import cors from "cors";

//import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../src/generated/prisma";

import { AuthRouter } from "./routes/auth.route";
import { ProfileRouter } from "./routes/profile.route";
import { ConnectionRouter } from "./routes/connection.route";
import { CategoryRoute } from "./routes/category.route";
import { UploadMedia } from "./routes/uploadMedia.route";
import { FeedRouter } from "./routes/feed.route";

import { authMiddleware } from "./middlewares";

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

// Protected Route authentications
app.get("/api/v1/authenticated", authMiddleware, (req, res) => {
  res.status(201).json({ success: true, message: "Allowed" });
});

// REQUESTS: otp/send && otp/verify && signup && signin && signout
app.use("/api/v1/auth", AuthRouter);

// Profile
app.use("/api/v1/profile", authMiddleware, ProfileRouter);

// REQUESTS: send/rejected/:userId && send/interested/:userId
app.use("/api/v1/connection", authMiddleware, ConnectionRouter);

// Upload image
app.use("/api/v1/upload", authMiddleware, UploadMedia);

// Show feed based on category
app.use("/api/v1/category", authMiddleware, CategoryRoute);

// Show Feed
app.use("/api/v1/feed", authMiddleware, FeedRouter);
