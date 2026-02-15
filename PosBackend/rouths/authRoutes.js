import express from "express";
import { registerUser } from "../controllers/authRegister.js";
import { loginUser } from "../controllers/authLogin.js";
import { authMiddleware } from "../middleWare/middleware.js";
import { getMe } from "../controllers/authUser.js";

const router = express.Router();


router.post("/login", loginUser)
router.post("/register", registerUser);
router.get("/me", authMiddleware, getMe);
export default router;
