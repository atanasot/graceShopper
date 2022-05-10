const app = require("express").Router();
const { verify } = require("jsonwebtoken");
const {
  models: { Wine, User },
} = require("../../db/index");
const Sequelize = require("sequelize")
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin } = require("../verifyAuth");

//get all wine
app.get("/", async (req, res, next) => {
  try {
    res.send(await Wine.findAll());
  } catch (ex) {
    next(ex);
  }
});
app.get("/search", async (req, res, next) => {
  try {
    let queryObject = { where: {} };    
    if (req.query.type) queryObject.where.type = { [Sequelize.Op.eq]: req.query.type };    
    //if (req.query.year) queryObject.where.year = { [Sequelize.Op.gt]: 10 };    

    const wines = await Wine.findAll(queryObject);
    res.send(wines);
  } catch (ex) {
    next(ex);
  }
});
//get single wine
app.get("/:id", async (req, res, next) => {
  try {
    const wine = await Wine.findByPk(req.params.id);
    res.send(wine);
  } catch (ex) {
    next(ex);
  }
});
//add wine
app.post("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    user ? res.status(201).send(await Wine.create(req.body)) : res.status(401);
  } catch (ex) {
    next(ex);
  }
});
//update wine
app.put("/:id", verifyAdmin, async (req, res, next) => {
  try {
    let id = req.params.id;
    const updatedWine = await Wine.update(req.body, { where: { id: id } });
    res.status(200).send(updatedWine);
  } catch (ex) {
    next(ex);
  }
});
//delete wine
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
