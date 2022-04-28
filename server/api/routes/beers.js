const app = require("express").Router();
const {
  models: { Beer },
} = require("../../db/index");
const User = require("../../db/models/User");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin} = require("../verifyAuth");

app.get("/", async (req, res, next) => {
  try {
    res.send(await Beer.findAll());
  } catch (ex) {
    next(ex);
  }
});

app.get("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const beer = await Beer.findByPk(req.params.id);
    res.send(beer);
  } catch (ex) {
    next(ex);
  }
});

// app.post("/",verifyUserAndAdmin, async (req, res, next) => {
//   try {
//     TBD
//   } catch (ex) {
//     next(ex);
//   }
// });
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
