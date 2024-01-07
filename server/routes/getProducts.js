//  Instantiate router
import express from "express";
import {
  getProduct,
  getAllProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/single/:id", getProduct);
router.get("/allproducts", getAllProduct);

export default router;
