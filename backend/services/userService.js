const db = require("../models");
const encryptService = require("./encryptService");
const tokenService = require("./tokenService");

const userService = {
  async registerUser(req, res) {
    const checkForUserInDb = await db.User.findAll({
      where: { userName: req.body.username },
    });

    if (checkForUserInDb.length > 0) {
      return res.status(409).json({ message: "User already in DB" });
    }

    db.User.create({
      userName: req.body.username,
      password: await encryptService.encryptPassword(req.body.password),
      currency: 0,
    })
      .then(() => {
        res.send({ message: "User succesfully created" });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  },
  async loginUser(req, res) {
    const checkForUserInDb = await db.User.findAll({
      raw: true,
      where: { userName: req.body.username },
    });

    if (checkForUserInDb.length === 0) {
      return res.status(401).json({ message: "Login failed: no user" });
    }

    const passwordCheck = await encryptService.comparePasswords(
      req.body.password,
      checkForUserInDb[0].password
    );

    if (passwordCheck) {
      const user = {
        id: checkForUserInDb[0].id,
        username: checkForUserInDb[0].userName,
      };
      const token = tokenService.generateToken(user);
      res.status(200).json({ message: "Login success", token: token });
    } else {
      res.status(401).json({ message: "Login failed: wrong pass" });
    }
  },
};

module.exports = userService;
