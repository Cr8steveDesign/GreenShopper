//  Instantiate router
import express from "express";
import {
  getProduct,
  getAllProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/single/:id", getProduct);
router.get("/all-products", getAllProduct);

export default router;
