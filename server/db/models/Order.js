const Sequelize = require("sequelize");
const { STRING, ENUM, DECIMAL, INTEGER, BOOLEAN } = Sequelize;
const db = require("../db");
const LineItem = require("./LineItem");

const Order = db.define("order", {
  total: {
    type: DECIMAL,
  },
  lineItems: {
    type: INTEGER,
  },
  isCart: {
    type: BOOLEAN,
  },
});

Order.getOrCreateCart = async function (userId) {
  try {
    // Get current order (cart)
    let currentOrder = await Order.findOne({
      where: {
        isCart: true,
        userId: userId,
      },
    });

    // If one doesn't exist create one
    if (!currentOrder) {
      currentOrder = await Order.create({
        total: 0,
        lineItems: 0,
        isCart: true,
        userId: userId,
      });
    }

    return currentOrder;
  } catch (ex) {
    const error = Error("error in Order.getOrCreateCart");
    error.status = 500;
    throw error;
  }
};

Order.calculatePriceItems = async function (orderId) {
  try {
    // Get all items for this order
    const lineItems = await LineItem.findAll({
      where: {
        orderId: orderId,
      },
    });

    // Calculate total cost and number of items in order
    const total = lineItems.reduce((acc, lineItem) => {
      acc += lineItem.price * 1 * lineItem.quantity;
      return acc;
    }, 0);
    const itemsNum = lineItems.reduce((acc, lineItem) => {
      acc += lineItem.quantity;
      return acc;
    }, 0);

    // Update order
    let currentOrder = await Order.findOne({
      where: {
        id: orderId,
      },
    });
    await currentOrder.update({
      total: total,
      lineItems: itemsNum,
    });
  } catch (ex) {
    const error = Error("error in Order.calculatePriceItems");
    error.status = 500;
    throw error;
  }
};

module.exports = Order;
