import React, { Component } from "react";
import { connect } from "react-redux";
import WinesAdmin from "../components/WinesAdmin.js";
import BeersAdmin from "../components/BeersAdmin.js";
import {
  store,
  fetchCustomers,
  fetchOrders,
  fetchWines,
  adminFetchOrders,
  addWine,
} from "../store";

class Administrator extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchOrders();
    this.props.fetchWines();
    this.state;
  }

  render() {
    return (
      <div>
        <div>Customers</div>
        <table>
          <tr>
            <th> First Name</th>
            <th> Last Name</th>
            <th> Username</th>
            <th> Password </th>
            <th> Is Admin </th>
          </tr>
          <tr>
            {this.props.customers.map((customer) => {
              return (
                <td key={customer.id}>
                  {customer.firstName} {customer.lastName} {customer.username}{" "}
                  {customer.password} {customer.isAdmin}
                </td>
              );
            })}
          </tr>
        </table>

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
                Customers:{" "}
                {
                  this.props.customers.find(
                    (customer) => customer.id === order.userId
                  ).username
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
  const { customers, wines, beers, orders, auth } = state;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Administrator);
