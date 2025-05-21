import { Request, Response } from "express";

export const rejectedController = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    console.error("Error in OTP Sent Controller:", error.message);
    res.status(500).json({
      success: false,
      message: `Internal Server Error: ${error.message}`,
    });
    return;
  }
};

export const interestedController = (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    console.error("Error in OTP Sent Controller:", error.message);
    res.status(500).json({
      success: false,
      message: `Internal Server Error: ${error.message}`,
    });
    return;
  }
};
