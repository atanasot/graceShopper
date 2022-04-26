const app = require("express").Router();
const {
  models: { LineItem, User, Order },
} = require("../../db/index");

app.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(
      await LineItem.findAll({
        where: {
          userId: user.id,
          orderId: null, //make sure order is not fullfilled yet
        },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

app.post("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const currentOrder = await Order.getOrCreateCart(user.id);
    await LineItem.addToOrder(
      req.body.beerId,
      req.body.wineid,
      req.body.quantity,
      req.body.price,
      currentOrder.id
    );
    await Order.calculatePriceItems(currentOrder.id);

    // Return entire updated cart
    res.status(201).send(
      await LineItem.findAll({
        where: {
          orderId: currentOrder.id,
        },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
