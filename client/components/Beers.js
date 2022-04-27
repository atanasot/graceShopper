import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Beers = ({ beers }) => {
  return (
    <ul>
      {beers.map((beer) => (
        <li key={beer.id}>
          <Link to={`/beers/${beer.id}`}>{beer.name} </Link>
        </li>
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
