import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


// display orders history with prices at the time of purchase
// need orders slice from the redox store when ready
const Orders = ({ beers }) => {
  return (
        <hr></hr>
  );
};

const mapStateToProps = (state) => {
  const { beers } = state;
  return {
    beers,
  };
};

export default connect(mapStateToProps)(Orders);
