import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers["authorization"])
      return res.status(401).json({ message: "No token provided" });
    const token = req.headers["authorization"];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: "Invalid token" });
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Something went wrong" });
  }
};
