import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const  generateTokenAndSetCookie = (userId,res)=>{
    // create token   
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"15d"});
   
    // set cookie 
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true, // prevent XSS attacks cross-site scripting attacks
        sameSite: process.env.NODE_ENV !== "development"// CSRF attacks cross-site request forgery attacks
    });
}

export default generateTokenAndSetCookie;