import React, { Component } from "react";
import { connect } from "react-redux";
import { store, fetchCustomers } from "../store";

class Administrator extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: this.props.user.username ? this.props.user.username : null,
    //   admin: this.props.user.isAdmin ? this.props.user.isAdmin : null,
    // };
  }

  render() {
    return (
      <div>
        <div>Customers</div>
        {this.props.customers.map((customer) => {
          return (
            <p key={customer.id}>
              {customer.username} {customer.password} {customer.isAdmin}
            </p>
          );
        })}
        <hr />
        <div>
          Wines
          {this.props.wines.map((wine) => {
            return (
              <div key={wine.id}>
                <p>
                  {wine.name} {wine.price}
                </p>
                <img src={`/images/${wine.imgURL}`} height="150" />
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          Beers
          {this.props.beers.map((beer) => {
            return (
              <div key={beer.id}>
                <p>
                  {beer.name} {beer.price}
                </p>
                <img src={`/images${beer.imgURL}`} height="150" />
              </div>
            );
          })}
        </div>
        <hr />
        <div>Orders</div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { customers, wines, beers, orders } = state;
  return {
    customers,
    wines,
    beers,
    orders,
  };
};

export default connect(mapStateToProps)(Administrator);
