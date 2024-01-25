import express from "express";
import { userData } from "../types";
import { User } from "../models/user.model.js" 
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js";

const router = express.Router();

router.post('/signup', async(req, res) => {
    const { username, firstName, lastName, password } = req.body;
    const parsedUserData = userData.safeParse({ username, firstName, lastName, password })
    
    if(parsedUserData.success && !(await User.findOne({ username : username}))) {
        try {
            const user = await User.create({
                username : username,
                firstName : firstName,
                lastName : lastName,
                password : password,
            })
            const userId = user._id
            const token = jwt.sign(userId, JWT_SECRET) 
            res.status(200).json({
                message : "User created successfully",
                token : token
            })
        } catch (error) {
            console.log(error)
            res.status(411).json({
                message : "Email already taken"
            })
        }
    }

    res.status(411).json({
        message : " Incorrect Inputs"
    })
})

router.post("/signin", async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username : username, password : password });
    if(user) {
        try {
            const userId = user._id
            const token = jwt.sign(userId, JWT_SECRET)

            res.status(200).json({
                token : token
            })
        } catch (error) {
            console.log(error)
            res.status(411).json({
                message : "Error signing in"
            })
        }
    }
    res.status(411).json({
        message : "Invalid User details"
    })
})
export default router