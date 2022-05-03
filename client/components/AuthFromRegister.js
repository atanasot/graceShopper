import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const AuthFormRegister = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="container1">
      <div className="wrapper1">
        <form onSubmit={handleSubmit} name={name} className="form">
          <h1 className="h1">Sign Up</h1>
          <br></br>
          <label htmlFor="username">
            <input
              name="username"
              id="email"
              type="text"
              placeholder="Username"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="email"
              placeholder="password"
            />
          </label>
          <button type="submit" id="login-btn">
            {displayName}
          </button>
          <div className="register">
            <p>
              <Link to={"/Login"}>Login</Link> Instead
            </p>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
      <div className="main-img1" />{" "}
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Signup = connect(mapSignup, mapDispatch)(AuthFormRegister);
