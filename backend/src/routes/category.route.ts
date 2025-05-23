import express from "express";
import { categoryController } from "../controllers/category.controller";

export const CategoryRoute = express.Router();

CategoryRoute.post("/:category", categoryController);
