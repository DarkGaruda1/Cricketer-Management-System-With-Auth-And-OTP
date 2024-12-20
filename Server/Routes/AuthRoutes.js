import express from "express";
import { signup } from "../Controllers/AuthController/SignUp.js";
import { login } from "../Controllers/AuthController/Login.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
export default router;
