import * as dotenv from "dotenv";
dotenv.config();

import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./Routes/user.js";

const app = Express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);

const port = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTION_URL).then(() =>
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  })
);
