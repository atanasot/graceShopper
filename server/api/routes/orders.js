const app = require("express").Router();
const {
  models: { Order, User, LineItem },
} = require("../../db/index");
const { isLoggedIn, verifyUserOrAdmin, verifyAdmin} = require("../verifyAuth");

// get a history of orders
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

// app.post("/old", async (req, res, next) => {
//   try {
//     // const user = await User.findByToken(req.headers.authorization) //find a user
//     // console.log('user>>>>>', user);

//     //find or create method - finds a record based on conditions if it doesn't find it it will immediately create
//     //check isCart if it exists - if it exists user is already adding items
//     //if you don't find a cart create it because user is about to add something
//     const [order, created] = await Order.findOrCreate({
//       where: { isCart: true },
//       defaults: {},
//     });

//     //for particular product i'm about to add have i added it to the cart already if i have update the quantity else update from scratch
//     let [lineItem, lineItemCreated] = await LineItem.findOrCreate({
//       where: { productId: req.query.productId, orderId: order.id },
//       defaults: { quantity: req.query.quantity }, // if it doesn't find lineItem it will create it
//     });
//     //if it finds record update particular line item with new quantity and return lineItem
//     if (!lineItemCreated) {
//       lineItem = await lineItem.update({ quantity: req.query.quantity });
//     }

//     res.send(lineItem);
//     ``;
//   } catch (ex) {
//     next(ex);
//   }
// });
// //TBD: On Frontend need to send authorization, productID and quantity to backend

// app.post("/", async (req, res, next) => {
//   try {
//     res.status(201).send();
//     /*
//     const user = await User.findByToken(req.headers.authorization);

//     const lineItems = await LineItem.findAll({
//       where: {
//         userId: user.id,
//       },
//     });
//     // for each lineItem, calculate total (do for each or a for loop)
//     const total = lineItems.reduce((acc, lineItem) => {
//       acc += lineItem.price * 1 * lineItem.quantity;
//       return acc;
//     }, 0);
//     const itemsNum = lineItems.reduce((acc, lineItem) => {
//       acc += lineItem.quantity;
//       return acc;
//     }, 0);
//     res.status(201).send(
//       await Order.create({
//         total: total,
//         lineItems: itemsNum,
//         isCart: true,
//         userId: user.id,
//       })
//     );
//     */
//     // res.status(201).send(
//     //     await Order.findAll({
//     //         userId: user.id
//     //     })
//     // )
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = app;
