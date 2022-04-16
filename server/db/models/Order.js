const Sequelize = require("sequelize");
const { STRING, ENUM, DECIMAL, INTEGER, BOOLEAN } = Sequelize;
const db = require("../db");

const Order = db.define("order", {
  total: {
    type: STRING,
  },
  lineItems: {
    type: INTEGER,
  },
  isCart: {
    type: BOOLEAN,
  },
});

module.exports = Order;
