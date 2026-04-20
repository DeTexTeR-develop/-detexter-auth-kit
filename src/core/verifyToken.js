const jwt = require('jsonwebtoken');

const verifyToken = (token , secret) => {
    console.log("this got this verify")
    return jwt.verify(token, secret);
};


module.exports = verifyToken;