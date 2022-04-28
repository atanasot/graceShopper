import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../store/orders";

// display orders history with prices at the time of purchase
// need orders slice from the redox store when ready
// const Orders = ({ lineItems }) => {
//   return (
//         <hr></hr>
//   );
// };

// const mapStateToProps = (state) => {
//   const { lineItems } = state;
//   return {
//     lineItems,
//   };
// };

// // const mapDispatchToProps = (dispatch) => {
// //   return {

// //     fetchOrders: () => dispatch(fetchOrders),
// //   };
// // };

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const { orders } = this.props;
    return (
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link to={`/orders/${order.id}`}>{order.createdAt} </Link> -{" "}
            {order.total} - {order.lineItems} items
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
