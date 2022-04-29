const app = require("express").Router();
const {
  models: { Beer },
} = require("../../db/index");
const User = require("../../db/models/User");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin} = require("../verifyAuth");
//get all beers
app.get("/", async (req, res, next) => {
  try {
    res.send(await Beer.findAll());
  } catch (ex) {
    next(ex);
  }
});
//get single beer
app.get("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const beer = await Beer.findByPk(req.params.id);
    res.send(beer);
  } catch (ex) {
    next(ex);
  }
});
//add beer
app.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Beer.create(req.body));
  } catch (ex) {
    next(ex);
  }
});
//update beer
app.put("/:id", verifyAdmin, async (req, res, next) => {
  try {
    let id = req.params.id;
    const updatedBeer = await Beer.update(req.body, { where: { id: id}});
    res.status(200).send(updatedBeer);
  } catch (ex) {
    next(ex);
  }
});
//delete beer
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
