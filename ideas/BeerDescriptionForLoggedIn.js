// import React, { Component } from "react";
// import store from "../store";
// import { connect } from "react-redux";
// import { addBeer } from "../store/lineItems";

// class BeerDescription extends Component {
//   constructor(props) {
//     super(props);
//     //console.log(props, "INSIDE CONSTRUCTOR")
//     this.state = {
//       beerId: this.props.beer.id ? this.props.beer.id : '',
//       quantity: 1,
//       price: this.props.beer.price ? this.props.beer.price : ''
//     }
//     this.addToCart = this.addToCart.bind(this)
//   }

//   componentDidUpdate(prevProps) {
//     if (!prevProps.beer.id && this.props.beer.id) {
//       this.setState({
//         beerId: this.props.beer.id,
//         quantity: 1,
//         price: this.props.beer.price
//       });
//     }
//   }

//   addToCart () {
//     const lineItem = {
//       beerId: this.state.beerId,
//       quantity: this.state.quantity,
//       price: this.state.price
//     }
//     this.props.addBeer(lineItem)
//   }

//   render() {
//     const { beer } = this.props;
//     const {addToCart} = this
//     return (
//       <div>
//         <p>Beer Description will be inserted here</p>
//         <p>{beer.name}</p>
//         <button onClick={() => addToCart()}>Add to Cart</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, otherProps) => {
//  // console.log(state, "INSIDE mapStateToProps")
//   const beer =
//     state.beers.find((beer) => beer.id === otherProps.match.params.id * 1) ||
//     {};
//   return {
//     beer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addBeer: (beer) => dispatch(addBeer(beer)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BeerDescription);
