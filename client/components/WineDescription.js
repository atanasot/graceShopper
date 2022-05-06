import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/lineItems";
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
    const rightarrow = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-right-short"
        viewBox="0 0 16 10"
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        />
      </svg>
    );
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
              <Link to="/wine">Wine</Link>
            </span>{" "}
            / {wine.name}
          </div>

          <div className="product-top" style={{ marginLeft: "400px" }}>
            <div className="product__gallery">
              <img src={`./images/${wine.imgURL}`} alt="" />
            </div>
            <div className="product__info">
              <div className="product__desc">
                <div className="product__type">wine</div>
                <h1>{wine.name}</h1>
                <p className="product__price">${wine.price}</p>
                <div className="product__short">
                  <h4>Type:{wine.type}</h4>
                </div>
                <button
                  className="product__btn"
                  onClick={function () {
                    addToCart();
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="product-bottom">
            <h2>Description</h2>
            <p>{wine.description}</p>
            <h2>Reviews</h2>
            <p>Stanley said he doesnt like wines</p>
          </div>
        </div>

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
