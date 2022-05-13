import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchLineItemsFromCartNotLoggedIn } from "../store/lineItems";
import { connect } from "react-redux";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(window.localStorage.getItem("cart")) || [],
    };
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  removeItem = (index) => {
    this.state.cart.splice(index, 1);
    this.setState({
      cart: this.state.cart,
    });
    window.localStorage.setItem("cart", JSON.stringify(this.state.cart));
    console.log(this.state.cart);
    this.props.updateCart();
  };

  render() {
    const subtotal = this.state.cart.reduce(
      (current, accume) => (current += accume.price * accume.quantity),
      0
    );
    const shipping = 5.99;
    const tax = (subtotal * 0.011).toFixed(2) * 1;
    return (
      <div>
        {this.state.cart.length ? (
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
                    {this.state.cart.map((lineItem, idx) => (
                      <li key={idx}>
                        <div
                          className="product-image"
                          style={{ visibility: "hidden", height: "1px" }}
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
                            <button className="remove-product">+</button>
                            <span style={{ width: "120px" }}>
                              {lineItem.quantity}
                            </span>
                            <button className="remove-product">-</button>
                          </p>
                        </div>
                        <div className="product-removal">
                          <button
                            className="remove-product"
                            onClick={() => {
                              this.removeItem(idx);
                            }}
                          >
                            Remove
                          </button>
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
                    <div
                      id="cart-subtotal"
                      style={{
                        float: "right",
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      <label>
                        <input
                          style={{
                            width: "150px",
                            borderRadius: "5px",
                            height: "35px",
                          }}
                          name="username"
                          className="email"
                          type="text"
                          placeholder="PROMO CODE"
                        />
                      </label>
                      <button
                        className="checkout"
                        style={{ marginTop: "-50px", marginLeft: "10px" }}
                      >
                        APPLY
                      </button>
                    </div>

                    <label>Subtotal</label>
                    <div className="totals-value" id="cart-subtotal">
                      {subtotal.toFixed(2) * 1}
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
                </div>
                <button className="checkout">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="checkout">
                  <Link to="/">Continue Shopping</Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "190px",
              marginBottom: "140px",
            }}
          >
            <div className="wrapper11">
              <div className="product-img">
                <img
                  src="/images/empty.jpg"
                  style={{ height: "320px", width: "327px" }}
                  alt=""
                />
              </div>
              <div className="product-info">
                <div className="product-text">
                  <h1 className="h1111">This is an empty cart =(</h1>
                  <h2></h2>
                  <p></p>
                </div>
                <div
                  className="btn-2"
                  style={{ marginLeft: "-35px", marginTop: "-100px" }}
                >
                  <Link to={"/"}>
                    <span style={{ fontSize: "0.7rem" }}>
                      CONTINUE SHOPPING
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateCart: () => dispatch(fetchLineItemsFromCartNotLoggedIn()),
  };
};

export default connect(null, mapDispatch)(Cart);
