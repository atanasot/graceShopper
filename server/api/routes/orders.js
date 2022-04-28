const app = require("express").Router();
const {
  models: { Order, User },
} = require("../../db/index");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin} = require("../verifyAuth");

// get a history of orders per user
app.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(
      await Order.findAll({
        where: {
          userId: user.id,
        },
      })
    );
  } catch (err) {
    next(err);
  }
});

module.exports = app;
