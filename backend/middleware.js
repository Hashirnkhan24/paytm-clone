import jwt from 'jsonwebtoken'
import JWT_SECRET from './config.js'

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message : "No Header found"
        })
    }
    const token = authHeader.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next()
    } catch (err) {
        return res.status(403).json({})
    }
}

export { authMiddleware }