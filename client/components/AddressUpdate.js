import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "../store/auth";
import { fetchCustomers, updateAddress } from "../store/customers";
import { fetchOrders } from "../store/orders";

class AddressUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName || "",
      lastName: this.props.lastName || "",
      email: this.props.email || "",
      username: this.props.username || "",
      password: this.props.password || "", // fix pass to be *****
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
  componentDidMount() {
    this.props.fetchOrders();
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
    await this.props.updateAddress(address);
  }

  //   add error section
  render() {
    const { firstName, lastName, city, line1, line2, zip, state } = this.state;
    const { onChange } = this;

    return (
      <div>
        <div style={{ marginTop: "100px", marginLeft: "270px" }}>
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            <Link to="/">Go Back</Link>
          </span>
        </div>
        <h1
          className="H1Background"
          style={{ marginBottom: "-100px", marginTop: "-50px" }}
        >
          Update Address
        </h1>
        <div id="dashboard-container">
          <div className="leftside-menu">
            <div className="avatar">
              <div className="icon">
                <Link to="/Profile">
                  <p>
                    {firstName.charAt(0)}
                    {lastName.charAt(0)}
                  </p>
                </Link>
              </div>
              <p>
                {firstName}, {lastName}
              </p>
            </div>
            <div className="avatar">
              <div className="icon">
                <Link to="/profileupdate">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-gear"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                  </p>
                </Link>
              </div>
              <p>Profile Setting</p>
            </div>
            <div className="avatar">
              <div className="icon">
                <Link to="/addressupdate">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-house-door"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                    </svg>
                  </p>
                </Link>
              </div>
              <p>Address Setting</p>
            </div>
          </div>
          <form
            onSubmit={this.onSubmit}
            style={{ marginLeft: "250px", marginTop: "100px" }}
          >
            <div className="group">
              <input
                type="text"
                name="line1"
                value={line1}
                onChange={onChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="label11">Address 1</label>
            </div>{" "}
            <div className="group">
              <input
                type="text"
                name="line2"
                value={line2}
                onChange={this.onChange}
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="label11">Address 2</label>
            </div>{" "}
            <div className="group">
              <input
                type="text"
                name="city"
                value={city}
                onChange={this.onChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="label11">City</label>
            </div>{" "}
            <div className="group">
              <input
                type="text"
                name="state"
                value={state}
                onChange={this.onChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="label11">State</label>
            </div>{" "}
            <div className="group">
              <input
                type="text"
                name="zip"
                value={zip}
                onChange={this.onChange}
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label className="label11">Zip Code</label>
            </div>
            <button className="register-btn">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  if (!state.auth) {
    return {};
  }
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    email: state.auth.email,
    username: state.auth.username,
    password: state.auth.password,
    isAdmin: state.auth.isAdmin,
    address: state.auth.address,
  };
};

const mapDispatch = (dispatch) => {
  return {
    update: (user) => dispatch(updateProfile(user)),
    updateAddress: (address) => dispatch(updateAddress(address)),
    fetchCustomers: () => dispatch(fetchCustomers()),
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(mapState, mapDispatch)(AddressUpdate);
