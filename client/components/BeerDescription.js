import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { addBeer } from "../store/lineItems";

class BeerDescription extends Component {
  constructor() {
    super();
  }

  render() {
    const { beer } = this.props;
    return (
      <div>
        <p>Beer Description will be inserted here</p>
        <p>{beer.name}</p>
        <button onClick={() => console.log('clicked')}>Add to Cart</button>
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
    addBeer: (beer) => dispatch(addBeer(beer)),
  };
};
// add mapDispatchToProps and thunks from the redux store
// thunks:
// button.onClick => (add the beer to the lineItem model)
// addBeer()

export default connect(mapStateToProps, mapDispatchToProps)(BeerDescription);
