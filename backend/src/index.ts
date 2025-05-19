import express from "express";
import dotenv from "dotenv";
import cookieParsar from "cookie-parser";

//import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../src/generated/prisma";
import { AuthRouter } from "./routes/auth.route";
import { ProfileRouter } from "./routes/profile.route";

dotenv.config();

export const db = new PrismaClient();

export const app = express();

app.use(express.json());
app.use(cookieParsar());

// Request OTP, Verify OTP, Signup, Signin, signout
app.use("/api/v1/auth", AuthRouter);

app.use("/api/v1/profile", ProfileRouter);
