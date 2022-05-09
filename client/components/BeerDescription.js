import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/lineItems";
import { Link } from "react-router-dom";
import BeerProductRelated from "./BeerProductRelated";

class BeerDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.beer.name ? this.props.beer.name : "",
      beerId: this.props.beer.id ? this.props.beer.id : null,
      quantity: 1,
      price: this.props.beer.id ? this.props.beer.price : "",
    };
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.beer.id && this.props.beer.id) {
      this.setState({
        name: this.props.beer.name,
        beerId: this.props.beer.id,
        quantity: 1,
        price: this.props.beer.price,
      });
    }
  }

  addToCart() {
    const lineItem = {
      name: this.state.name,
      beerId: this.state.beerId,
      quantity: this.state.quantity,
      price: this.state.price,
    };
    this.props.addToCart(lineItem);
  }

  render() {
    const { beer } = this.props;
    const { addToCart } = this;
    return (
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
                <form>
                  Quantity:
                  <input
                    className="quantity_input"
                    name="quantity"
                    value={this.state.quantity}
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    placeholder="Quantity"
                  />
                  <button
                    className="product__btn"
                    onClick={() => {
                      addToCart();
                    }}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (beer) => dispatch(addToCart(beer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDescription);
