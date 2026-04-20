const extractToken = (req) => {
  const header = req.headers.authorization;
  if (!header) return null;
  return header.split(" ")[1];
};

module.exports = extractToken;