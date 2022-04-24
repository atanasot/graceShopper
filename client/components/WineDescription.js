import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { addWine } from "../store/lineItems";
import { Link } from "react-router-dom";

class WineDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineId: this.props.wine.id ? this.props.wine.id : "",
      quantity: 1,
      price: this.props.wine.id ? this.props.wine.price : ''
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.wine.id && this.props.wine.id) {
      this.setState({
        wineId: this.props.wine.id,
        quantity: 1,
        price: this.props.wine.price
      });
    }
  }

  addToCart() {
    const lineItem = {
      wineId: this.state.wineId,
      quantity: this.state.quantity,
      price: this.state.price
    };
    this.props.addWine(lineItem);
  }

  render() {
    const { wine } = this.props;
    const { addToCart } = this;
    return (
      <div>
        <p>
          <Link to="/wine">Go back</Link>
        </p>
        <p>{wine.description}</p>
        <p>{wine.name}</p>
        <button onClick={() => addToCart(wine)}>Add to Cart</button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WineDescription);
