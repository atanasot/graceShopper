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
    const users = this.props;
    console.log("HERE IS PROPS----->", users);
    return <hr />;
  }
}

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    users,
  };
};

export default connect(mapStateToProps)(Administrator);
