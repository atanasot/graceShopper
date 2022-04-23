const Sequelize = require("sequelize");
const { STRING, ENUM, DECIMAL, INTEGER, TEXT } = Sequelize;
const db = require("../db");

const Beer = db.define("beer", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  brand: {
    type: STRING,
  },
  state: {
    type: STRING,
  },
  country: {
    type: STRING,
  },
  type: {
    type: ENUM("Lager", "Ale"),
    defaultValue: "Lager",
  },
  style: {
    type: ENUM(
      "Pale Lager",
      "Pilsner",
      "Dunkel",
      "Bock",
      "Wheat Beer",
      "Pale Ale",
      "Porter",
      "Stout",
      "IPA",
      "Fruit Beer"
    ),
    defaultValue: "Pale Lager",
  },
  ABV: {
    type: DECIMAL(10, 2),
  },
  imgURL: {
    type: STRING,
  },
  price: {
    type: DECIMAL(10, 2),
  },
  inventoryCount: {
    type: INTEGER,
  },
  description: {
    type: TEXT,
  },
});

module.exports = Beer;
