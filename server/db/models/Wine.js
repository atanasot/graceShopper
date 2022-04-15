const Sequelize = require("sequelize");
const { STRING, ENUM, DECIMAL, INTEGER } = Sequelize;
const db = require("../db");

const Wine = db.define("wine", {
  name: {
    type: STRING,
    allowsNull: false,
    validate: {
      notEmpty: true,
    },
  },
  year: {
    type: INTEGER,
  },
  region: {
    type: STRING,
  },
  type: {
    type: ENUM("Red", "White", "Rose", "Champagne"),
    defaultValue: "Red",
  },
  style: {
    type: STRING,
  },
  abv: {
    type: DECIMAL(10, 2),
  },
  imgURL: {
    type: STRING,
    allowsNull: true,
  },
  price: {
    type: DECIMAL(10, 2),
  },
  inventoryCount: {
    type: INTEGER,
  },
});

module.exports = Wine;
