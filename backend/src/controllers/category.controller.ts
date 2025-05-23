import { Request, Response } from "express";
import { db } from "..";

export const categoryController = async (req: Request, res: Response) => {
  try {
    // 1. Extract the category
    const { category } = req.params;

    // 2. See the amount or photos the user have uploaded.
    // @ts-ignore
    const authorId = req.id;
    const user = await db.preference.findFirst({
      where: { gender: "Female" },
      include: { user: true },
    });

    console.log(user);
    res.status(200).json({ status: true, data: user, category });
  } catch (error: any) {
    console.error("Error in category controller:", error.message);
    res.status(500).json({
      success: false,
      message: `Internal Server Error: ${error.message}`,
    });
    return;
  }
};
