import express from "express";
import {
  ProductBrandList,
  ProductCategoryList,
  ProductDetails,
  ProductListByBrand,
  ProductListByCategory,
  ProductListByKeyword,
  ProductListByRemark,
  ProductListBySimiler,
  ProductReviewList,
  ProductSliderList,
} from "../controllers/ProductController.js";
const router = express.Router();

// Product
router.get("/ProductBrandList", ProductBrandList);
router.get("/ProductCategoryList", ProductCategoryList);
router.get("/ProductSliderList", ProductSliderList);
router.get("/ProductListByBrand/:brandID", ProductListByBrand);
router.get("/ProductListByCategory/:categoryID", ProductListByCategory);
router.get("/ProductListByKeyword/:keyword", ProductListByKeyword);
router.get("/ProductListByRemark/:remark", ProductListByRemark);
router.get("/ProductDetails/:productID", ProductDetails);
router.get("/ProductListBySimiler/:keyword", ProductListBySimiler);
router.get("/ProductReviewList/:productID", ProductReviewList);

export default router;
