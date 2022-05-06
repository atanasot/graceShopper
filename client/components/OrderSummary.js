import React from "react";
import { connect } from "react-redux";

const OrderSummary = ({ orders, lineItems }) => {
  const shipping = 5.99;
  // what is subtotal??
  const subtotal =
    lineItems
      .reduce((accume, current) => accume + current.price * current.quantity, 0)
      .toFixed(2) * 1;

  const total = orders.reduce((acc, order) => {
    acc += order.total * 1;
    return acc;
  }, 0).toFixed(2) * 1

  const taxes = (total * 0.05).toFixed(2) * 1;
  const payment = (shipping + total + taxes).toFixed(2) * 1;
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Subtotal: {subtotal}</p>
      <p>Shipping: {shipping}</p>
      <p>Taxes: {taxes}</p>
      <p>Total: {total}</p>
      <p>Payment Due: {payment}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  if (!state.orders || !state.lineItems) {
    return null;
  }
  return {
    orders: state.orders,
    lineItems: state.lineItems,
  };
};
// const mapDispatch = (dispatch) => {
//   return {
//     updateItemQty: (lineItemId, orderId, quantity) =>
//       dispatch(updateItemQty(lineItemId, orderId, quantity)),
//   };
// };
export default connect(mapStateToProps)(OrderSummary);
