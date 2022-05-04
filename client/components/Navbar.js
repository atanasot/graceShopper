import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ lineItems, handleClick, isLoggedIn, isAdmin }) => {
  const loadedStorage = JSON.parse(window.localStorage.getItem("cart"));
  return (
    <div>
      <div className="navBar">
        <nav>
          <ul id="main" className="navbar-left">
            <li>
              <span>Shop </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="-2 -3 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
              <ul className="drop">
                <div>
                  <li>
                    <Link to="/wine">Wine</Link>
                  </li>
                  <li>
                    <Link to="/beer">Beer</Link>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <span>Our Story </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="-2 -3 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
              <ul className="drop">
                <div>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/aboutwine">About Wine</Link>
                  </li>
                  <li>
                    <Link to="/aboutbeer">About Beer</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
          <Link to="/" className="title">
            ALWAYS THE WEEKEND.
          </Link>
          <div className="navbar-right">
            <ul id="main">
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="-2 -3 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>

                <ul className="drop">
                  {isLoggedIn ? (
                    isAdmin ? (
                      <div>
                        <li>
                          <Link to="/Profile">Profile</Link>
                        </li>
                        <li>
                          <Link to="/orders">Orders</Link>
                        </li>
                        <li>
                          <Link to="/admin">Administrator</Link>
                        </li>
                        <li>
                          <a href="#" onClick={handleClick}>
                            Logout
                          </a>
                        </li>
                      </div>
                    ) : (
                      <div>
                        <li>
                          <Link to="/Profile">Profile</Link>
                        </li>
                        <li>
                          <Link to="/orders">Orders</Link>
                        </li>
                        <li>
                          <a href="#" onClick={handleClick}>
                            Logout
                          </a>
                        </li>
                      </div>
                    )
                  ) : (
                    <div>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/signup">Join Us</Link>
                      </li>
                    </div>
                  )}
                </ul>
              </li>
              <li>
                <Link to="/cart" className="cartLink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
