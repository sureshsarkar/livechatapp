import express from 'express';
import { login,alluser, logout, signup } from '../controllers/authController.js';
const router = express.Router();


router.post("/signup",signup);
router.post("/login",login);
router.get("/alluser",alluser);
router.get("/logout",logout);


export default router