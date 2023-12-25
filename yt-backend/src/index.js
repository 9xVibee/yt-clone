// one way to write connect db function!
/*
import mongoose from "mongoose";
import { DB_NAME } from "../constants";

import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error ", error);
    throw error;
  }
})();
*/

// code consistency gets break :( bcoz we are not using require
// require("dotenv").config({
//   path: "./env",
// });
import connectDb from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDb();
