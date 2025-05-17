import { Request, Response } from "express";

export const OtpSent = async (req: Request, res: Response) => {
  // 1. Extract phone number from request body.
 
  // 2. Validate if phone number is present.
 
  // 3. Validate if phone number is in correct format (regex/length).
 
  // 4. Generate a 6-digit OTP.
 
  // 5. Calculate OTP expiration time 7 minute from now ( thala for the reason).
 
  // 6. Save the OTP and expiration time in the database (upsert if exists).
 
  // 7. Confirm if OTP was saved successfully.
 
  // 8. Respond with success message.
};

export const otpVerify = async (req: Request, res: Response) => {
  // 1. Extract phone number and OTP from request body.

  // 2. Validate if both phone number and OTP are provided.

  // 3. Validate OTP format (should be 6-digit).

  // 4. Fetch OTP record from the database using phone number.

  // 5. If OTP record not found, respond with error success flase.

  // 6. Check if OTP is expired based on expiration time.

  // 7. Compare user-entered OTP with OTP from database.

  // 8. If OTP is incorrect, respond with error message and status false.

  // 9. If OTP is correct, generate JWT token for the user.

  // 10. Delete the OTP record from database (one-time use).

  // 11. Respond with success message and JWT token.(short term lets say 5 minutes)
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