import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLineItemsByOrder } from "../store";

class OrderDescription extends Component {
  constructor() {
    super();
    this.state = {
        lineItems: []
    }
  }

  componentDidMount() {
    this.props.fetchLineItemsByOrder(this.props.orderId);
  }
  render() {
    console.log("Rendering");
    this.props.fetchLineItemsByOrder(this.props.orderId);
    const { order, lineItems, fetchLineItemsByOrder } = this.props;

    return <div></div>;
  }
}

const mapStateToProps = (state, otherProps) => {
  //const {lineItems} = state
  const orderId = otherProps.match.params.id * 1;
  return {
    orderId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLineItemsByOrder: (orderId) =>
      dispatch(fetchLineItemsByOrder(orderId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDescription);
