import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { addBeer } from "../store/lineItems";
import { Link } from "react-router-dom";

class BeerDescriptionBeforeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerId: this.props.beer.id ? this.props.beer.id : "",
      name: this.props.beer.name,
      quantity: 1,
      price: this.props.beer.price ? this.props.beer.price : "",
      cart: JSON.parse(window.localStorage.getItem("cart")) || [],
    };
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.beer.id && this.props.beer.id) {
      this.setState({
        beerId: this.props.beer.id,
        name: this.props.beer.name,
        quantity: 1,
        price: this.props.beer.price,
      });
    }
  }

  addToLocalStorage() {
    let cart = this.state.cart;
    cart.push({
      beerId: this.state.beerId,
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
    const { beer } = this.props;
    const { addToCart } = this;
    return (
      <div>
        <p>
          <Link to="/beer">Go back</Link>
        </p>
        <p>Beer Description will be inserted here</p>
        <p>{beer.name}</p>
        <button onClick={() => this.addToLocalStorage()}>Add to Cart</button>
      </div>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  //console.log(state, "INSIDE mapStateToProps");
  const beer =
    state.beers.find((beer) => beer.id === otherProps.match.params.id * 1) ||
    {};
  return {
    beer,
  };
};

export default connect(mapStateToProps)(BeerDescriptionBeforeLogin);
