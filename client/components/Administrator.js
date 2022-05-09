import React, { Component } from "react";
import { connect } from "react-redux";
import WinesAdmin from "../components/WinesAdmin.js";
import BeersAdmin from "../components/BeersAdmin.js";
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
  }

  componentDidUpdate(prevState) {
    if (prevState.orders.length === 0) {
      this.props.fetchOrders();
    }
  }

  render() {
    return (
      <div>
        <div>Customers</div>
        <table>
          <tbody>
            <tr>
              <th> First Name</th>
              <th> Last Name</th>
              <th> Username</th>
              <th> Is Administrator </th>
            </tr>
            {this.props.customers
              ? this.props.customers.map((customer) => {
                  return (
                    <tr key={customer.id}>
                      <td>{customer.firstName} </td>
                      <td>{customer.lastName} </td>
                      <td>{customer.username}</td>
                      <td>
                        {" "}
                        {customer.isAdmin
                          ? customer.isAdmin.toString()
                          : "False"}{" "}
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
        <CustomersAdmin />
        <hr />
        <div>
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
        </div>
        <hr />
        <div>
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
        </div>
        <hr />
        <div>Orders</div>
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
        </ul>
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
