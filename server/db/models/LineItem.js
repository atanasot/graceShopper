const Sequelize = require("sequelize");
const { DECIMAL, INTEGER, STRING } = Sequelize;
const db = require("../db");

const LineItem = db.define("lineitem", {
  name: {
    type: STRING,
  },
  subtotal: {
    type: INTEGER,
  },
  quantity: {
    type: INTEGER,
  },
  price: {
    type: DECIMAL,
  },
});

module.exports = LineItem;
