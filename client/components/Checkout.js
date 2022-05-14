import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "140px",
        marginTop: "140px",
      }}
    >
      <div className="wrapper11">
        <div className="product-img">
          <img
            src="/images/checkout.jpg"
            style={{ height: "320px", width: "327px" }}
            alt=""
          />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1 className="h1111">Dont' have an account?</h1>
            <h2></h2>
          </div>
          <div style={{ textAlign: "center" }}>
            Please{" "}
            <Link to="/login">
              <span style={{ textDecoration: "underline" }}>Login</span>
            </Link>{" "}
            or{" "}
            <Link to="/signup">
              <span style={{ textDecoration: "underline" }}> Join us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
