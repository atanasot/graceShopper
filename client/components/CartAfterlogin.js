import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../store/lineItems";
import { updateItemQty } from "../store/lineItems";

const CartAfterlogin = ({ lineItems, updateItemQty: updateItemQty }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const shipping = 5.99;
  const subtotal =
    lineItems
      .reduce((accume, current) => accume + current.price * current.quantity, 0)
      .toFixed(2) * 1;
  const tax = (subtotal * 0.011).toFixed(2) * 1;
  return lineItems.length ? (
    <div>
      <div style={{ marginBottom: "100px", marginRight: "30px" }}>
        <h1 style={{ marginBottom: "100px", marginTop: "100px" }}>
          Shopping Cart
        </h1>
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity"> Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>
        <div className="shopping-cart">
          <div className="product">
            <ul style={{ listStyleType: "none" }}>
              {lineItems.map((lineItem) => (
                <li
                  style={{
                    width: "1600px",
                    float: "right",
                  }}
                >
                  <div
                    className="product-image"
                    style={{
                      visibility: "hidden",
                      height: "1px",
                    }}
                  >
                    <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg" />
                  </div>
                  <div className="product-details">
                    <div className="product-title"> {lineItem.name}</div>
                  </div>
                  <div className="product-price">{lineItem.price}</div>
                  <div className="product-quantity">
                    <p>
                      {" "}
                      <button
                        className="remove-product"
                        onClick={() => {
                          updateItemQty(lineItem.id, lineItem.orderId, 1);
                        }}
                      >
                        +
                      </button>
                      {lineItem.quantity}
                      <button
                        className="remove-product"
                        onClick={() => {
                          console.log(lineItem);
                          updateItemQty(lineItem.id, lineItem.orderId, -1);
                        }}
                      >
                        -
                      </button>
                    </p>
                  </div>
                  <div
                    className="product-removal"
                    style={{ visibility: "hidden" }}
                  >
                    <button className="remove-product">Remove</button>
                  </div>
                  <div className="product-line-price">
                    {(lineItem.price * lineItem.quantity).toFixed(2) * 1}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">
                {subtotal}
              </div>
            </div>
            <div className="totals-item">
              <label>Tax</label>
              <div className="totals-value" id="cart-tax">
                {tax}
              </div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">
                {shipping}
              </div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">
                {(subtotal + shipping + tax).toFixed(2) * 1}
              </div>
            </div>
          </div>{" "}
          <button className="checkout">
            {" "}
            <Link to="/checkout">Checkout</Link>
          </button>
          <button className="checkout">
            {" "}
            <Link to="/">Continue Shopping</Link>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ marginTop: "200px" }}>
      <p>
        <Link to="/">Continue Shopping</Link>
      </p>
      <p>This is an empty cart</p>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    updateItemQty: (lineItemId, orderId, quantity) =>
      dispatch(updateItemQty(lineItemId, orderId, quantity)),
  };
};
export default connect((state) => state, mapDispatch)(CartAfterlogin);
