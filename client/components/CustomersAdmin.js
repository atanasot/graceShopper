import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCustomers, adminAddCustomer } from "../store/customers";

class CustomersAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      email: "",
      username: "",
      password: "",
      isAdmin: false,
      address: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev) {
    this.setState({
      ...this.state,
      [ev.target.name]: ev.target.value,
    });
  }

  async onSubmit(ev) {
    ev.preventDefault();
    const customer = this.state;
    await this.props.addCustomer(customer);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="Email Address"
          />
          <input
            type="text"
            name="username"
            value={this.state.userName}
            onChange={this.onChange}
            placeholder="Username"
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
          />
          <input
            type="checkbox"
            name="isAdmin"
            value={this.state.isAdmin}
            onChange={this.onChange}
          />
          true
          <input
            type="checkbox"
            name="isAdmin"
            value={this.state.isAdmin}
            onChange={this.onChange}
          />
          false
          <input
            type="text"
            name="line1"
            value={this.state.address.line1}
            onChange={this.onChange}
            placeholder="Address Line 1"
          />
          <input
            type="text"
            name="line2"
            value={this.state.address.line2}
            onChange={this.onChange}
            placeholder="Address Line 2"
          />
          <input
            type="text"
            name="city"
            value={this.state.address.city}
            onChange={this.onChange}
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            value={this.state.address.state}
            onChange={this.onChange}
            placeholder="State"
          />
          <input
            type="text"
            name="zip"
            value={this.state.address.zip}
            onChange={this.onChange}
            placeholder="Zip"
          />
          <button>Add Customer</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { customer, auth } = state;

  return {
    customer,
    address: auth.address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomers: dispatch(fetchCustomers()),
    addCustomer: (customer) => dispatch(adminAddCustomer(customer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersAdmin);
