import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/dbConnection";
import createHttpError from "http-errors";
dotenv.config();
connectDB();

import authRoutes from "./routes/auth.routes";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

app.use("/api/v1", authRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.send(new createHttpError.NotFound());
});

//error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ status: err.status || 500, message: err.message });
};

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
