import express from "express";
import { googleSignUp, register, login } from "../controllers/authControllers.js";

const router = express.Router();

// Define routes
router.post("/register", register);
router.post("/googleSign-up", googleSignUp);
router.post("/login", login);

export default router;
