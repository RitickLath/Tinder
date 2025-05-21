import express from "express";
import { authMiddleware } from "../middlewares";
import {
  interestedController,
  rejectedController,
} from "../controllers/connection.controller";

const connectionRouter = express.Router();

connectionRouter.post(
  "/send/rejected/:userId",
  authMiddleware,
  rejectedController
);

connectionRouter.post(
  "/send/interested/:userId",
  authMiddleware,
  interestedController
);
