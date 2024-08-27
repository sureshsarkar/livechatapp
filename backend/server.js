import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "../backend/db.js"
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();// configration to get .env file data

const dbURL = process.env.DB_URI;
const PORT = process.env.PORT || 5000;
dbConnect();
// mongoose.connect(dbURL);// 

app.use(express.json());// To get body data
app.use(cookieParser());
app.use(cors());
// creating routes 
app.use("/api/auth",authRoute);
app.use("/api/message",messageRoute);
app.use("/api/users",userRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});