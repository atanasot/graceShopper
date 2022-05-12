import React from "react";
import { connect } from "react-redux";

const OrderSummary = ({ orders, lineItems }) => {
  const shipping = 5.99;
  const subtotal =
    lineItems
      .reduce((accume, current) => accume + current.price * current.quantity, 0)
      .toFixed(2) * 1;

  const taxes = (subtotal * 0.05).toFixed(2) * 1;
  const total = (shipping + subtotal + taxes).toFixed(2) * 1;
  let payment = total; // Add in discount code in future

  return (
    <div>
      <h3>Order Summary</h3>
      <p>Item in Cart: {lineItems.length}</p>
      <p>Subtotal: ${subtotal}</p>
      <p>Shipping: ${shipping}</p>
      <p>Taxes: ${taxes}</p>
      <p>Total: ${total}</p>
      <p>Payment Due: ${payment}</p>
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

export default connect(mapStateToProps)(OrderSummary);
