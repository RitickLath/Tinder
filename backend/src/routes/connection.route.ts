import express from "express";
import { authMiddleware } from "../middlewares";
import {
  interestedController,
  rejectedController,
} from "../controllers/connection.controller";

export const ConnectionRouter = express.Router();

ConnectionRouter.post(
  "/send/rejected/:userId",
  authMiddleware,
  rejectedController
);

ConnectionRouter.post(
  "/send/interested/:userId",
  authMiddleware,
  interestedController
);
