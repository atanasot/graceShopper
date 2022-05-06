const app = require("express").Router();
const {
  models: { LineItem, User, Order },
} = require("../../db/index");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin } = require("../verifyAuth");

// get all items by orderId -- this is to get the cart
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
      //we sometimes get 404 because userId changes depending on seed
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

app.put("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    await LineItem.updateItemQty(req.body.lineItemId, req.body.quantity);

    const currentOrder = await Order.getOrCreateCart(user.id); // a user can have only one cart

    await currentOrder.update({
      lineItems: currentOrder.lineItems - req.body.quantity,
    });

    await Order.calculatePriceItems(currentOrder.id);

    if (!currentOrder.lineItems) {
      await Order.destroy();
    }
    res.send(
      await LineItem.findAll({
        where: {
          orderId: req.body.orderId,
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
    if (Array.isArray(req.body)) {
      for (let i = 0; i < req.body.length; i++) {
        await LineItem.addToOrder(
          req.body[i].name,
          req.body[i].beerId,
          req.body[i].wineId,
          req.body[i].quantity * 1,
          req.body[i].price,
          currentOrder.id
        );
      }
    } else {
      await LineItem.addToOrder(
        req.body.name,
        req.body.beerId,
        req.body.wineId,
        req.body.quantity,
        req.body.price,
        currentOrder.id
      );
    }

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
