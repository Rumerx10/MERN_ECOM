import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
  {
    userID: { type: String },
    productID: { type: String },
    color: { type: String },
    price: { type: String },
    qty: { type: String },
    size: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const CartModel = mongoose.model("carts", DataSchema);
