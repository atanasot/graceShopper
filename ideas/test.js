// import React, { Component } from "react";
// import store from "../store";
// import { connect } from "react-redux";
// import { addBeer } from "../store/lineItems";

// class BeerDescription extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       beerId: this.props.beer.id ? this.props.beer.id : "",
//       quantity: 1,
//       price: this.props.beer.price ? this.props.beer.price : "",
//       cart: this.props.lineItems || [],
//       //cart: JSON.parse(window.localStorage.getItem("cart")) || [],
//     };
//     this.addToLocalStorage = this.addToLocalStorage.bind(this);
//   }

//   componentDidUpdate(prevProps) {
//     if (!prevProps.beer.id && this.props.beer.id) {
//       this.setState({
//         beerId: this.props.beer.id,
//         quantity: 1,
//         price: this.props.beer.price,
//         cart: this.props.lineItems
//       });
//     }
//   }

//   addToLocalStorage() {
//     let cart = this.state.cart;
//     cart.push({
//       beerId: this.state.beerId,
//       quantity: this.state.quantity,
//       price: this.state.price,
//     });
//     this.setState({ cart: cart });

//     window.localStorage.setItem("cart", JSON.stringify(cart));
//     // window.localStorage.setItem('item', JSON.stringify(lineItem))
//     //JSON.parse(window.localStorage.getItem('item'))
//     console.log(localStorage);
//     let loadedStorage = JSON.parse(window.localStorage.getItem("cart"));
//     console.log(loadedStorage);
//   }

//   render() {
//     console.log(this.state);
//     const { beer } = this.props;
//     //const {addToCart} = this
//     return (
//       <div>
//         <p>Beer Description will be inserted here</p>
//         <p>{beer.name}</p>
//         <button onClick={() => this.addToLocalStorage()}>Add to Cart</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, otherProps) => {
//   console.log(state, "INSIDE mapStateToProps")
//   const beer =
//     state.beers.find((beer) => beer.id === otherProps.match.params.id * 1) ||
//     {};
//   return {
//     beer,
//   };
// };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     addBeer: (beer) => dispatch(addBeer(beer)),
// //   };
// // };

// export default connect(mapStateToProps)(BeerDescription);