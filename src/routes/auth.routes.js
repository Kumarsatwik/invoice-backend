import express from "express";
import {
  login,
  signup,
  home,
  generatePdf,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../config/verifyToken.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/", verifyToken, home);
router.post("/generate-pdf", verifyToken, generatePdf);
export default router;
