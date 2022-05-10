import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CartNumber = (props) => {
    const updatedCartItems = JSON.parse(window.localStorage.getItem("cart"))
      ? (JSON.parse(window.localStorage.getItem("cart"))).reduce((acc, item) => {
          acc += item.quantity;
          return acc;
        }, 0)
      : 0;
      console.log(updatedCartItems)
  return (
    <div>{updatedCartItems}</div>
  );
};



export default connect(state => state)(CartNumber);