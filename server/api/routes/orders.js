const app = require("express").Router();
const {
  models: { Order, User },
} = require("../../db/index");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin } = require("../verifyAuth");

// get a history of completed orders per user
// this route displays fullfilled orders
app.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(
      await Order.findAll({
        where: {
          userId: user.id,
          isCart: false,
        },
      })
    );
  } catch (err) {
    next(err);
  }
});

// admin routes need some token or authorization
app.get("/admin", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const orders = await Order.findAll({ include: User });
    user ? res.send(orders) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
