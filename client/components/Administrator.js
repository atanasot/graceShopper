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
    return <hr />;
  }
}

const mapStateToProps = (state) => {
  const { customers } = state;
  return {
    customers,
  };
};

export default connect(mapStateToProps)(Administrator);
