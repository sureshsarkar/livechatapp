import express from "express";
import {getSideBarUser} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/",protectRoute,getSideBarUser);

export default router