const Sequelize = require("sequelize");
const db = require("../db");
const { STRING } = Sequelize;

const Address = db.define("address", {
  line1: {
    type: STRING,
    allowNull: true,
    validate: {
      notEmpty: {
        msg: "Please provide a street name",
      },
    },
  },
  line2: {
    type: STRING,
  },
  city: {
    type: STRING,
    allowNull: true,
    validate: {
      notEmpty: {
        msg: "Please provide a city name",
      },
    },
  },
  state: {
    type: STRING,
    allowNull: true,
    validate: {
      notEmpty: {
        msg: "Please provide a state",
      },
    },
  },
  zip: {
    type: STRING,
    allowNull: true,
    validate: {
      notEmpty: {
        msg: "Please provide a zip code",
      },
    },
  },
});

module.exports = Address;
