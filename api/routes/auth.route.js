import express from "express";
import { SignUp } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", SignUp);


export default router;