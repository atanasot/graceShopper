import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";

class BeerDescription extends Component {
  constructor() {
    super();
  }
  render() {
    return <p>Beer Description will be inserted here</p>;
  }
}


export default connect(null)(BeerDescription);
