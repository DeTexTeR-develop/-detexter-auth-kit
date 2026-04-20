const jwt = require('jsonwebtoken');

const signJwtToken  = (payload, options) => {
    return jwt.sign(payload, options.secret, {
        expiresIn: options.expiresIn || "1h",
    });
};

module.exports = signJwtToken;