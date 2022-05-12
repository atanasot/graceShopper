import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

// need to use componentDidUpdate for order to display previous order items -- fix orders slice in redux store
class OrderDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
    };
  }
  async componentDidMount() {
    const order = (
      await axios.get(`/api/lineItems/order/${this.props.orderId}`, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    this.setState({
      order,
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: "270px", marginTop: "100px" }}>
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            <Link to="/">Home</Link>
          </span>{" "}
          /{" "}
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            <Link to="/orders">Orders</Link>
          </span>
          / <span>Order Information</span>
        </div>
        <div style={{ marginBottom: "-60px" }}>
          <h1 className="H1Background">Order Information</h1>
        </div>
        <div className="wrapper333">
          <div className="folderTab">
            <h3>Invoice</h3>
          </div>

          <div className="borderBox">
            <div className="tabler">
              <h3>Products information</h3>
              <a className="edit grayLG fright a333">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-qr-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2h2v2H2V2Z" />
                  <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                  <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                  <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                  <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                </svg>
              </a>

              <table>
                {this.state.order.map((item) => (
                  <tbody key={item.id}>
                    <tr>
                      <td>Product Name:</td>
                      <td> {item.name}</td>
                    </tr>
                    <tr>
                      <td>Price :</td>
                      <td>{item.price}</td>
                    </tr>
                    <tr>
                      <td>Quantity :</td>
                      <td>{item.quantity}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <div className="tabler">
              <h3>Billing Information</h3>
              <a className="edit grayLG fright a333">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-credit-card"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                </svg>
              </a>
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Robert M. Hamilton</td>
                  </tr>
                  <tr>
                    <td>Street Address</td>
                    <td>1627 Rose Street</td>
                  </tr>
                  <tr>
                    <td>Street Address 2</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>Manhattan</td>
                  </tr>
                  <tr>
                    <td>State (Province)</td>
                    <td>Kansas</td>
                  </tr>
                  <tr>
                    <td>Postal Code</td>
                    <td>66502</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>United States</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>716-678-7424</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  const orderId = otherProps.match.params.id * 1;
  return {
    orderId,
  };
};

export default connect(mapStateToProps)(OrderDescription);
