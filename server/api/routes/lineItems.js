const app = require("express").Router();
const {
  models: { LineItem, User, Order },
} = require("../../db/index");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin } = require("../verifyAuth");

// get all items by orderId -- this is to get the cart
app.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const currentOrder = await Order.getOrCreateCart(user.id);
    res.send(
      await LineItem.findAll({
        where: {
          orderId: currentOrder.id,
        },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

//this route is to get history of orders, get all the items associated with a particular order
app.get("/order/:orderId", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const order = await Order.findByPk(req.params.orderId);
    if (!order) {
      res.sendStatus(404);
    }
    if (user.id !== order.userId) {
      //we sometimes get 404 because userId changes depending on seed
      res.sendStatus(401);
    }
    res.status(200).send(
      await LineItem.findAll({
        where: {
          orderId: req.params.orderId,
        },
      })
    );
  } catch (err) {
    console.log("ERROR");
    console.log(err);
    next(err);
  }
});




// app.delete("/:id", async (req, res, next) => {
//   try {
//     const targetItem = await Order.findByPk(req.params.id);
//     await targetItem.destroy();
//     res.sendStatus(204);
//   } catch (ex) {
//     next(ex);
//   }
// });

app.post("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const currentOrder = await Order.getOrCreateCart(user.id);
    await LineItem.addToOrder(
      req.body.name,
      req.body.beerId,
      req.body.wineId,
      req.body.quantity,
      req.body.price,
      currentOrder.id
    );
    await Order.calculatePriceItems(currentOrder.id);

    // Return entire updated cart
    res.status(201).send(
      await LineItem.findAll({
        where: {
          orderId: currentOrder.id,
        },
      })
    );
  } catch (ex) {
    next(ex);
  }
});

app.put('/cart', async(req,res,next)=> {
  try{
    const user = await User.findByToken(req.headers.authorization); 
    console.log(req.body)
    await LineItem.removeFromCart(req.body.lineItemId, req.body.quantity)
    res.send(
      await LineItem.findAll({
        where: {
          orderId: req.body.orderId,
        },
      })
    );
  } catch(ex) {
    next(ex)
  } 
})
// app.put("/", async(req,res,next)=>{
//   try{
//     const user = await User.findByToken(req.headers.authorization);
//     const currentOrder = await Order.getOrCreateCart(user.id);
//     res.send(
//       await LineItem.findAll({
//         where: {
//           orderId: currentOrder.id,
//         },
//       })
//     );
//     res.json(req.user.removeFromCart(req.body.product, req.body.quantity))
//   }catch(ex){
//     next(ex)
//   }
// })
module.exports = app;
