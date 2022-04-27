import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const Wines = ({ wines }) => {
  return (
    <div>
      <div>
        <ul className="products">
          {wines.map((wine) => (
            <li key={wine.id}>
              <img
                src={`./images/${wine.imgURL}`}
                alt=""
                width="80"
                height="200"
              />
              <Link to={`/wines/${wine.id}`}>{wine.name}</Link>
            </li>
          ))}
        </ul>
      </div>
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
