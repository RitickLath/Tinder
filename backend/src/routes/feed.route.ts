import express from "express";
import { feedController } from "../controllers/feed.controller";
import { authMiddleware } from "../middlewares";

export const FeedRouter = express.Router();

FeedRouter.get("/", authMiddleware, feedController);
