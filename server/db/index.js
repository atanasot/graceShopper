//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Wine = require("./models/Wine");
const Beer = require("./models/Beer");
const Order = require("./models/Order");
const LineItem = require("./models/LineItem");

//associations could go here!
Order.belongsTo(User);
User.hasMany(Order);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Wine);
Wine.hasMany(LineItem);
LineItem.belongsTo(Beer);
Beer.hasMany(LineItem);
LineItem.belongsTo(User) // added this so that cart ca be associeted with user



module.exports = {
  db,
  models: {
    User,
    Wine,
    Beer,
    Order,
    LineItem
  },
};
