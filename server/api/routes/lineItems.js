const app = require("express").Router();
const {
  models: { LineItem },
} = require("../../db/index");

app.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await LineItem.create(req.body))
  } catch (ex) {
    next(ex);
  }
});

module.exports = app