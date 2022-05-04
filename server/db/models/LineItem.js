const Sequelize = require("sequelize");
const { DECIMAL, INTEGER, STRING } = Sequelize;
const db = require("../db");

const LineItem = db.define("lineitem", {
  name: {
    type: STRING,
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
  name,
  beerId,
  wineId,
  quantity,
  price,
  orderId
) {
  try {
    const duplicate = await LineItem.findAll({
      where: {
        name: name,
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
        name: name,
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

LineItem.removeFromCart = async function (lineItemId, quantity) {
  try {
    const lineItem = await LineItem.findByPk(lineItemId);

    if (lineItem) {
      if (lineItem === 0 || lineItem.quantity - quantity === 0) {
        await lineItem.destroy();
      } else {
        await lineItem.update({ quantity: lineItem.quantity - quantity });
      }
    }
  } catch (ex) {
    const error = Error("error in LineItem.removeFromCart");
    error.status = 500;
    throw error;
  }
};

module.exports = LineItem;
