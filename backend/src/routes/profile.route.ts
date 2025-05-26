import express from "express";
import { authMiddleware } from "../middlewares";
import { ProfileEditController } from "../controllers/profile.controller";

export const ProfileRouter = express.Router();

ProfileRouter.post("/edit", authMiddleware, ProfileEditController);
