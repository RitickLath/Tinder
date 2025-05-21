// All logic are written by keeping it assumed that ww wont repeate the feed.

import { Request, Response } from "express";

// 1. Interested -> First Impression Interested.

// 2. Rejected -> First Impression Rejected.

// 3. Matched -> Another user already marked you as Interested so its a matched.

// 4. Not Possible -> Another user already marked you as Rejected so its a not possible

export const rejectedController = (req: Request, res: Response) => {
  try {
    // 1. Get the 2nd User id
    // 2. Check if user id is extracted.
    // 3. Verify if the user with the given userId exists.
    
    // 4. Extract the user id of logged in user.
    // 5. check if there is not already created object between them.
    
    // 6. If there is check if its interested or rejected.
    // 7. If interested is marked update it to "matched"
    // 8. If Rejected is marked update is to "Not Possible"
    
    // 9. If Request Model doesnt exists between them.
    // 10. Create One and mark status as Rejected.
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
    // 1. Get the 2nd User id
    // 2. Check if user id is extracted.
    // 3. Verify if the user with the given userId exists.

    // 4. Extract the user id of logged in user.
    // 5. Check if there is already a request from the 2nd user to current user.
    
    // 6. If yes, check the status.
    // 7. If status is Interested -> update to Matched.
    // 8. If status is Rejected -> update to Not Possible.
    
    // 9. If request already exists from current user to 2nd user, return (already interested).
    // 10. If not, create one and mark status as Interested.
  } catch (error: any) {
    console.error("Error in OTP Sent Controller:", error.message);
    res.status(500).json({
      success: false,
      message: `Internal Server Error: ${error.message}`,
    });
    return;
  }
};
