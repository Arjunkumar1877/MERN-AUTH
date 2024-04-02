import expressAsyncHandler from "express-async-handler"
import { User } from "../models/userModel.js"


export const  authUser = expressAsyncHandler(async(req, res)=>{
    try {

       res.status(200).json({message: "Success"})
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
        res.status(200).json({message: "Success"})
       
    } catch (error) {
        console.log(error.message)
    }
})



export const  getUserProfile = expressAsyncHandler(async(req, res)=>{
    try {
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


