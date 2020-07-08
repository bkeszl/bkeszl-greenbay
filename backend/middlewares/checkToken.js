const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {  
  if (req.url === "/user/signup" || req.url === "/user/login") {
    next();
    return;
  }
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.TOKEN_SECRET
    );
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ status: err.message });
  }
};

module.exports = checkToken;
