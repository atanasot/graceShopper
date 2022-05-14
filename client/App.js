import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer";

import {
  fetchBeers,
  fetchWines,
  fetchLineItemsFromCart,
  fetchCustomers,
  fetchLineItemsFromCartNotLoggedIn,
} from "./store";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeers();
    this.props.fetchWines();
    this.props.fetchCustomers();
    this.props.fetchLineItemsFromCart();
    this.props.updateCart();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    fetchWines: () => dispatch(fetchWines()),
    fetchCustomers: () => dispatch(fetchCustomers()),
    fetchLineItemsFromCart: () => dispatch(fetchLineItemsFromCart()),
    updateCart: () => dispatch(fetchLineItemsFromCartNotLoggedIn()),
  };
};

export default connect((state) => state, mapDispatchToProps)(App);
