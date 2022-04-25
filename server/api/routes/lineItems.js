const app = require("express").Router();
const {
  models: { LineItem, User, Wine, Beer },
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
    const duplicate = await LineItem.findAll({
      where: {
        beerId: req.body.beerId ? req.body.beerId : null,
        wineId: req.body.wineId ? req.body.wineId : null,
        userId: user.id,
        orderId: null, // make sure the order is unfullfilled
      },
    });
    if (duplicate.length) {
      await duplicate[0].update({
        quantity: duplicate[0].quantity + req.body.quantity,
      });
    } else {
      await LineItem.create({
        beerId: req.body.beerId,
        wineId: req.body.wineId,
        quantity: req.body.quantity,
        price: req.body.price,
        userId: user.id,
      });
    }
    // Return entire updated cart
    res.status(201).send(
      await LineItem.findAll({
        where: {
          userId: user.id,
          orderId: null, // make sure the order is unfullfilled
        },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
