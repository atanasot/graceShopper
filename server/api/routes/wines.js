const app = require("express").Router();
const { verify } = require("jsonwebtoken");
const {
  models: { Wine },
} = require("../../db/index");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin} = require("../verifyAuth");

//get all beers
app.get("/", async (req, res, next) => {
  try {
    res.send(await Wine.findAll());
  } catch (ex) {
    next(ex);
  }
});
//get single beer
app.get("/:id", async (req, res, next) => {
  try {
    const wine = await Wine.findByPk(req.params.id);
    res.send(wine);
  } catch (ex) {
    next(ex);
  }
});
//add beer
app.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Wine.create(req.body));
  } catch (ex) {
    next(ex);
  }
});
//update beer
app.put("/:id", verifyAdmin, async (req, res, next) => {
  try {
    let id = req.params.id;
    const updatedWine = await Wine.update(req.body, { where: { id: id}});
    res.status(200).send(updatedWine);
  } catch (ex) {
    next(ex);
  }
});
//delete beer
app.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const wine = await Wine.findByPk(req.params.id);
    await wine.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
