import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLineItemsByOrder } from "../store/lineItems";

// need to use componentDidUpdate for order to display lineItems per Order -- fix orders slice in redux store
class OrderDescription extends Component {
  componentDidMount() {
    this.props.fetchLineItemsByOrder(this.props.orderId);
  }

  render() {
    const { lineItems } = this.props;

    return (
      <div>
        <p>
          <Link to="/orders">Go back</Link>
        </p>
        <ul>
          {lineItems.map((lineItem) => (
            <li key={lineItem.id}>
              {lineItem.name}
              <p>Price : {lineItem.price}</p>
              <p>Quantity : {lineItem.quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  const orderId = otherProps.match.params.id * 1;
  const { lineItems } = state;
  return {
    orderId,
    lineItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLineItemsByOrder: (orderId) =>
      dispatch(fetchLineItemsByOrder(orderId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDescription);
