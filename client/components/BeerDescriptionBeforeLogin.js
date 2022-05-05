import React, { Component } from "react";
import { connect } from "react-redux";
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
      description: this.props.beer.description
        ? this.props.beer.description
        : "",
    };
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    const cart = Array.from(this.state.cart);
    let loadStorage = JSON.parse(window.localStorage.getItem("cart"));
    console.log(loadStorage);
    if (loadStorage === null) {
      cart.push({
        beerId: this.state.beerId,
        name: this.state.name,
        quantity: this.state.quantity * 1,
        price: this.state.price,
        orderId: null,
      });
    } else {
      for (let i = 0; i < loadStorage.length; i++) {
        let target = loadStorage[i].quantity * 1;
        let cartNum = this.state.quantity * 1;
        if (loadStorage[i].name === this.state.name) {
          cart.quantity = target += cartNum;
        } else {
          cart.push({
            beerId: this.state.beerId,
            name: this.state.name,
            quantity: (target += cartNum),
            price: this.state.price,
            orderId: null,
          });
          break;
        }
      }
    }

    this.setState({ cart: cart });
    window.localStorage.setItem("cart", JSON.stringify(cart));
    let loadedStorage = JSON.parse(window.localStorage.getItem("cart"));
    console.log(loadedStorage);
  }

  // removeFromLocalStorage(quant) {
  //   let updateCart = this.state.cart.find(
  //     (value) => value.beerId === this.props.beer.id
  //   );
  //   updateCart.quantity = updateCart.quantity
  //     ? (updateCart.quantity * 1 - quant * 1).toString()
  //     : quant;
  //   this.setState({ cart: updateCart });

  //   window.localStorage.setItem("cart", JSON.stringify(updateCart));
  //   let loadedStorage = JSON.parse(window.localStorage.getItem("cart"));
  //   console.log(loadedStorage);
  // }

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
      <div style={{ marginTop: "200px" }}>
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
          <button
            onClick={() => this.addToLocalStorage(`${this.state.quantity}`)}
          >
            Add to Cart
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, otherProps) => {
  const beer =
    state.beers.find((beer) => beer.id === otherProps.match.params.id * 1) ||
    {};
  return {
    beer,
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addbeer: (beer) => dispatch(addbeer(beer)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerDescriptionBeforeLogin);
