const app = require("express").Router();
const {
  models: { Beer },
} = require("../../db/index");
const User = require("../../db/models/User");
const Sequelize = require('sequelize');
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin} = require("../verifyAuth");
//get all beers
app.get("/", async (req, res, next) => {
  try {
    res.send(await Beer.findAll());
  } catch (ex) {
    next(ex);
  }
});
app.get("/search", async (req, res, next) => {
  try {
    let queryObject = { where: {} };    
    if (req.query.type) queryObject.where.type = { [Sequelize.Op.eq]: req.query.type };    

    const beers = await Beer.findAll(queryObject);
    res.send(beers);
  } catch (ex) {
    next(ex);
  }
});
app.get("/filter", async (req, res, next) => {
  try {
    res.send(await Beer.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${req.query.query}%`
        }
      }
    }))
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
app.post("/", verifyAdmin, async (req, res, next) => {
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
app.delete("/:id", verifyAdmin, async (req, res, next) => {
  try {
    const beer = await Beer.findByPk(req.params.id);
    await beer.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});


module.exports = app;
