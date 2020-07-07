const db = require("../models");

const itemService = {
  findAllItems(req, res) {
    db.Item.findAll().then((items) => res.send(items));
  },
  newItem(req, res) {
    const missing = [];
    if (req.body.name.trim() === "" || req.body.name === undefined) {
      missing.push("name");
    }
    if (
      req.body.description.trim() === "" ||
      req.body.description === undefined
    ) {
      missing.push("description");
    }
    if (req.body.photoUrl.trim() === "" || req.body.photoUrl === undefined) {
      missing.push("photoUrl");
    }
    if (req.body.price.trim() === "" || req.body.price === undefined) {
      missing.push("price");
    }
    if (missing.length > 0) {
      res.status(406).send({ status: `${missing.join(", ")} is missing` });
      return;
    }

    if (parseFloat(req.body.price) < 0 || !Number.isInteger(parseFloat(req.body.price))) {
      res
        .status(406)
        .send({ status: "Price must be a round positive number!" });
      return;
    }

    const regExForUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    if(!req.body.photoUrl.match(regExForUrl)){
      res
        .status(406)
        .send({ status: "Photo url must be a valid url!" });
      return;
    }

    db.Item.create({
      sellable: true,
      name: req.body.name,
      description: req.body.description,
      photoUrl: req.body.photoUrl,
      price: req.body.price,
      UserId: req.user.user.id,
    })
      .then((result) => res.send({ id: result.id }))
      .catch((err) => {
        res.status(500).send({ status: "Can't create item" });
      });
  },
};

module.exports = itemService;
