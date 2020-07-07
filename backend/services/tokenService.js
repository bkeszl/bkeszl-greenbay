const jwt = require('jsonwebtoken');

const tokenService = {
  generateToken(user) {
    return jwt.sign({ user }, process.env.TOKEN_SECRET, { expiresIn: 3600 });
  },
};

module.exports = tokenService;