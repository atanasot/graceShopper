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

module.exports = app;
