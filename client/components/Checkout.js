import React from "react";
import { Link } from "react-router-dom";
import CheckoutAfterLogin from "./CheckoutAfterLogin";

const Checkout = () => {
  const token = window.localStorage.getItem("token");

  return token ? (
    <div>
      <CheckoutAfterLogin />
    </div>
  ) : (
    <div>
      <p>Dont have account?</p>
      Please <Link to="/login">Login</Link> or{" "}
      <Link to="/signup"> Join us</Link>
    </div>
  );
};

export default Checkout;
