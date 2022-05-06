import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../store/auth";
import OrderSummary from "./OrderSummary";

// add thunk for sending shipping address to db
// add on save

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
  }

  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }

  // componentDidUpdate(prevProps) {
  //   console.log(this.props)
  //   if (!prevProps.auth.id && this.props.auth.id) {
  //     this.setState({
  //       address: this.props.address,
  //       line1: this.props.address ? this.props.address.line1 : null,
  //     })
  //   }
  // }

  render() {
    const { email, firstName, lastName } = this.props.auth;
    const { line1, line2, city, state, zip } = this.state;
    const { onChange } = this;

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
          <form>
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
  if (!state.auth) {
    return null;
  }
  return {
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    update: (user) => dispatch(updateProfile(user)),
  };
};

export default connect(mapState, mapDispatch)(CheckoutAfterLogin);
