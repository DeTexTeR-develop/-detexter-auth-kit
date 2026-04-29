const extractToken = (req) => {
    // 1. Check cookies first
    if (req.cookies?.token) {
        return req.cookies.token;
    }

    // 2. Check Authorization header
    const header = req.headers.authorization;
    if (header && header.startsWith("Bearer ")) {
        return header.split(" ")[1];
    }

    return null;
};

module.exports = extractToken;
