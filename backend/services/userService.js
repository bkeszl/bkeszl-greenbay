const db = require("../models");
const encryptService = require("./encryptService");

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
};

module.exports = userService;
