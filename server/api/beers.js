const app = require("express").Router();
const {
  models: { Beer },
} = require("../db/index");

app.get("/", async (req, res, next) => {
  try {
    res.send(await Beer.findAll());
  } catch (ex) {
    next(ex);
  }
});
app.post("/", async (req, res, next) => {
  try {
    res.send(await Beer.findAll());
  } catch (ex) {
    next(ex);
  }
});
app.delete("/:id", async (req, res, next) => {
  try {
    const beer = await Beer.findByPk(req.params.id);
    await beer.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
