const app = require("express").Router();
const {
  models: { User },
} = require("../../db/index");

app.get("/", async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
