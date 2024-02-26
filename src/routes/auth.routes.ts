import express from "express";
import { login, signup, generatePdf } from "../controllers/auth.controller";
import verifyToken from "../config/verifyToken";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/generate-pdf", verifyToken, generatePdf);
export default router;
