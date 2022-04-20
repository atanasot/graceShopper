const Sequelize = require("sequelize");
const { DECIMAL, INTEGER } = Sequelize;
const db = require("../db");

const LineItem = db.define("lineitem", {
  quantity: {
    type: INTEGER,
  },
  price: {
    type: DECIMAL,
  },
});

module.exports = LineItem;
