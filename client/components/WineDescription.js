import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { addWine } from "../store/lineItems";
import { fetchOrders } from "../store/orders";
import { Link } from "react-router-dom";

class WineDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.wine.name ? this.props.wine.name : "",
      wineId: this.props.wine.id ? this.props.wine.id : null,
      quantity: 1,
      price: this.props.wine.id ? this.props.wine.price : "",
    };
    this.addToCart = this.addToCart.bind(this);
    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.wine.id && this.props.wine.id) {
      this.setState({
        name: this.props.wine.name,
        wineId: this.props.wine.id,
        quantity: 1,
        price: this.props.wine.price,
      });
    }
  }

  addToCart() {
    const lineItem = {
      name: this.state.name,
      wineId: this.state.wineId,
      quantity: this.state.quantity,
      price: this.state.price,
    };
    this.props.addWine(lineItem);
  }

  render() {
    const { wine } = this.props;
    const { addToCart } = this;
    const { fetchOrders } = this.props;
    return (
      <div>
        <p>
          <Link to="/wine">Go back</Link>
        </p>
        <p>wine Description will be inserted here</p>
        <p>{wine.name}</p>
        <button
          onClick={function () {
            addToCart();
            fetchOrders();
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  const wine =
    state.wines.find((wine) => wine.id === otherProps.match.params.id * 1) ||
    {};
  return {
    wine,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWine: (wine) => dispatch(addWine(wine)),
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WineDescription);
