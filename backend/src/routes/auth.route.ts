import express from "express";
import {
  OtpSent,
  otpVerify,
  signin,
  signout,
  signup,
} from "../controllers/auth.controller";

export const AuthRouter = express.Router();

AuthRouter.post("/otp/send", OtpSent);

AuthRouter.post("/otp/verify", otpVerify);

AuthRouter.post("/signup", signup);

AuthRouter.post("/signin", signin);

AuthRouter.post("/signout", signout);
