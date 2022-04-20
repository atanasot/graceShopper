const app = require("express").Router();
const {
  models: { Order, User},
} = require("../../db/index");
const LineItem = require("../../db/models/LineItem");

app.post("/", async (req, res, next) => {
try{
    // const user = await User.findByToken(req.headers.authorization) //find a user
    // console.log('user>>>>>', user); 

    //find or create method - finds a record based on conditions if it doesn't find it it will immediately create
    //check isCart if it exists - if it exists user is already adding items
    //if you don't find a cart create it because user is about to add something
    const [order, created] = await Order.findOrCreate({
        where: { isCart: true },
        defaults: {}
    });

    //for particular product i'm about to add have i added it to the cart already if i have update the quantity else update from scratch
    let [lineItem, lineItemCreated] = await LineItem.findOrCreate({
        where: { productId: req.query.productId, orderId: order.id}, 
        defaults: {quantity: req.query.quantity}, // if it doesn't find lineItem it will create it 
    })
    //if it finds record update particular line item with new quantity and return lineItem
    if(!lineItemCreated) {
        lineItem = await lineItem.update({ quantity: req.query.quantity})
    }

    res.send(lineItem);``
}catch(ex) {
    next(ex);
}
});
//TBD: On Frontend need to send authorization, productID and quantity to backend
module.exports = app;