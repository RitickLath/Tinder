import express from "express";
import {
  login,
  logout,
  OtpSent,
  otpVerify,
  signup,
} from "../controllers/auth.controller";

export const AuthRouter = express.Router();

AuthRouter.post("/otp/send", OtpSent);

AuthRouter.post("/otp/verify", otpVerify);

AuthRouter.post("/signup", signup);

AuthRouter.post("/login", login);

AuthRouter.post("/logout", logout);
