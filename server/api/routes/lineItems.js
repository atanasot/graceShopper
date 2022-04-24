const app = require("express").Router();
const {
  models: { LineItem, User, Wine, Beer },
} = require("../../db/index");

app.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(
      await LineItem.findAll({
        where: { userId: user.id },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

app.post("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.status(201).send(await LineItem.create({
      beerId: req.body.beerId,
      wineId: req.body.wineId,
      quantity: req.body.quantity,
      price: req.body.price,
      userId: user.id
    }))

    res.status(201).send();
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
