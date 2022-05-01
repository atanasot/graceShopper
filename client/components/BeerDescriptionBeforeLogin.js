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
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onChange(ev) {
    this.setState({
      ...this.state,
      [ev.target.name]: ev.target.value,
    });
  }

  async onSubmit(ev) {
    ev.preventDefault();
    const { cart } = this.state;
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }

  render() {
    const { beer } = this.props;
    const { addToCart } = this;

    return (
      <div>
        <p>
          <Link to="/beer">Go back</Link>
        </p>
        <p>{beer.description}</p>
        <p>{beer.name}</p>
        <form onSubmit={this.onSubmit}>
          <input
            className="quantity_input"
            name="quantity"
            value={this.state.quantity}
            type="number"
            min="0"
            max="100"
            step="1"
            onChange={this.onChange}
            placeholder="Quantity"
          />
          <button onClick={() => this.addToLocalStorage()}>Add to Cart</button>
        </form>
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
