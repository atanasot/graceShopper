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

// Add lineitem to order, or update if already exists
LineItem.addToOrder = async function (
  beerId,
  wineId,
  quantity,
  price,
  orderId
) {
  try {
    const duplicate = await LineItem.findAll({
      where: {
        beerId: beerId ? beerId : null,
        wineId: wineId ? wineId : null,
        orderId: orderId,
      },
    });
    if (duplicate.length) {
      await duplicate[0].update({
        quantity: duplicate[0].quantity + quantity,
      });
    } else {
      await LineItem.create({
        beerId: beerId,
        wineId: wineId,
        quantity: quantity,
        price: price,
        orderId: orderId,
      });
    }
  } catch (ex) {
    const error = Error("error in LineItem.addToOrder");
    error.status = 500;
    throw error;
  }
};

module.exports = LineItem;
