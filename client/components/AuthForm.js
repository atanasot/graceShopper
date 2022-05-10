import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container1">
      <div className="wrapper1">
        <form onSubmit={handleSubmit} name={name} className="form">
          <h1 className="h1">Login</h1>
          <p>If you are already a member, easily log in</p>
          <br></br>
          <label htmlFor="username">
            <input
              name="username"
              className="email"
              type="text"
              placeholder="Username"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              className="email"
              placeholder="password"
            />
          </label>
          <button type="submit" id="login-btn">
            {displayName}
          </button>
          <div className="or">
            <hr />
            <span className=".span">OR</span>
            <hr />
          </div>

          <div className="register">
            <p>If you don't have an account</p>
            <button className="register-btn">
              <Link to={"/signup"}>Register</Link>
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
      <div className="main-img" />{" "}
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
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
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

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
