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
                marginTop: "80px",
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
                        <div className="project-box-wrapper">
                          <div
                            className="project-box"
                            style={{ backgroundColor: "#EAE1C8" }}
                          >
                            <div className="project-box-header">
                              <span>date created:{customer.createdAt}</span>
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
                              <div className="days-left">
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
