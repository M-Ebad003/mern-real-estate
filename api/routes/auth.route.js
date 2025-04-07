import express from "express";
import { google, SignIn, SignUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post('/google', google);

export default router;
