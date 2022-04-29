import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../store/orders";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    // fix no orders on refresh -- orders have 0 values
    const { orders } = this.props;
    // if (!orders.lineItems) {
    //   return <h2>You have no orders</h2>
    // }
    return (
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link to={`/orders/${order.id}`}>
              Order Date {order.createdAt}{" "}
            </Link>
            <p>Order total : {(order.total * 1).toFixed(2) * 1}</p>
            <p>Items Per Order : {order.lineItems}</p>
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  const { orders } = state;
  const { lineItems } = state;
  return {
    orders,
    lineItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
