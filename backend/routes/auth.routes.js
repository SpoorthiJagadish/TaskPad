import express from "express";
import { signup, login, logout } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/api/auth/signup", signup);

router.post("/api/auth/login", login);

router.post("/api/auth/logout", logout);
export default router;
