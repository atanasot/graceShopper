const app = require("express").Router();
const User = require("../../db/models/User");

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

module.exports = app;
