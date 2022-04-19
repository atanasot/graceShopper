import React from "react";
import { connect } from "react-redux";

const Beers = ({ beers }) => {
  return (
    <ul>
      {beers.map((beer) => (
        <li key={beer.id}>{beer.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { beers } = state;
  return {
    beers,
  };
};

export default connect(mapStateToProps)(Beers);
