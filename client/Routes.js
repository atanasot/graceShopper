import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import { me } from "./store";
import Beers from "./components/Beers";
import Wines from "./components/Wines";
import WineDescription from "./components/WineDescription";
import Profile from "./components/Profile";
import BeerDescriptionBeforeLogin from "./components/BeerDescriptionBeforeLogin";
import BeerDescription from "./components/BeerDescription";
import WineDescriptionBeforeLogin from "./components/WineDescriptionBeforeLogin";
import Checkout from "./components/Checkout";
import { fetchLineItemsFromCart } from "./store/lineItems";
import Orders from "./components/Orders";
import OrderDescription from "./components/OrderDescription";
import CartAfterlogin from "./components/CartAfterlogin";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      // this should load the products that are in the cart
      console.log("user logged in");
      this.props.fetchLineItemsFromCart();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/cart" component={CartAfterlogin} />
            <Route path="/about" component={About} />
            <Route path="/beer" component={Beers} />
            <Route path="/wine" component={Wines} />
            <Route path="/wines/:id" component={WineDescription} />
            <Route path="/beers/:id" component={BeerDescription} />
            <Route path="/orders/:id" component={OrderDescription} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            <Route path="/beer" component={Beers} />
            <Route path="/wine" component={Wines} />
            <Route path="/beers/:id" component={BeerDescriptionBeforeLogin} />
            <Route path="/wines/:id" component={WineDescriptionBeforeLogin} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    fetchLineItemsFromCart: () => {
      return dispatch(fetchLineItemsFromCart());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
