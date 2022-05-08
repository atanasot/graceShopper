import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class WineDescriptionBeforeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wineId: this.props.wine.id ? this.props.wine.id : "",
      name: this.props.wine.id ? this.props.wine.name : '',
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
    let foundDuplicate = false

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].wineId === this.state.wineId) {
        cart[i].quantity += this.state.quantity * 1
        foundDuplicate = true
        break
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
    console.log(loadedStorage);
  }

  // removeFromLocalStorage(quant) {
  //   let updateCart = this.state.cart.find(
  //     (value) => value.wineId === this.props.wine.id
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
    const { wine } = this.props;
    return (
      <div>
        <p>
          <Link to="/wine">Go back</Link>
        </p>
        <p>{wine.description}</p>
        <p>{wine.name}</p>
        <form onSubmit={this.onSubmit}>
          <input
            className="quantity_input"
            name="quantity"
            value={this.state.quantity}
            type="number"
            min="1"
            max="100"
            step="1"
            onChange={this.onChange}
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
  const wine =
    state.wines.find((wine) => wine.id === otherProps.match.params.id * 1) ||
    {};
  return {
    wine,
    //isLoggedIn: !!state.auth.id,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addWine: (wine) => dispatch(addWine(wine)),
//   };
// };

export default connect(
  mapStateToProps,
)(WineDescriptionBeforeLogin);
