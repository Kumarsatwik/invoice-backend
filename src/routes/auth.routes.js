import express from "express";
import { login, signup, home } from "../controllers/auth.controller.js";
import { verifyToken } from "../config/verifyToken.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/", verifyToken, home);

export default router;
