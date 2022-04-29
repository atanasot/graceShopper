import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { fetchBeers, fetchWines, fetchLineItemsFromCart } from "./store";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeers();
    this.props.fetchWines();
    this.props.fetchLineItemsFromCart();
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
    fetchLineItemsFromCart: () => dispatch(fetchLineItemsFromCart()),
  };
};

export default connect((state) => state, mapDispatchToProps)(App);
