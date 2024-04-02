import express from "express";
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from "../controllers/userController.js";
const router = express.Router();

// USER REGISTER
router.post("/", registerUser);

// AUTHENTICATE USER
router.post("/auth", authUser);

// LOGOUT USER
router.post("/logout", logoutUser);

// GET USER PROFILE & UPDATEUSRPROFILE
router.route("/profile").get(getUserProfile).put(updateUserProfile);


export default router;