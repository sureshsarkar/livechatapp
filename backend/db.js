import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbURL = process.env.DB_URI;

 const dbConnect = async ()=>{
    try {
       await mongoose.connect(dbURL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error to connect MongoDB",error.message);
    }
    mongoose.connect(dbURL);
}

export default dbConnect;