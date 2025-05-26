import { Request, Response } from "express";
import { db } from "..";

export const feedController = async (req: Request, res: Response) => {
  try {
    // 1. Extract the userId
    // @ts-ignore
    const authorId = req.id;
    const page = Number(req.query.page) || 0;

    if (!authorId) {
      res.status(401).json({ status: false, message: "Please login." });
      return;
    }

    // 2. Get user and their preference
    const user = await db.user.findFirst({
      where: { id: authorId },
      include: { preference: true },
    });

    if (!user) {
      res.status(401).json({ status: false, message: "User doesn't exist." });
      return;
    }

    const preferedGender = user.preference?.interestedIn;
    const blockedContacts = user.preference?.blocked_contacts || [];

    const requestsAlreadyHandled = await db.request.findMany({
      where: {
        fromUserId: authorId,
      },
      select: { toUserId: true },
    });

    const notIncludeUserIds = [
      ...requestsAlreadyHandled.map((e) => e.toUserId),
      ...blockedContacts,
    ];

    let feedUsers;

    if (preferedGender !== "Everyone") {
      const matchedPreferences = await db.preference.findMany({
        where: {
          gender: preferedGender,
          userId: { notIn: [authorId, ...notIncludeUserIds.map(Number)] },
        },
        include: {
          user: {
            include: { preference: true },
          },
        },
        skip: page * 10,
        take: 10,
      });

      // Extract users from preferences (with their preference included)
      feedUsers = matchedPreferences.map((pref) => pref.user);
    } else {
      feedUsers = await db.user.findMany({
        where: {
          id: {
            notIn: [authorId, ...notIncludeUserIds.map(Number)],
          },
        },
        include: { preference: true },
        skip: page * 10,
        take: 10,
      });
    }

    res.status(200).json({
      success: true,
      message: "Feed fetched successfully.",
      data: feedUsers,
    });
  } catch (error: any) {
    console.error("Error in FeedController:", error.message);
    res.status(500).json({
      status: false,
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

// Feed logic: Returns a paginated list of users based on the current user's preference, excluding blocked users and those already interacted with.
