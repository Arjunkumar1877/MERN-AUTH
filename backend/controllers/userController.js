import expressAsyncHandler from "express-async-handler"
import { User } from "../models/userModel.js"
import { generateToken } from "../utils/generateToken.js"

export const  authUser = expressAsyncHandler(async(req, res)=>{
    try {
  const { email, password} = req.body;

  const user = await User.findOne({email: email});

  if(user && (await user.matchPassword(password))){
       generateToken(res, user._id);

       res.status(200).json(user);
  }else{
    res.status(400).json("Invalid credential");
    throw new Error('Invalid email or password');
  }
       
    } catch (error) {
        console.log(error.message)
    }
})



export const  registerUser = expressAsyncHandler(async(req, res)=>{
    try {
        const { name, email, password } = req.body;
        console.log(name)

        const userExists = await User.findOne({email: email});
        if(userExists){
            res.status(400);
            res.json({message: "User already exist"})
            throw new Error("User already exist");
            
        }

        const user = await User.create({
            name, email, password
        })

        if(user){
            generateToken(res, user._id);
            res.status(200).json(user)
        }else{
            res.status(400);
            throw new Error('Invalid user data');
        }
       
    } catch (error) {
        console.log(error.message)
    }
})




export const  logoutUser = expressAsyncHandler(async(req, res)=>{
    try {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        });
        res.status(200).json({message: "User Logged Out"})
       
    } catch (error) {
        console.log(error.message)
    }
})



export const  getUserProfile = expressAsyncHandler(async(req, res)=>{
    try {

        console.log(req)
        res.status(200).json({message: "Success"})
       
    } catch (error) {
        console.log(error.message)
    }
})



export const  updateUserProfile = expressAsyncHandler(async(req, res)=>{
    try {
        res.status(200).json({message: "Success"})
       
    } catch (error) {
        console.log(error.message)
    }
})


