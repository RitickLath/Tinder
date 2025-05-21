import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { db } from "..";

const JWT_SECRET = process.env.JWT_SECRET || "YOUR_DEV_SECRET";

interface TokenPayload {
  id: string;
  phone: string;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. Extract the token from cookies
    const token = req.cookies.auth;

    // 2. Check if token is present
    if (!token) {
      res.status(401).json({ status: false, message: "Please login." });
      return;
    }

    // 3. Verify the token using JWT_SECRET
    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    } catch (err) {
      res
        .status(401)
        .json({ status: false, message: "Invalid or expired token." });
      return;
    }

    // 4. Find user from database using phone number from decoded
    const user = await db.user.findFirst({
      where: { phone: decoded.phone },
    });

    // 5. If user is not found in database
    if (!user) {
      res.status(404).json({
        status: false,
        message: "User not found.",
      });
      return;
    }

    // 6. Attach user ID to request object for further use in routes
    // @ts-ignore
    req.id = decoded.id;

    // 7. Call the next middleware or route handler
    next();
  } catch (error: any) {
    console.error("Error in auth middleware:", error.message);
    // 8. Send internal server error response in case of any other issues
    res.status(500).json({
      status: false,
      message: "Something went wrong during authentication.",
    });
    return;
  }
};
