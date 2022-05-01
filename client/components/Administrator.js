import React, { Component } from "react";
import { connect } from "react-redux";
import { store, fetchCustomers, fetchOrders, adminFetchOrders } from "../store";

class Administrator extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    return (
      <div>
        <div>Customers</div>
        {this.props.customers.map((customer) => {
          return (
            <p key={customer.id}>
              {customer.username} {customer.password} {customer.isAdmin}
            </p>
          );
        })}
        <hr />
        <div>
          Wines
          {this.props.wines.map((wine) => {
            return (
              <div key={wine.id}>
                <p>
                  {wine.name} {wine.price}
                </p>
                <img src={`/images/${wine.imgURL}`} height="150" />
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          Beers
          {this.props.beers.map((beer) => {
            return (
              <div key={beer.id}>
                <p>
                  {beer.name} {beer.price}
                </p>
                <img src={`/images${beer.imgURL}`} height="150" />
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
  const { customers, wines, beers, orders } = state;
  return {
    customers,
    wines,
    beers,
    orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(adminFetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Administrator);
