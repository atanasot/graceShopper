import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/lineItems";
import { Link } from "react-router-dom";
import WineProductRelated from "./wineProductRelated";

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
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    this.props.addToCart(lineItem);
  }

  render() {
    const { wine } = this.props;
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
              <Link to="/wine">Wines</Link>
            </span>{" "}
            / {wine.name}
          </div>

          <div
            className="product-top"
            style={{ marginLeft: "400px", marginTop: "30px" }}
          >
            <div className="product__gallery">
              <img
                src={`/images/${wine.imgURL}`}
                alt=""
                style={{
                  height: "500px",
                  width: "140px",
                }}
              />
            </div>
            <div className="product__info">
              <div className="product__desc">
                <h1
                  style={{
                    fontSize: "60px",
                    fontFamily: "initial",
                  }}
                >
                  {wine.name}
                </h1>
                <p className="product__price">${wine.price}</p>
                <div className="product__short">
                  <h4>Type:{wine.type}</h4>
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
                </form>
                <button
                  className="product__btn"
                  onClick={() => {
                    addToCart();
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>{" "}
          </div>

          <div className="product-bottom">
            <h2>Description</h2>
            <p>{wine.description}</p>
            <h2>Reviews</h2>
            <p>Stanley said he doesnt like wines</p>
          </div>
        </div>
        <WineProductRelated />
        <div className="overlay" />
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
    addToCart: (wine) => dispatch(addToCart(wine)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WineDescription);
