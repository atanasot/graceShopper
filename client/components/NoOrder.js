import React from "react";
import { Link } from "react-router-dom";

const NoOrder = () => {
  return (
    <div>
      <div style={{ marginLeft: "270px", marginTop: "100px" }}>
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          <Link to="/">Home</Link>
        </span>
      </div>
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
              src="/images/sad.jpg"
              style={{ height: "320px", width: "327px" }}
              alt=""
            />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1 className="h1111">You Have No Order =(</h1>
              <h2></h2>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                className="btn-1"
                style={{
                  width: "70px",
                  marginLeft: "80px",
                  marginTop: "-70px",
                }}
              >
                <Link to="/">
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoOrder;
