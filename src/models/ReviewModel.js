import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
  {
    userID: { type: String, required: true },
    productID: { type: String, required: true },
    desc: { type: String, required: true },
    rating: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const ReviewModel = mongoose.model("reviews", DataSchema);
