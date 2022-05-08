import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BeerProductRelated from "./BeerProductRelated";

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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  addToLocalStorage() {
    let cart = this.state.cart;
    let loadStorage = JSON.parse(window.localStorage.getItem("cart"));
    console.log(loadStorage);
    if (loadStorage === null) {
      cart.push({
        beerId: this.state.beerId,
        name: this.state.name,
        quantity: this.state.quantity,
        price: this.state.price,
        orderId: null,
      });
    } else {
      for (let i = 0; i < loadStorage.length; i++) {
        if (this.state.name === loadStorage[i].name) {
          console.log(
            this.state.quantity,
            "+",
            loadStorage[i].quantity,
            "=",
            this.state.quantity * 1 + loadStorage[i].quantity * 1
          );
          loadStorage["quantity"] =
            this.state.quantity * 1 + loadStorage[i].quantity * 1;
          this.setState({ cart: cart });
          window.localStorage.setItem("cart", JSON.stringify(existing));
          break;
        } else {
          cart.push({
            beerId: this.state.beerId,
            name: this.state.name,
            quantity: this.state.quantity,
            price: this.state.price,
            orderId: null,
          });
        }
      }
    }
    this.setState({ cart: cart });
    window.localStorage.setItem("cart", JSON.stringify(cart));
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
        <div>
          <div className="wrapper">
            <div style={{ marginTop: "100px", marginLeft: "270px" }}>
              <span
                style={{
                  textDecoration: "underline",
                }}
              >
                {" "}
                <Link to="/">Home</Link>
              </span>{" "}
              /{" "}
              <span
                style={{
                  textDecoration: "underline",
                }}
              >
                <Link to="/beer">Beers</Link>
              </span>{" "}
              / {beer.name}
            </div>

            <div className="product-top" style={{ marginLeft: "400px" }}>
              <div className="product__gallery">
                <img src={`/images/${beer.imgURL}`} alt="" />
              </div>
              <div className="product__info">
                <div className="product__desc">
                  <div className="product__type">Beer</div>
                  <h1>{beer.name}</h1>
                  <p className="product__price">${beer.price}</p>
                  <div className="product__short">
                    <h4>Type:{beer.type}</h4>

                    <h4>
                      country:{beer.country}, {beer.state}
                    </h4>
                    <h4>ABV:{beer.ABV}</h4>
                  </div>
                  <form onSubmit={this.onSubmit}>
                    Quantity:
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
                    />{" "}
                    <button
                      className="product__btn"
                      onClick={() => this.addToLocalStorage()}
                    >
                      Add to cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="product-bottom">
              <h2>Description</h2>
              <p>{beer.description}</p>
              <h2>Reviews</h2>
              <p>Stanley said he doesnt like beers</p>
            </div>
          </div>
          <BeerProductRelated />
          <div className="overlay" />
        </div>
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
  };
};

export default connect(mapStateToProps)(BeerDescriptionBeforeLogin);
