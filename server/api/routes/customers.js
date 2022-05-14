const app = require("express").Router();
const User = require("../../db/models/User");
const Address = require("../../db/models/Address");

app.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(await User.findAll());
  } catch (ex) {
    next(ex);
  }
});

//add customer
app.post("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    user ? res.status(201).send(await User.create(req.body)) : res.status(401);
  } catch (ex) {
    next(ex);
  }
});

//add customer address
app.post("/address", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    user
      ? res.status(201).send(await Address.create(req.body))
      : res.status(401);
  } catch (ex) {
    next(ex);
  }
});

// update address
app.put("/address", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    user
      ? res
          .status(200)
          .send(
            await Address.update(
              {
                line1: req.body.line1,
                line2: req.body.line2,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
              },
              { where: { userId: user.id } }
            )
          )
      : res.status(403);
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
