/**
 * Back End - GreenShopper Project
 * developed by: Cre8Steve Dev - Omoregie Stephen
 * Stack: MongoDB, Express/NodeJS
 *
 */

//import dependencies
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from "path";
import { signUp } from "./controllers/authControllers.js";
import authRouter from "./routes/authRoute.js";

// Load env into the config
dotenv.config();

//Initialize Server
const app = express();

// Set Up MiddleWare
app.use(cookieParser());
app.use(express.json());

// Connect to Database and Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    // Connect to database and then on success, start to listen
    console.clear();
    console.log("Connected to DataBase:", res.connection.name);

    // Listen on port
    app.listen(process.env.PORT || 3000, () =>
      console.log("Connected to Server")
    );
  })
  .catch((err) => {
    console.log("==============================================");
    console.log("There was an Error");
    console.log("==============================================");
    console.log(err.message);
  });

// Define Routers
// @Auth: User Sign In / Profile
// @Products: To Serve the Shop Component
// @Product/:param (product ID)

app.use("/api/auth", authRouter);

// Handle Error Custom Middle Ware
// Custom Middleware that sends an error I think
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
