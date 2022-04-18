import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";

class WineDescription extends Component {
  constructor() {
    super();
  }
  render() {
    return <p>Wine Description will be inserted here</p>;
  }
}

export default connect(null)(WineDescription);
