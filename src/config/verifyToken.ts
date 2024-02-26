import { NextFunction, Request, Response } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";

interface UserPayload {
  userId: [];
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      const error = new Error("No token provided");
      (error as any).status = 401; // Change status to 401 for unauthorized
      throw error;
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) {
        const error = new Error("Invalid token");
        (error as any).status = 401; // Change status to 401 for unauthorized
        throw error;
      }
      // req.user = decoded;
      next();
    });
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
