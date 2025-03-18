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
import {
  CreateProfile,
  ReadProfile,
  UpdateProfile,
  UserLogin,
  UserLogout,
  VerifyLogin,
} from "../controllers/UserController.js";
const router = express.Router();

// Product
router.get("/ProductBrandList", ProductBrandList);
router.get("/ProductCategoryList", ProductCategoryList);
router.get("/ProductSliderList", ProductSliderList);
router.get("/ProductListByBrand/:brandID", ProductListByBrand);
router.get("/ProductListByCategory/:categoryID", ProductListByCategory);
router.get("/ProductListByRemark/:remark", ProductListByRemark);
router.get("/ProductListBySimilar/:categoryID", ProductListBySimiler);
router.get("/ProductDetails/:productID", ProductDetails);
router.get("/ProductReviewList/:productID", ProductReviewList);
router.get("/ProductListByKeyword/:keyword", ProductListByKeyword);

// User
router.get("/UserLogin", UserLogin);
router.get("/VerifyLogin", VerifyLogin);
router.get("/UserLogout", UserLogout);
router.get("/CreateProfile", CreateProfile);
router.get("/UpdateProfile", UpdateProfile);
router.get("/UpdateUpdateProfile", UpdateProfile);
router.get("/ReadProfile", ReadProfile);

export default router;
