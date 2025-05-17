import express from "express";
import dotenv from "dotenv";
import cookieParsar from "cookie-parser";

//import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../src/generated/prisma";

dotenv.config();

const db = new PrismaClient();

export const app = express();

app.use(express.json());
app.use(cookieParsar());

app.get("/", async (req, res) => {
  res.json("user");
});
