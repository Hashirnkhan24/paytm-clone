import express from "express";
import { updateBody, userData } from "../types.js";
import { User } from "../models/user.model.js" 
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js";
import { authMiddleware } from "../middleware.js";
import { Account } from "../models/bank.model.js";

const router = express.Router();

router.post('/signup', async(req, res) => {
    const { username, firstName, lastName, password } = req.body;
    const parsedUserData = userData.safeParse({ username, firstName, lastName, password })
    
    if(parsedUserData.success && !(await User.findOne({ username : username}))) {

        try {
            // Creating User
            const user = await User.create({
                username : username,
                firstName : firstName,
                lastName : lastName,
                password : password,
            })

            // Generating jwt token
            const userId = user._id
            const token = jwt.sign({userId}, JWT_SECRET) 

            // Assigning random initial balance to user account (as it is not integrated to some bank server)
            const balance = 1 + Math.random() * 10000
            await Account.create({userId : userId, balance : balance}) 

            // User created successfully
            res.status(200).json({
                message : "User created successfully",
                token : token
            })
        } catch (error) {
            // Error creating user
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


router.put('/', authMiddleware, async(req, res) => {
    const { password, firstName, lastName } = req.body
    const parsedUpdateBody  = updateBody.safeParse({ password, firstName, lastName })

    if(!parsedUpdateBody.success) {
        res.status(411).json({
            message : "Error updating information"
        })
    }

    try {
        const updateData = {}
            if(password) updateData.password = password;
            if(firstName) updateData.firstName = firstName;
            if(lastName) updateData.lastName = lastName;

        await User.updateOne({_id : req.userId}, updateData)
        res.status(200).json({
            message : "Updated successfully"
        })
    } catch(err) {
        res.status(411).json({
            message : "Error while updating information"
        })
    }
})

router.get('/bulk', async (req, res) => {
    const filter = req.query.filter || "";

    try {
            const users = await User.find({
            $or: [
            { "username": { $regex: filter, $options: "i" } },
            { "firstName": { $regex: filter, $options: "i" } },
            { "lastName": { $regex: filter, $options: "i" } }
        ]})

        res.status(200).json({
            user : users.map((user) => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })
        } catch(err) {
            res.status(411).json({
                message : "User not found"
        })
    }
})
export default router