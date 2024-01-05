// Authentication Controllers: SignIn || SignOut || SignUp
import bycryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Import Models

import { Product, User } from "../models/models.js";

const uploadProduct = async (req, res, next) => {
  const { description, name, category, currentPrice, imgUrl, brand, adminId } =
    req.body;

  // console.log(req.body);

  const token = req.cookies.vvyyzz;
  // console.log(req.userIdToken, "first print");
  // console.log(adminId, "second print");
  // Verify that adminId is truly an admin
  try {
    const confirmAdmin = await User.findOne({
      _id: req.userIdToken.id,
    });

    // console.log(confirmAdmin, "third print");

    if (!confirmAdmin || confirmAdmin.isAdmin === false)
      return res.status(403).json({
        statusCode: 403,
        message: "Authorization Error. Please try again.",
      });

    // Create the Product
    const newProduct = new Product({
      description,
      name,
      category: category.split(";"),
      currentPrice: +currentPrice,
      imageUrl: imgUrl,
      brand,
    });

    //save new Product
    const saveProduct = await newProduct.save();

    if (!saveProduct)
      return res.status(403).json({
        statusCode: 403,
        message: "Error Occured while Creating Product!",
      });

    // If all things goes well, then return this response
    res
      .status(201)
      .json({ statusCode: 201, message: "Product Successfully Created" });
  } catch (err) {
    console.log(err.message);
  }
};

export default uploadProduct;
