import mongoose from "mongoose";
import User from "../models/UserModel.js";
export const getSideBarUser = async(req,res)=>{
    try {
        
        const loggedInUser = req.user._id;
        
        const users = await User.find({_id: {$ne:loggedInUser}}).select("-password").select("-createdAt").select("-updatedAt");
        if(!users){
            return res.status(400).send({
                message:"Mo user found",
                success:false
            })
        }
        return res.status(200).send({
            message:users,
            success:true
        })

    } catch (error) {
        return res.status(400).send({
            message:`Server Error ${error}`,
            success:false
        })
        
    }
}