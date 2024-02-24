import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/dbConnection.js";
dotenv.config();
connectDB();

import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors("*"));

app.use("/api/v1", authRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
