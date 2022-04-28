const app = require("express").Router();
const {
  models: { LineItem, User, Order },
} = require("../../db/index");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin} = require("../verifyAuth");

// what is this for?
app.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const currentOrder = await Order.getOrCreateCart(user.id);
    res.send(
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

//this route is to get history of orders, get all the items associated with a particular order
app.get("/order/:orderId", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const order = await Order.findByPk(req.params.orderId);
    if (!order) {
      res.sendStatus(404);
    }
    if (user.id !== order.userId) {
      res.sendStatus(401);
    }
    res.status(200).send(
      await LineItem.findAll({
        where: {
          orderId: req.params.orderId,
        },
      })
    );
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    next(err);
  }
});

app.post("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const currentOrder = await Order.getOrCreateCart(user.id);
    await LineItem.addToOrder(
      req.body.name,
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
