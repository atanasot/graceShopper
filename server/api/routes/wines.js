const app = require("express").Router();
const { verify } = require("jsonwebtoken");
const {
  models: { Wine },
} = require("../../db/index");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin} = require("../verifyAuth");
app.get("/", async (req, res, next) => {
  try {
    res.send(await Wine.findAll());
  } catch (ex) {
    next(ex);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const wine = await Wine.findByPk(req.params.id);
    res.send(wine);
  } catch (ex) {
    next(ex);
  }
});

// app.post("/", async (req, res, next) => {
//   try {
        //TBD
//   } catch (ex) {
//     next(ex);
//   }
// });
app.delete("/:id", verifyUserOrAdmin, async (req, res, next) => {
  try {
    const wine = await Wine.findByPk(req.params.id);
    await wine.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
