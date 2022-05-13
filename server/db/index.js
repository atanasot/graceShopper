//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Wine = require("./models/Wine");
const Beer = require("./models/Beer");
const Order = require("./models/Order");
const LineItem = require("./models/LineItem");
const Address = require("./models/Address");

//associations could go here!
Order.belongsTo(User);
User.hasMany(Order);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Wine);
Wine.hasMany(LineItem);
LineItem.belongsTo(Beer);
Beer.hasMany(LineItem);
// LineItem.belongsTo(User);
Address.belongsTo(User);
User.hasOne(Address);

module.exports = {
  db,
  models: {
    User,
    Wine,
    Beer,
    Order,
    LineItem,
    Address,
  },
};
