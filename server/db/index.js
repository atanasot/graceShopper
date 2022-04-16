//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Wine = require("./models/Wine");
const Beer = require("./models/Beer");
const Order = require("./models/Order");

//associations could go here!
Order.belongsTo(User);
User.hasMany(Order);
Wine.belongsTo(Order);
Order.hasMany(Wine);
Beer.belongsTo(Order);
Order.hasMany(Beer);
Order.hasOne(Order, { foreignKey: "cartId" });

module.exports = {
  db,
  models: {
    User,
    Wine,
    Beer,
    Order,
  },
};
