import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BeerProductRelated from "./BeerProductRelated";
import { fetchLineItemsFromCartNotLoggedIn } from "../store/lineItems";
import { withAlert } from "react-alert";

class BeerDescriptionBeforeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerId: this.props.beer.id ? this.props.beer.id : "",
      name: this.props.beer.id ? this.props.beer.name : "",
      quantity: 1,
      price: this.props.beer.id ? this.props.beer.price : "",
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
    const cart = Array.from(this.state.cart);
    let foundDuplicate = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].beerId === this.state.beerId) {
        cart[i].quantity += this.state.quantity * 1;
        foundDuplicate = true;
        break;
      }
    }
    if (!foundDuplicate) {
      cart.push({
        beerId: this.state.beerId,
        name: this.state.name,
        quantity: this.state.quantity * 1,
        price: this.state.price,
        orderId: null,
      });
    }
    this.setState({ cart });

    window.localStorage.setItem("cart", JSON.stringify(cart));
    this.props.updateCart();
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
    const { beer, alert } = this.props;
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
                  <h1
                    style={{
                      fontSize: "60px",
                      fontFamily: "initial",
                    }}
                  >
                    {beer.name}
                  </h1>
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
                      onClick={() => {
                        this.addToLocalStorage(`${this.state.quantity}`);
                        alert.success("added to cart!");
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

const mapDispatch = (dispatch) => {
  return {
    updateCart: () => dispatch(fetchLineItemsFromCartNotLoggedIn()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(withAlert()(BeerDescriptionBeforeLogin));
