const jwt = require('jsonwebtoken');
const verifyToken = require('../src/core/verifyToken')
const extractToken = require('../src/utils/extractToken');

const authMiddleware = (options) => {
    return function(req, res ,next){
        const token = extractToken(req);
        if(!token) return res.status(401).json({message : "No token provided"});
        try{
            const decoded = verifyToken(token, options.secret);
            console.log(decoded);
            req.user = decoded;
            next();
        }catch(err){
            return res.status(401).json({message: "Invalid token"});
        }
    };
};


module.exports = authMiddleware;