import express from "express";
import { authMiddleware } from "../middlewares";

export const ProfileRouter = express.Router();

ProfileRouter.post("/edit", authMiddleware, ProfileEditController);
