import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../store/auth";
import { emptyCartAndSubmitOrder } from "../store/lineItems";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

class CheckoutAfterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: this.props.address ? this.props.address.line1 : "",
      line2: this.props.address ? this.props.address.line2 : "",
      city: this.props.address ? this.props.address.city : "",
      state: this.props.address ? this.props.address.state : "",
      zip: this.props.address ? this.props.address.zip : "",
      error: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }

  async onSubmit(ev) {
    console.log("Start of submit");
    ev.preventDefault();
    const address = {
      line1: this.state.line1,
      line2: this.state.line2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };
    try {
      console.log(this.props);
      await this.props.update(address);
      console.log(address);
      await this.props.submitOrder(this.props.orderId);
      this.props.history.push('/confirm')
    } catch (err) {
      console.log(err);
      this.setState({ error: err.response.data.error });
    }
  }

  render() {
    console.log("Check out after login render");
    const { email, firstName, lastName } = this.props.auth
      ? this.props.auth
      : {};
    const { line1, line2, city, state, zip } = this.state;
    const { onChange, onSubmit } = this;
    return (
      <div>
        <div className="checkout111">
          <div className="container checkout-container">
            <div className="checkout-order">
              <div className="checkout-col order-col">
                <h3 className="checkout-col-headline">
                  Your order
                  <i className="checkout-icon fa fa-angle-up" />
                </h3>
                <div className="checkout-col-inner">
                  <div className="checkout-col-header">
                    <div className="checkout-button">
                      <button className="black-button bold-text">
                        <i className="fa fa-chevron-left" />
                        <Link to="/cart">Edit Cart</Link>
                      </button>
                    </div>
                  </div>
                  <div className="checkout-order-info">
                    <div className="order-card">
                      <div className="order-row order-detail">
                        <OrderSummary />
                        <i className="order-icon red-text fa fa-close" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-col-footer">
                  <h3 className="checkout-col-headline">
                    Additional Information
                    <i className="checkout-icon fa fa-angle-up" />
                  </h3>
                  <div className="checkout-order-note">
                    <span className="order-note-title">Order notes</span>
                    <textarea
                      rows={4}
                      placeholder="Note about your order"
                      className="order-textarera"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-col bill-col">
                <h3 className="checkout-col-headline">
                  Shipping Details
                  <i className="checkout-icon fa fa-angle-up" />
                </h3>
                <div className="checkout-col-inner">
                  <form className="checkout-bill-form" onSubmit={onSubmit}>
                    <div className="order-row">
                      <span className="bill-small-col">
                        <label
                          className="bold-text p-small"
                          htmlFor="first-name"
                        >
                          First name
                        </label>
                        <input
                          name="firstName"
                          defaultValue={firstName || ""}
                          style={{ width: "150px" }}
                          readOnly
                        />
                      </span>
                      <span className="bill-small-col">
                        <label
                          className="bold-text p-small"
                          htmlFor="last-name"
                        >
                          Last name
                        </label>
                        <input
                          name="lastName"
                          defaultValue={lastName}
                          style={{ width: "150px" }}
                          readOnly
                        />
                      </span>
                    </div>
                    <div className="order-row">
                      <span className="bill-full-col">
                        <label className="bold-text p-small" htmlFor="adress">
                          Adress
                        </label>
                        <input
                          name="line1"
                          value={line1 || ""}
                          onChange={onChange}
                        />
                      </span>
                    </div>
                    <div className="order-row">
                      <span className="bill-full-col">
                        <label className="bold-text p-small" htmlFor="suburd">
                          Apt, suite, etc. (optional)
                        </label>
                        <input
                          name="line2"
                          value={line2 || ""}
                          onChange={onChange}
                        />
                      </span>
                    </div>
                    <div className="order-row">
                      <span className="bill-small-col">
                        <label
                          className="bold-text p-small"
                          htmlFor="first-name"
                        >
                          City
                        </label>
                        <input
                          name="city"
                          value={city || ""}
                          onChange={onChange}
                          style={{ width: "150px" }}
                        />
                      </span>
                      <span className="bill-small-col">
                        <label
                          className="bold-text p-small"
                          htmlFor="last-name"
                        >
                          State
                        </label>
                        <input
                          name="state"
                          value={state || ""}
                          onChange={onChange}
                          style={{ width: "150px" }}
                        />
                      </span>
                    </div>
                    <div className="order-row">
                      <span className="bill-full-col">
                        <label className="bold-text p-small" htmlFor="suburd">
                          Postcode
                        </label>
                        <input
                          name="zip"
                          value={zip || ""}
                          onChange={onChange}
                        />
                      </span>
                    </div>
                    <div className="order-row">
                      <span className="bill-full-col">
                        <label className="bold-text p-small" htmlFor="suburd">
                          Email Address
                        </label>
                        <input
                          name="email"
                          defaultValue={email || ""}
                          readOnly
                        />
                      </span>
                    </div>
                    <button className="black-button bold-text ">
                      Place Order
                    </button>
                    <p>
                      <span
                        className="checkout-title-text p-small"
                        style={{ marginTop: "5px" }}
                      >
                        By completing your purchase, you agree to these{" "}
                      </span>
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className="checkout-title-text  p-small"
                      >
                        Terms and Conditions
                      </a>
                    </p>
                  </form>
                </div>
              </div>
              <div className="checkout-col bill-col">
                <h3 className="checkout-col-headline">
                  Payment Details
                  <i className="checkout-icon fa fa-angle-up" />
                </h3>
                <div className="checkout-col-inner checkout-col-bottom gray-bg">
                  <div className="bill-credit-inner gray-bg">
                    <div className="checkout-bill-credit">
                      <input className="input1111" type="radio" />
                      <span className="bold-text bill-credit-title">
                        Credit Card
                      </span>
                      <div className="creditCardImg">
                        <img
                          src="/images/visa.jpg"
                          style={{
                            height: "25px",
                            width: "35px",
                            margin: "5px",
                          }}
                        />
                        <img
                          src="/images/mastercard.jpg"
                          style={{
                            height: "25px",
                            width: "35px",
                            margin: "5px",
                          }}
                        />
                        <img
                          src="/images/amex.jpg"
                          style={{
                            height: "25px",
                            width: "35px",
                            margin: "5px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bill-col-inner">
                    <div className="order-row">
                      <span className="bill-full-col">
                        <label className="bold-text p-small">
                          Card numbers
                        </label>
                        <input
                          id="ccn"
                          type="tel"
                          pattern="[0-9]*"
                          inputMode="numeric"
                        />{" "}
                      </span>
                    </div>

                    <div className="order-row">
                      <span className="bill-small-col">
                        <label
                          className="bold-text p-small"
                          htmlFor="first-name"
                        >
                          <div>
                            <label>Expiration Date</label>
                            <select>
                              <option value="01">January</option>
                              <option value="02">February </option>
                              <option value="03">March</option>
                              <option value="04">April</option>
                              <option value="05">May</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">August</option>
                              <option value="09">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                            <select>
                              <option value="22"> 2022</option>
                              <option value="23"> 2023</option>
                              <option value="24"> 2024</option>
                              <option value="25"> 2025</option>
                              <option value="26"> 2026</option>
                              <option value="27"> 2027</option>
                            </select>
                          </div>
                        </label>
                      </span>
                      <span className="bill-small-col">
                        <label
                          className="bold-text p-small"
                          htmlFor="last-name"
                        >
                          CVV
                        </label>
                        <input type="text" style={{ width: "150px" }} />
                      </span>
                    </div>
                    <div className="order-row">
                      <span className="bill-full-col">
                        <label className="bold-text p-small">
                          Name on Card
                        </label>
                        <input type="text" />
                      </span>
                    </div>
                    <div className="order-row"></div>
                  </div>
                </div>
                <h3 className="checkout-col-headline">
                  Or
                  <i className="checkout-icon fa fa-angle-up" />
                </h3>
                <div className="checkout-col-inner ">
                  <div className="bill-credit-inner">
                    <div className="checkout-bill-credit">
                      <input type="radio" />
                      <span className="bold-text bill-credit-title">
                        PayPal
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          className="bi bi-paypal"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="bill-col-inner">
                    <div className="order-row">
                      <div className="checkout-button">
                        <button className="black-button bold-text ">
                          <a
                            href="https://www.paypal.com/us/signin"
                            className="checkout-title-text red-text p-small"
                          >
                            Proceed to Paypal
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state, otherProps) => {
  console.log(otherProps)
  if (!state.auth || !state.lineItems) {
    return {
      history: otherProps.history
    };
  }

  return {
    auth: state.auth.id ? state.auth : {},
    address: state.auth.address ? state.auth.address : [],
    orderId: state.lineItems.length ? state.lineItems[0].orderId : null,
  };
};

const mapDispatch = (dispatch) => {
  return {
    update: (user) => dispatch(updateProfile(user)),
    submitOrder: (orderId) => dispatch(emptyCartAndSubmitOrder(orderId)),
  };
};

export default connect(mapState, mapDispatch)(CheckoutAfterLogin);
