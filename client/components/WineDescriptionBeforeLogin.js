import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { addWine } from "../store/lineItems";
import { Link } from "react-router-dom";

class WineDescriptionBeforeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineId: this.props.wine.id ? this.props.wine.id : "",
      name: this.props.wine.name,
      quantity: 1,
      price: this.props.wine.price ? this.props.wine.price : "",
      cart: JSON.parse(window.localStorage.getItem("cart")) || [],
    };
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.wine.id && this.props.wine.id) {
      this.setState({
        wineId: this.props.wine.id,
        name: this.props.wine.name,
        quantity: 1,
        price: this.props.wine.price,
      });
    }
  }

  addToLocalStorage() {
    let cart = this.state.cart;
    cart.push({
      wineId: this.state.wineId,
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price,
    });
    this.setState({ cart: cart });

    window.localStorage.setItem("cart", JSON.stringify(cart));

    console.log(localStorage);
    let loadedStorage = JSON.parse(window.localStorage.getItem("cart"));
    console.log(loadedStorage);
  }

  render() {
    //console.log(this.state);
    const { wine } = this.props;
    const { addToCart } = this;
    return (
      <div>
        <p>
          <Link to="/wine">Go back</Link>
        </p>
        <p>Wine Description will be inserted here</p>
        <p>{wine.name}</p>
        <button onClick={() => this.addToLocalStorage()}>Add to Cart</button>
      </div>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  //console.log(state, "INSIDE mapStateToProps");
  const wine =
    state.wines.find((wine) => wine.id === otherProps.match.params.id * 1) ||
    {};
  return {
    wine,
  };
};

export default connect(mapStateToProps)(WineDescriptionBeforeLogin);
