import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../store/orders";
import NoOrder from "./NoOrder";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
    window.scrollTo(0, 0);
  }
  render() {
    const { orders } = this.props;
    if (!orders.length) {
      return <NoOrder />;
    }
    console.log(orders);
    return (
      <div clasName="orderlist11" style={{ height: "700px" }}>
        <div style={{ marginLeft: "270px", marginTop: "100px" }}>
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            <Link to="/">Home</Link>
          </span>{" "}
        </div>
        <div>
          <h1 className="H1Background">Order History</h1>
        </div>
        <ul class="rolldown-list" id="myList">
          <div></div>
          {orders.map((order) => (
            <Link to={`/orders/${order.id}`}>
              <li key={order.id}>
                Order Date : {order.createdAt.slice(0, 10)}{" "}
                <p>Order total : ${(order.total * 1).toFixed(2) * 1}</p>
                <p>Items of Order : {order.lineItems}</p>
              </li>{" "}
            </Link>
          ))}
        </ul>
      </div>
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
