const db = require('../models');
const encryptService = require('./encryptService');

const service = {
  async createDeafults(){
    db.User.create({userName: "Raphael Jackson", password: await encryptService.encryptPassword("rjpassword"), currency: 1000})
    db.User.create({userName: "Tesuser Mc'Testson", password: await encryptService.encryptPassword("testpassword"), currency: 1000})
    db.User.create({userName: "Barna", password: await encryptService.encryptPassword("barnapass"), currency: 1000})
    db.Item.create({sellable: false, name: "Big box of nothing", description: "I inherited this from my great grand aunt.", photoUrl: "https://bigboxofnothing.weebly.com/uploads/4/1/1/6/41165671/4835906.jpg?250", price: 10, UserId: 1})
    db.Item.create({sellable: false, name: "Phone", description: "A nice phone", photoUrl: "https://pluspng.com/img-png/iphone-png-related-iphone-png-632.png", price: 30, UserId: 3})
  }
}

module.exports = service;