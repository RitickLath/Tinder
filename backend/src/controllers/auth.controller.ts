import { Request, Response } from "express";
import { db } from "..";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "YOUR_DEV_SECRET";

// We will add the middleware to check is the user have already made a request for OTP. (Rate Limiter maybe)
export const OtpSent = async (req: Request, res: Response) => {
  // 1. Extract phone number, name from request body.
  const { phone, mode } = req.body;

  try {
    // 2. Validate if phone number is present.
    if (!phone || !mode) {
      res.status(400).json({
        success: false,
        message: "Phone Number and mode are required.",
      });
      return;
    }

    // 3. Correct mode validation logic
    if (mode !== "signup" && mode !== "signin") {
      res.status(400).json({
        success: false,
        message: "Invalid Mode Type.",
      });
      return;
    }

    // 4. Validate if phone number is in correct format (regex/length).
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      res.status(400).json({
        success: false,
        message: "Invalid Phone Number format.",
      });
      return;
    }

    // 5. Check if user exists with the given phone number.
    const userExists = await db.user.findFirst({ where: { phone: phone } });

    // 6. If user Exists but made signup request response status false.
    if (userExists && mode == "signup") {
      res.status(400).json({
        success: false,
        message: "User Already Exists. Please Login.",
      });
      return;
    }

    // 7. If user doesn't Exists but made signin request response status false.
    if (!userExists && mode == "signin") {
      res.status(400).json({
        status: false,
        message: "User Doesn't Exists. Please Signup.",
      });
      return;
    }

    // 8. Generate a 6-digit OTP.
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 9. Calculate OTP expiration time 7 minute from now ( thala for the reason).
    const expiredAt = new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() + 7);

    // 10. Save the OTP and expiration time in the database (upsert if exists).
    const OTPCreated = await db.otp.create({
      data: { phone, code: otp, expiredAt },
    });

    // 11. Send the OTP to the user's phone
    // TODO: Will Add SMS Service.

    res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
      data: OTPCreated.code, // Only for Dev.
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
    const { phone, otp, mode } = req.body;

    // 2. Validate if both phone number and OTP are provided.
    if (!phone || !otp || !mode) {
      res.status(400).json({
        success: false,
        message: "Phone Number, OTP and mode is required.",
      });
      return;
    }

    // 3. Check mode type
    if (mode != "signup" && mode != "signin") {
      res.status(400).json({
        success: false,
        message: "Invalid Mode Type.",
      });
      return;
    }

    // 4. Validate OTP format (should be 6-digit).
    if (otp.length !== 6) {
      res.status(400).json({
        success: false,
        message: "OTP must be 6 digits.",
      });
      return;
    }

    // 5. Fetch OTP record from the database using phone number.
    const OriginalOTP = await db.otp.findFirst({ where: { phone } });

    // 6. If OTP record not found, respond with error success false.
    if (!OriginalOTP) {
      res.status(401).json({
        success: false,
        message: "OTP not found or expired.",
      });
      return;
    }

    // 7. Check if OTP is expired based on expiration time.
    if (new Date() > OriginalOTP.expiredAt) {
      await db.otp.deleteMany({ where: { phone } });
      res.status(401).json({
        success: false,
        message: "OTP expired.",
      });
      return;
    }

    // 8. Compare user-entered OTP with OTP from database.
    // 8. If OTP is incorrect, respond with error message and status false.
    if (otp !== OriginalOTP.code) {
      res.status(400).json({
        success: false,
        message: "Incorrect OTP.",
      });
      return;
    }

    // 9. Generate the token and cookies based on mode
    let token;
    if (mode === "signup") {
      // Short-lived token to complete signup later
      token = jwt.sign({ phone }, JWT_SECRET, { expiresIn: "7m" });

      res.cookie("authToken", token, {
        httpOnly: true,
        maxAge: 7 * 60 * 1000, // 7 minutes
      });
    } else if (mode === "signin") {
      // Long-lived token for session
      const user = await db.user.findFirst({ where: { phone } });
      if (!user) {
        res.status(201).json({
          status: false,
          message: "Please signup user doesn't. exixts",
        });
      }
      token = jwt.sign({ phone, id: user?.id }, JWT_SECRET, {
        expiresIn: "7d",
      });

      res.cookie("auth", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
    }

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
  try {
    // 1. Extract JWT token from Authorization header.
    const { authToken } = req.cookies;

    // 2. Verify the JWT token. (proof that user have passed otp verification)
    if (!authToken) {
      res.status(401).json({ status: false, message: "Token is Required." });
      return;
    }

    let tokenValid;
    try {
      tokenValid = jwt.verify(authToken, JWT_SECRET);
    } catch (err) {
      res
        .status(401)
        .json({ status: false, message: "Token Not Valid or Expired." });
      return;
    }

    // 3. Extract user info (phone) from token payload.
    const payload = jwt.decode(authToken) as { phone: string };
    const phone = payload?.phone;

    const { name } = req.body;
    if (!name) {
      res
        .status(409)
        .json({ status: false, message: "Name and Email are required." });
      return;
    }

    // 4. Get name, etc. from request body (signup details).
    // 5. Validate & sanitize this user data.
    const existingUser = await db.user.findFirst({ where: { phone } });
    if (existingUser) {
      res.status(409).json({
        status: false,
        message: "User already exists with this phone.",
      });
      return;
    }

    // 6. Save new user to database
    const newUser = await db.user.create({
      data: {
        name,
        phone,
      },
    });

    if (!newUser) {
      throw new Error("User creation failed.");
    }

    // 7. Extract Data for preference
    const {
      gender,
      birthDate,
      sexualOrientation,
      showSexualOrientation,
      interestedIn,
      lookingFor,
      school,
      highestEducation,
      work,
      drink,
      smoke,
      workout,
      loveLanguage,
      into,
      blocked_contacts,
    } = req.body;

    if (
      !gender ||
      !birthDate ||
      !sexualOrientation ||
      showSexualOrientation === undefined ||
      !interestedIn ||
      !lookingFor ||
      !highestEducation ||
      !work ||
      !drink ||
      !smoke ||
      !workout ||
      !loveLanguage ||
      !into ||
      !blocked_contacts
    ) {
      // Delete user if preference is incomplete
      await db.user.delete({ where: { id: newUser.id } });

      res.status(400).json({
        status: false,
        message: "All fields for preference are required.",
      });
      return;
    }

    const preference = await db.preference.create({
      data: {
        user: {
          connect: { id: newUser.id },
        },
        gender,
        birthDate,
        sexualOrientation,
        showSexualOrientation,
        interestedIn,
        lookingFor,
        school,
        highestEducation,
        work,
        drink,
        smoke,
        workout,
        loveLanguage,
        into,
        blocked_contacts,
      },
    });

    // 8. Respond with success message & user profile data and jwt token new.(long lived)
    const newToken = jwt.sign(
      { id: newUser.id, phone: newUser.phone },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 8. Add Cookie
    res.clearCookie("authToken", { httpOnly: true });
    res.cookie("auth", newToken, {
      httpOnly: true,
      // secure: true, // only in production
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      status: true,
      message: "Signup successful.",
      user: {
        id: newUser.id,
        name: newUser.name,
        phone: newUser.phone,
        preference: preference,
      },
      token: newToken,
    });
  } catch (error: any) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ status: false, message: "Internal server error." });
  }
};

export const signout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("auth", {
      httpOnly: true,
      // secure: true, // In production with HTTPS
    });

    return res
      .status(200)
      .json({ status: true, message: "Logout successful." });
  } catch (error: any) {
    console.error("Logout error:", error.message);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error." });
  }
};

// In both signup and signin the jwt token or cookie whatever we choose says that we have passsed the otp verifiaction test.

// When otp verifcation is made the jwt token sent there is short lived.

// When the signup and login is made then the token se sent is long lived
