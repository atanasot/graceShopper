import React, { Component } from "react";
import { connect } from "react-redux";
import CustomersAdmin from "../components/CustomersAdmin";
import { fetchCustomers, fetchWines, adminFetchOrders } from "../store";

class Administrator extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchOrders();
    this.props.fetchWines();
    this.props.fetchCustomers();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevState) {
    if (prevState.orders.length === 0) {
      this.props.fetchOrders();
    }
  }

  render() {
    const current = new Date();
    const date = `${
      current.getMonth() + 1
    }/${current.getDate()}/${current.getFullYear()}`;
    return (
      <div>
        <div className="app-container">
          <p
            className="app-name"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "50px",
                width: "500px",
              }}
              className="H1Background"
            >
              Customers Portfolio
            </div>
          </p>
          <div className="app-content">
            <div className="projects-section">
              <div className="projects-section-header">
                <p className="time">{date}</p>
              </div>

              <div className="project-boxes jsGridView">
                {this.props.customers
                  ? this.props.customers.map((customer) => {
                      return (
                        <div className="project-box-wrapper" key={customer.id}>
                          <div
                            className="project-box"
                            style={{ backgroundColor: "#EAE1C8" }}
                          >
                            <div className="project-box-header">
                              <span>{customer.createdAt}</span>
                              <div className="more-wrapper">
                                <button className="project-btn-more">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-more-vertical"
                                  >
                                    <circle cx={12} cy={12} r={1} />
                                    <circle cx={12} cy={5} r={1} />
                                    <circle cx={12} cy={19} r={1} />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="project-box-content-header">
                              <p
                                className="box-content-header"
                                style={{ color: "#094C93" }}
                              >
                                {customer.firstName} {customer.lastName}
                              </p>
                              <p className="box-content-subheader">
                                username: {customer.username}
                              </p>
                              <p className="box-content-subheader">
                                email: {customer.email}
                              </p>
                            </div>
                            <div className="box-progress-wrapper">
                              <p className="box-progress-header">Admin?</p>{" "}
                              {customer.isAdmin
                                ? customer.isAdmin.toString()
                                : "False"}
                            </div>
                            <div className="project-box-footer">
                              <div
                                className="days-left"
                                style={{ color: "#3CBCC7" }}
                              >
                                BE NICE TO OUR CUSTOMER =)
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>

        <CustomersAdmin />
        {/* <div>
          Wines
          <WinesAdmin />
          {this.props.wines.map((wine) => {
            return (
              <div key={wine.id}>
                <p>
                  {wine.name} {wine.price}
                </p>
                <img
                  src={`/images/${wine.imgURL}`}
                  style={{ height: "150px" }}
                />
              </div>
            );
          })}
        </div> */}
        <hr />
        {/* <div>
          Beers
          <BeersAdmin />
          {this.props.beers.map((beer) => {
            return (
              <div key={beer.id}>
                <p>
                  {beer.name} {beer.price}
                </p>
                <img
                  src={`/images${beer.imgURL}`}
                  style={{ height: "150px" }}
                />
              </div>
            );
          })}
        </div> */}
        <hr />
        {/* <div>Orders</div>
        <ul>
          {this.props.orders.map((order) => {
            return (
              <li key={order.id}>
                <p>OrderID: {order.id}</p>
                <p>OrderDate: {order.updatedAt.slice(0, 10)} </p>
                Customer:{" "}
                {
                  this.props.customers.find(
                    (customer) => customer.id === order.userId
                  ).firstName
                }{" "}
                {
                  this.props.customers.find(
                    (customer) => customer.id === order.userId
                  ).lastName
                }{" "}
                <p>Quantity: {order.lineItems} </p>
                <p>Total: {order.total}</p>
              </li>
            );
          })}
        </ul> */}
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { customers, wines, beers, auth, orders } = state;
  return {
    auth,
    customers,
    wines,
    beers,
    orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(adminFetchOrders()),
    fetchWines: () => dispatch(fetchWines()),
    fetchCustomers: () => dispatch(fetchCustomers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Administrator);
