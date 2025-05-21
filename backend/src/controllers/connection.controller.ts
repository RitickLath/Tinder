// All logic is written assuming we don't repeat users in the feed.

import { Request, Response } from "express";
import { db } from "..";

// 1. Interested -> First Impression Interested.
// 2. Rejected -> First Impression Rejected.
// 3. Matched -> Another user already marked you as Interested, so it's a match.
// 4. Not Matched -> Another user already marked you as Rejected, so it's a not matched.

export const rejectedController = async (req: Request, res: Response) => {
  try {
    // 1. Get the 2nd User id
    const { userId } = req.params;

    // 2. Check if user id is extracted.
    if (!userId) {
      res.status(400).json({ status: false, message: "userId is required." });
      return;
    }

    const targetUserId = Number(userId);

    // 3. Verify if the user with the given userId exists.
    const targetUser = await db.user.findUnique({
      where: { id: targetUserId },
    });
    if (!targetUser) {
      res.status(404).json({
        status: false,
        message: "User with the provided userId does not exist.",
      });
      return;
    }

    // 4. Extract the user id of logged in user.
    // @ts-ignore - assuming middleware sets req.id
    const authorId = Number(req.id);

    if (targetUserId == authorId) {
      throw new Error("One cant make relationhip with onceself.");
    }

    // 5. Check if the other user has already created a request toward you
    const reverseRequest = await db.request.findFirst({
      where: {
        fromUserId: targetUserId,
        toUserId: authorId,
      },
    });

    // 6. If a reverse request exists
    if (reverseRequest) {
      const status = reverseRequest.status;

      if (status === "Matched" || status === "NotMatched") {
        throw new Error("Feed inconsistency: invalid request state.");
      }

      // 7. If "Interested", update to NOT_MATCHED
      if (status === "Interested") {
        await db.request.update({
          where: { id: reverseRequest.id },
          data: { status: "NotMatched" },
        });
        res.status(201).json({
          status: true,
          message: "Marked as NOT_MATCHED. They were interested in you.",
        });
        return;
      }

      // 8. If "Rejected", update to MATCHED
      if (status === "Rejected") {
        await db.request.update({
          where: { id: reverseRequest.id },
          data: { status: "Matched" },
        });
        res.status(201).json({
          status: true,
          message: "It's a Match! They had rejected you, but now you matched.",
        });
        return;
      }
    }

    // 9. If request already exists from current user to 2nd user, throw error.
    const existingRequest = await db.request.findFirst({
      where: {
        fromUserId: authorId,
        toUserId: targetUserId,
      },
    });

    if (existingRequest) {
      throw new Error(
        "Feed error: This user was already shown. Request already exists."
      );
    }

    // 10. Create request as REJECTED
    const newRequest = await db.request.create({
      data: {
        fromUserId: authorId,
        toUserId: targetUserId,
        status: "Rejected",
      },
    });

    res.status(201).json({
      status: true,
      message: "Marked as Rejected.",
      data: newRequest,
    });
  } catch (error: any) {
    console.error("Error in rejectedController:", error.message);
    res.status(500).json({
      success: false,
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

export const interestedController = async (req: Request, res: Response) => {
  try {
    // 1. Get the 2nd User id
    const { userId } = req.params;

    // 2. Check if user id is extracted.
    if (!userId) {
      res.status(400).json({ status: false, message: "userId is required." });
      return;
    }

    const targetUserId = Number(userId);

    // 3. Verify if the user with the given userId exists.
    const targetUser = await db.user.findUnique({
      where: { id: targetUserId },
    });
    if (!targetUser) {
      res.status(404).json({
        status: false,
        message: "User with the provided userId does not exist.",
      });
      return;
    }

    // 4. Extract the user id of logged in user.
    // @ts-ignore - assuming middleware sets req.id
    const authorId = Number(req.id);

    if (targetUserId == authorId) {
      throw new Error("One cant make relationhip with onceself.");
    }

    // 5. Check if there is already a request from the 2nd user to current user.
    const reverseRequest = await db.request.findFirst({
      where: {
        fromUserId: targetUserId,
        toUserId: authorId,
      },
    });

    // 6. If a reverse request exists
    if (reverseRequest) {
      const status = reverseRequest.status;

      // 7. If status is INTERESTED → update to MATCHED
      if (status === "Interested") {
        await db.request.update({
          where: { id: reverseRequest.id },
          data: { status: "Matched" },
        });
        res.status(201).json({
          status: true,
          message: "It's a Match!",
        });
        return;
      }

      // 8. If status is REJECTED → update to NOT_MATCHED
      if (status === "Rejected") {
        await db.request.update({
          where: { id: reverseRequest.id },
          data: { status: "NotMatched" },
        });
        res.status(201).json({
          status: true,
          message: "Not Possible. They already rejected you.",
        });
        return;
      }
    }

    // 9. If request already exists from current user to 2nd user, throw error.
    const existingRequest = await db.request.findFirst({
      where: {
        fromUserId: authorId,
        toUserId: targetUserId,
      },
    });

    if (existingRequest) {
      throw new Error(
        "Feed error: This user was already shown. Request already exists."
      );
    }

    // 10. Create request as INTERESTED
    const newRequest = await db.request.create({
      data: {
        fromUserId: authorId,
        toUserId: targetUserId,
        status: "Interested",
      },
    });

    res.status(201).json({
      status: true,
      message: "Marked as Interested.",
      data: newRequest,
    });
  } catch (error: any) {
    console.error("Error in interestedController:", error.message);
    res.status(500).json({
      success: false,
      message: `Internal Server Error: ${error.message}`,
    });
  }
};
