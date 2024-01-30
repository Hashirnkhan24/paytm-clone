import express from 'express';
import { authMiddleware } from '../middleware.js';
import { Account } from '../models/bank.model.js';
import mongoose from 'mongoose';

const router = express.Router();

// Route to get balance
router.get('/balance', authMiddleware, async(req, res) => {
    try {
        const user = await Account.findOne({
            userId : req.userId
        })

        res.status(200).json({
            balance : user.balance
        })
    } catch(error) {
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
})

// Transfer money to another accout route
router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

        session.startTransaction();
        const { to, amount } = req.body;

        // Fetch the accounts involved in transaction
        const toAccount =  await Account.findOne({userId : to}).session(session)
        const account = await Account.findOne({userId: req.userId}).session(session)

        if(!toAccount) {
            await session.abortTransaction();
            res.status(400).json({
                message : "Invalid user"
            })
        }

        if(!account || account.balance < amount) {
            await session.abortTransaction();
            res.json({
                message : "Insufficient Balance!"
            })
        }

        // Updating the balance amount in db
        await Account.updateOne({
            userId : req.userId
        }, {
            $inc : {
                balance : -amount
            }
        }).session(session)

        await Account.updateOne({
            userId : to
        }, {
            $inc : {
                balance : amount
            }
        }).session(session)
        await session.commitTransaction();

        res.status(200).json({
            message : "Transaction Successful!"
        })
})
export default router