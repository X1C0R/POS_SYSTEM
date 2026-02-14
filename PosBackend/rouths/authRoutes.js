import express from "express";
import { registerUser } from "../controllers/authRegister.js";
import { loginUser } from "../controllers/authLogin.js";
const router = express.Router();


router.post("/login", loginUser)
router.post("/register", registerUser);

export default router;
