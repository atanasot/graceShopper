import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";

class BeerDescription extends Component {
  constructor() {
    super();
  }

 
  render() {
    return (
      <div>
        <p>Beer Description will be inserted here</p>
        <button>Add to Cart</button>
      </div>
    )
  }
}

// add mapDispatchToProps and thunks from the redux store
// thunks: 
// button.onClick => (add the beer to the lineItem model)
// addBeer()


export default connect(null)(BeerDescription);
