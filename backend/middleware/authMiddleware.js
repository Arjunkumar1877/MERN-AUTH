import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";


export const protect = expressAsyncHandler(async(req, res, next)=>{
    let token;

    token = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
console.log(decoded);
            req.user = await User.findById(decoded.userId).select('-password');
            next()
        } catch (error) {
            res.status(401).json(error)
            throw new Error("Invalid token")
        }
    }else{
        res.status(401).json("Not authorized token");
        throw new Error("Not authorized, no token");
    }
})