const db = require("../models");

const itemService = {
  findAllItems(req, res) {
    db.Item.findAll().then((items) => res.send(items));
  },
  newItem(req, res) {
    db.Item.create({
      sellable: true,
      description: req.body.description,
      photoUrl: req.body.photoUrl,
      price: req.body.price,
    }).then((result) => res.send({ status: result }));
  },
};

module.exports = itemService;
