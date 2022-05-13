import React, { Component } from "react";
import { connect } from "react-redux";

class CartNumber extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lineItems } = this.props;
    let count = 0;
    if (lineItems) {
      count = lineItems
        ? lineItems.reduce((acc, item) => {
            acc += item.quantity;
            return acc;
          }, 0)
        : 0;
    }
    return <>{count}</>;
  }
}

const mapState = (state) => {
  return {
    lineItems: state.lineItems,
  };
};

export default connect(mapState)(CartNumber);
