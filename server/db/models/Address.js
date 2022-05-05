const Sequelize = require("sequelize");
const db = require("../db");
const { STRING } = Sequelize;

const Address = db.define("address", {
  line1: {
    type: STRING,
    allowNull: false,
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
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please provide a city name",
      },
    },
  },
  state: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please provide a state",
      },
    },
    defaultValue: "NY",
  },
  zip: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Please provide a zip code",
      },
    },
    defaultValue: "04578",
  },
});

module.exports = Address;
