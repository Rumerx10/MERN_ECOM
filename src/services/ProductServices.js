import mongoose from "mongoose";
import { ProductModel } from "../models/ProductModel.js";
import { BrandModel } from "./../models/BrandModel.js";
import { CategoryModel } from "./../models/CategoryModel.js";
import { ProductSliderModel } from "../models/ProductSliderModel.js";

const ObjectID = mongoose.Types.ObjectId;

export const BrandListService = async () => {
  try {
    const data = await BrandModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "failed to fetch data", error: error.message };
  }
};
export const CategoryListService = async () => {
  try {
    const data = await CategoryModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "failed to fetch data", error: error.message };
  }
};
export const SliderListService = async () => {
  try {
    const data = await ProductSliderModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "failed to fetch data", error: error.message };
  }
};

export const ListByBrandService = async (req) => {
  let brandID = new ObjectID(req.params.brandID);
  console.log("Brand ID ------------>>>", brandID);
  let MatchStage = { $match: { brandID: brandID } };
  let JoinWithBrandStage = {
    $lookup: {
      from: "brands",
      localField: "brandID",
      foreignField: "_id",
      as: "brand",
    },
  };
  let JoinWithCategoryState = {
    $lookup: {
      from: "categories",
      localField: "categoryID",
      foreignField: "_id",
      as: "category",
    },
  };
  let UnwindBrandStage = { $unwind: "$brand" };
  let UnwindCategoryStage = { $unwind: "$category" };
  let ProjectionStage = {
    $project: { "brand._id": 0, "category._id": 0, brandID: 0, categoryID: 0 },
  };
  try {
    const data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryState,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    console.log(data);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "failed to fetch data", error: error.message };
  }
};

export const ListByCategoryService = async (req) => {
  const categoryID = new ObjectID(req.params.categoryID);
  console.log("Category ID ------------>>>", categoryID);
  let MatchStage = { $match: { categoryID: categoryID } };
  let JoinWithBrandStage = {
    $lookup: {
      from: "brands",
      localField: "brandID",
      foreignField: "_id",
      as: "brand",
    },
  };
  let JoinWithCategoryStage = {
    $lookup: {
      from: "categories",
      localField: "categoryID",
      foreignField: "_id",
      as: "category",
    },
  };
  let UnwindBrandStage = { $unwind: "$brand" };
  let UnwindCategoryStage = { $unwind: "$category" };
  let ProjectionStage = {
    $project: { "brand._id": 0, "category._id": 0, brandID: 0, categoryID: 0 },
  };
  try {
    const data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "failed to fetch data", error: error.message };
  }
};

export const ListBySimilerService = async () => {};
export const ListByKeywordService = async () => {};
export const ListByRemarkService = async () => {};
export const DetailsService = async () => {};
export const ReviewListService = async () => {};
