const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptService = {
  async encryptPassword(password) {
      return await bcrypt.hash(password, saltRounds)
  },
  async comparePasswords(providedPassword, actualPassword) {
    return await bcrypt.compare(providedPassword, actualPassword);
  }
}

module.exports = encryptService;