import { Request, Response } from "express";
import { db } from "..";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "YOUR_DEV_SECRET";

// We will add the middleware to check is the user have already made a request for OTP. (Rate Limiter maybe)
export const OtpSent = async (req: Request, res: Response) => {
  // 1. Extract phone number, name from request body.
  const { phone, name } = req.body;

  try {
    // 2. Validate if phone number is present.
    if (!phone && !name) {
      res.status(400).json({
        success: false,
        message: "Phone Number and Name are required.",
      });
      return;
    }
    // 3. Validate if phone number is in correct format (regex/length).
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      res.status(400).json({
        success: false,
        message: "Invalid Phone Number format.",
      });
      return;
    }

    // 4. Generate a 6-digit OTP.
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 5. Calculate OTP expiration time 7 minute from now ( thala for the reason).
    const expiredAt = new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() + 7);

    // 6. Save the OTP and expiration time in the database (upsert if exists).
    const OTPCreated = await db.otp.create({
      data: { phone, code: otp, expiredAt },
    });

    // 6. Send the OTP to the user's phone
    // TODO: Will Add SMS Service.

    res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
      data: otp, // Only for Dev.
    });
    return;
  } catch (error: any) {
    console.error("Error in OTP Sent Controller:", error.message);
    res.status(500).json({
      success: false,
      message: `Internal Server Error: ${error.message}`,
    });
    return;
  }
};

export const otpVerify = async (req: Request, res: Response) => {
  try {
    // 1. Extract phone number and OTP from request body.
    const { phone, otp } = req.body;

    // 2. Validate if both phone number and OTP are provided.
    if (!phone || !otp) {
      res.status(400).json({
        success: false,
        message: "Phone Number and OTP are required.",
      });
      return;
    }

    // 3. Validate OTP format (should be 6-digit).
    if (otp.length !== 6) {
      res.status(400).json({
        success: false,
        message: "OTP must be 6 digits.",
      });
      return;
    }

    // 4. Fetch OTP record from the database using phone number.
    const OriginalOTP = await db.otp.findFirst({ where: { phone } });

    // 5. If OTP record not found, respond with error success false.
    if (!OriginalOTP) {
      res.status(401).json({
        success: false,
        message: "OTP not found or expired.",
      });
      return;
    }

    // 6. Check if OTP is expired based on expiration time.
    if (new Date() > OriginalOTP.expiredAt) {
      await db.otp.deleteMany({ where: { phone } });
      res.status(401).json({
        success: false,
        message: "OTP expired.",
      });
      return;
    }

    // 7. Compare user-entered OTP with OTP from database.
    // 8. If OTP is incorrect, respond with error message and status false.
    if (otp !== OriginalOTP.code) {
      res.status(400).json({
        success: false,
        message: "Incorrect OTP.",
      });
      return;
    }

    // 9. If OTP is correct, generate JWT token for the user.
    const token = jwt.sign({ phone }, JWT_SECRET, {
      expiresIn: "7m", // 5 minutes
    }); // Expires after 7 minutes.

    // Add the cookie named authToken with 5 min. expiry (Short Lived Cookie)
    res.cookie("authToken", token, {
      httpOnly: true,
      //secure: true // only HTTPS in prod
      maxAge: 5 * 60 * 1000, // 5 minutes
    });

    // 10. Delete the OTP record from database (one-time use).
    await db.otp.deleteMany({ where: { phone } });

    // 11. Respond with success message and JWT token.(short term lets say 5 minutes)
    res.status(200).json({
      success: true,
      message: "OTP verified successfully.",
      token,
    });
    return;
  } catch (error: any) {
    console.error("Error during OTP verification:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const signup = async (req: Request, res: Response) => {
  // 1. Extract JWT token from Authorization header.
  // 2. Verify the JWT token. (proof that user have passed otp verification)
  // 3. Extract user info (phone) from token payload.
  // 4. Get name, email, etc. from request body (signup details).
  // 5. Validate & sanitize this user data.
  // 6. Save new user to database (create user profile).
  // 7. Respond with success message & user profile data and jwt token new.(long lived)
};

export const login = async (req: Request, res: Response) => {
  // 1. Extract & verify JWT token from headers.
  // 2. If token is valid, the user is logged in.
  // 3. Respond with user session/token (long lived)
};

// In both signup and signin the jwt token or cookie whatever we choose says that we have passsed the otp verifiaction test.

// When otp verifcation is made the jwt token sent there is short lived.

// When the signup and login is made then the token se sent is long lived
