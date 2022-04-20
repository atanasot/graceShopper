import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Wines = ({ wines }) => {
  return (
    <div>
      <ul>
        {wines.map((wine) => (
          <li key={wine.id}>
            <img src={window.location.origin + `/${wine.imgURL}`} />
            <Link to={`/wine/${wine.id}`}>{wine.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { wines } = state;
  return {
    wines,
  };
};

export default connect(mapStateToProps)(Wines);
