import React, { Component } from "react";
import { connect } from "react-redux";
import WinesAdmin from "../components/WinesAdmin.js";
import BeersAdmin from "../components/BeersAdmin.js";
import ProductAdminUpdate from "../components/ProductAdminUpdate";
import { fetchCustomers, fetchWines, adminFetchOrders } from "../store";
import { Link } from "react-router-dom";

class ProductAdmin extends Component {
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
                marginTop: "70px",
              }}
              className="H1Background"
            >
              Products Portfolio
            </div>
          </p>
          <div className="app-content">
            <div className="projects-section">
              <div className="projects-section-header">
                <p className="time">{date}, WINE</p>
              </div>

              <div className="project-boxes jsGridView">
                {this.props.wines.map((wine) => {
                  return (
                    <div className="project-box-wrapper" key={wine.id}>
                      <div
                        className="project-box"
                        style={{ backgroundColor: "#90ACCA" }}
                      >
                        <div className="project-box-header ">
                          <span>{wine.createdAt.slice(0, 10)}</span>
                          <div className="more-wrapper">
                            <Link to={`/adminproduct/${wine.id}`}>
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
                            </Link>
                          </div>
                        </div>
                        <div className="project-box-content-header">
                          <p
                            className="box-content-header"
                            style={{ color: "##E1AF44" }}
                          >
                            {wine.name}
                          </p>
                          <p className="box-content-subheader">
                            Price: ${wine.price}
                          </p>
                        </div>
                        <div
                          className="box-progress-wrapper"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={`/images/${wine.imgURL}`}
                            style={{ height: "150px" }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <WinesAdmin />
        </div>
        <hr />
        <div className="app-content">
          <div className="projects-section">
            <div className="projects-section-header">
              <p className="time">{date}, BEER</p>
            </div>

            <div className="project-boxes jsGridView">
              {this.props.beers.map((beer) => {
                return (
                  <div className="project-box-wrapper" key={beer.id}>
                    <div
                      className="project-box"
                      style={{ backgroundColor: " #EBE399" }}
                    >
                      <div className="project-box-header ">
                        <span>{beer.createdAt.slice(0, 10)}</span>
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
                          style={{ color: "##E1AF44" }}
                        >
                          {beer.name}
                        </p>
                        <p className="box-content-subheader">
                          Price: ${beer.price}
                        </p>
                      </div>
                      <div
                        className="box-progress-wrapper"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/images/${beer.imgURL}`}
                          style={{ height: "150px" }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <BeersAdmin />
        </div>
        <hr />
        <div className="app-content">
          <div className="projects-section">
            <div className="projects-section-header">
              <p className="time">ORDER</p>
            </div>

            <div className="project-boxes jsGridView">
              {this.props.orders.map((order) => {
                return (
                  <div className="project-box-wrapper" key={order.id}>
                    <div
                      className="project-box"
                      style={{ backgroundColor: "#F6DDC5" }}
                    >
                      <div className="project-box-header ">
                        <span>OrderDate: {order.updatedAt.slice(0, 10)}</span>
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
                          style={{ color: "##E1AF44" }}
                        >
                          {order.name}
                        </p>
                        <p className="box-content-subheader">
                          OrderID: {order.id}
                        </p>
                      </div>
                      <div
                        className="box-progress-wrapper"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
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
                      </div>
                      <p>Quantity: {order.lineItems}</p>
                      <p>Total: {order.total}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdmin);
