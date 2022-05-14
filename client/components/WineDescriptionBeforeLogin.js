import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WineProductRelated from "./wineProductRelated";
import { fetchLineItemsFromCartNotLoggedIn } from "../store/lineItems";
import { withAlert } from "react-alert";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

class WineDescriptionBeforeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineId: this.props.wine.id ? this.props.wine.id : "",
      name: this.props.wine.id ? this.props.wine.name : "",
      quantity: 1,
      price: this.props.wine.id ? this.props.wine.price : "",
      cart: JSON.parse(window.localStorage.getItem("cart")) || [],
      description: this.props.wine.id ? this.props.wine.description : "",
    };
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    const cart = Array.from(this.state.cart);
    let foundDuplicate = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].wineId === this.state.wineId) {
        cart[i].quantity += this.state.quantity * 1;
        foundDuplicate = true;
        break;
      }
    }
    if (!foundDuplicate) {
      cart.push({
        wineId: this.state.wineId,
        name: this.state.name,
        quantity: this.state.quantity * 1,
        price: this.state.price,
        orderId: null,
      });
    }
    this.setState({ cart });

    window.localStorage.setItem("cart", JSON.stringify(cart));
    let loadedStorage = JSON.parse(window.localStorage.getItem("cart"));
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
    this.props.updateCart();
  }

  render() {
    const { wine, alert } = this.props;
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
                  style={{ height: "500px", width: "140px" }}
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
                      onClick={() => {
                        this.addToLocalStorage(`${this.state.quantity}`);
                        alert.success("added to cart!");
                      }}
                    >
                      Add to Cart
                    </button>
                  </form>
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
          <WineProductRelated />
          <div className="overlay" />
        </div>
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
    //isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateCart: () => dispatch(fetchLineItemsFromCartNotLoggedIn()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(withAlert()(WineDescriptionBeforeLogin));
