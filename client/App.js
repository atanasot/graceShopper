import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

import { fetchBeers, fetchWines } from "./store";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeers();
    this.props.fetchWines();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    fetchWines: () => dispatch(fetchWines()),
  };
};

export default connect((state) => state, mapDispatchToProps)(App);
