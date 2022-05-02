import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Profile = (props) => {
  const { username, isAdmin } = props;

  return (
    <div>
      <h3>
        Welcome, {username}{" "}
        {isAdmin ? "....You have Administrator Privileges" : ""}
      </h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    isAdmin: state.auth.isAdmin,
  };
};

export default connect(mapState)(Profile);
