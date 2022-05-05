import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../store/lineItems";
import { removeFromCart } from "../store/lineItems";

const CartAfterlogin = ({ lineItems, removeFromCart }) => {
  const shipping = 5.99;
  const subtotal =
    lineItems
      .reduce((accume, current) => accume + current.price * current.quantity, 0)
      .toFixed(2) * 1;
  return lineItems.length ? (
    <div>
      <p>
        <Link to="/">Continue Shopping</Link>
      </p>
      <ul>
        {lineItems.map((lineItem) => (
          <li key={lineItem.id}>
            {lineItem.name}
            <p>Price : ${lineItem.price}</p>
            <p>
              Quantity : {lineItem.quantity}
              <button
                onClick={() => {
                  removeFromCart(lineItem.id, lineItem.orderId, 1);
                }}
              >
                -
              </button>
            </p>
            <p> </p>
            <hr />
          </li>
        ))}
        <p>Subtotal:${subtotal}</p>
        <p>Shipping:${shipping}</p>
        <p>Total:${(subtotal + shipping).toFixed(2) * 1}</p>
        <button>
          <Link to="/checkout">Checkout</Link>
        </button>
      </ul>
    </div>
  ) : (
    <div>
      <p>
        <Link to="/">Continue Shopping</Link>
      </p>
      <p>This is an empty cart</p>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    removeFromCart: (lineItemId, orderId, quantity) =>
      dispatch(removeFromCart(lineItemId, orderId, quantity)),
  };
};
export default connect((state) => state, mapDispatch)(CartAfterlogin);
