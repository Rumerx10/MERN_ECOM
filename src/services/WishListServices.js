import mongoose from "mongoose";
import { WishModel } from "../models/WishModel.js";

export const WishListService = async (req) => {
  try {
    const userID = req.user.userID;
    let MatchStage = { $match: { userID: userID } };
    let ConvertStringToObjectId = {
      $addFields: {
        productID: { $toObjectId: "$productID" },
      },
    };
    let JoinWithProductStage = {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product",
      },
    };
    let UnwindProductStage = { $unwind: "$product" };

    let data = await WishModel.aggregate([
      MatchStage,
      ConvertStringToObjectId,
      JoinWithProductStage,
      // UnwindProductStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "failed to fetch data", error: error.message };
  }
};

export const SaveWishListService = async (req) => {
  try {
    const userID = req.user.userID;
    let reqBody = req.body;
    reqBody.userID = userID;
    await WishModel.updateOne(reqBody, { $set: reqBody }, { upsert: true });
    return { status: "success", message: "wished product saved" };
  } catch (error) {
    return { status: "failed to save data", error: error.message };
  }
};
export const RemoveWishListService = async (req) => {
  try {
    const userID = req.user.userID;
    let reqBody = req.body;
    reqBody.userID = userID;
    console.log("delete wish list body--------->", reqBody);
    await WishModel.deleteOne(reqBody);

    return { status: "success", message: "product removed from wishlist." };
  } catch (error) {
    return { status: "failed to delete data", error: error.message };
  }
};


