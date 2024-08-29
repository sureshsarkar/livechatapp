import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";


// signup function 
export const signup =async (req,res)=>{
    try {
        const {fullname,username,password,cpassword,profilePic,gender} = req.body;

        if(password !=cpassword){
            return res.status(400).send({
                message:"Password not match"
            })
        }
        const userExist = await User.findOne({username});
    
        if(userExist){
            return res.status(400).send({
                message:"username already exist",
                status:false
            })
        }
        // get dynamic profilePic
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        
        // hash the password 
        const solt  = await bcrypt.genSalt(10);
         const hashPassword = await bcrypt.hash(password,solt);

        // store data in a variable 
        const userData = ({
            fullname,
            username,
            password:hashPassword,
            gender,
            profilePic:gender=== "male"?boyProfilePic:girlProfilePic
        })
     
        
        const user = await User.create(userData);
      
        if(user){
            generateTokenAndSetCookie(user._id,res);// call function to generate token
            return res.status(201).send({
                message:"Data Added",
                success:true,
                data: user
            })
        }else{
            return res.status(400).send({
                message:error.message,
                status:false
            })
        }

    } catch (error) {
        return res.status(400).send({
            message:`Failed to add data,${error.message}`,
            status:false
        })
    }
}

export const login = async (req,res)=>{
    try {
        const {username,password} = req.body;

        if (!username || !password) {
            return res.status(400).send({
                message: "Please fill the details",
                success: false
            })
        }

        const user = await User.findOne({username});
    
        if(!user){
            return res.status(400).send({
                message: "Invalid username",
                success: false
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).send({
                message: "Invalid password",
                success: false
            })
        }

            generateTokenAndSetCookie(user._id,res);
            res.status(201).send({
                message: "You have successfully login",
                data: user,
            })
        
    } catch (error) {
        res.send("Server Error");
    }
}

export const logout = (req,res)=>{
    try {
        res.cookie("jwt","", {maxAge:"0"})
        res.status(200).send({
            message:"Logout Successfully",
            success:false
        })
    } catch (error) {
        res.status(400).send({
            message: "Failed to logout",
            success:false
        })
    }
}
