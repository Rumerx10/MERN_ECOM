import mongoose from "mongoose";
import { ProductModel } from "../models/ProductModel.js";
import {
  BrandListService,
  CategoryListService,
  ListByBrandService,
  ListByCategoryService,
  SliderListService,
} from "../services/ProductServices.js";


export const ProductBrandList = async (req, res) => {
  const result = await BrandListService(req);
  return res.status(200).json(result);
};
export const ProductCategoryList = async (req, res) => {
  const result = await CategoryListService(req);
  return res.status(200).json(result);
};
export const ProductSliderList = async (req, res) => {
  const result = await SliderListService(req);
  return res.status(200).json(result);
};


export const ProductListByBrand = async (req, res) => {
  const result = await ListByBrandService(req);
  return res.status(200).json(result);
};

export const ProductListByCategory = async (req, res) => {
  const result = await ListByCategoryService(req);
  return res.status(200).json(result);
};

export const ProductListBySimiler = async (req, res) => {};
export const ProductListByKeyword = async (req, res) => {};
export const ProductListByRemark = async (req, res) => {};
export const ProductReviewList = async (req, res) => {};
export const ProductDetails = async (req, res) => {};
