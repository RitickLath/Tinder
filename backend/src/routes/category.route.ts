import express from "express";
import { categoryController } from "../controllers/category.controller";

export const categoryRoute = express.Router();

categoryRoute.post("/:category", categoryController);
