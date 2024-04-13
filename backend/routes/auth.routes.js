  import express from "express";
  import {signup,login, logout} from "../controllers/auth.controller.js"

  const router = express.Router();

  router.post("/api/auth/signup",signup);


  router.posg("/api/auth/login",login);


  router.post("/api/auth/logout",logout);
  export default router;