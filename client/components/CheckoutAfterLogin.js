import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../store/auth";
import { emptyCartAndSubmitOrder } from "../store/lineItems";
import OrderSummary from "./OrderSummary";

// add error handling
// Kenny needs to add a new page after the Place Order Button is clicked
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
    ev.preventDefault();
    const address = {
      line1: this.state.line1,
      line2: this.state.line2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };
    try {
      console.log(this.props)
      await this.props.update(address);
      await this.props.submitOrder(this.props.orderId)
    } catch (err) {
      console.log(err);
      this.setState({ error: err.response.data.error });
    }
  }

  render() {
    const { email, firstName, lastName } = this.props.auth;
    const { line1, line2, city, state, zip } = this.state;
    const { onChange, onSubmit } = this;
    return (
      <div>
        <h3>Customer & Shipping Information</h3>
        <div>
          <form>
            <input placeholder="Email" defaultValue={email} />
          </form>
        </div>
        <div>
          <OrderSummary />
          <h3>Shipping Address</h3>
          <form onSubmit={onSubmit}>
            <input
              name="firstName"
              placeholder="First Name"
              defaultValue={firstName}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              defaultValue={lastName}
            />
            <input
              name="line1"
              placeholder="Address"
              value={line1}
              onChange={onChange}
            />
            <input
              name="line2"
              placeholder="Apt, suite, etc. (optional)"
              value={line2}
              onChange={onChange}
            />
            <input
              name="city"
              placeholder="City"
              value={city}
              onChange={onChange}
            />
            <input
              name="state"
              placeholder="State"
              value={state}
              onChange={onChange}
            />
            <input
              name="zip"
              placeholder="ZIP Code"
              value={zip}
              onChange={onChange}
            />
            <button>Place Order</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  if (!state.auth || !state.lineItems) {
    return {};
  }
  return {
    auth: state.auth,
    address: state.auth.address,
    orderId: state.lineItems.length ? state.lineItems[0].orderId : null
  };
};

const mapDispatch = (dispatch) => {
  return {
    update: (user) => dispatch(updateProfile(user)),
    submitOrder: (orderId) =>dispatch(emptyCartAndSubmitOrder(orderId))
  };
};

export default connect(mapState, mapDispatch)(CheckoutAfterLogin);
