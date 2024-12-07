import express from "express";
import { googleSignup, register, login } from "../controllers/authControllers";

const router = express.Router();

router.post("/register", register);
router.post("/googleSign-up", googleSignup);
router.post("/login", login);

export default router;
