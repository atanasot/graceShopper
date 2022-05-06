import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Wines = ({ wines }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div style={{ marginLeft: "270px", marginTop: "100px" }}>
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          <Link to="/">Home</Link>
        </span>{" "}
        /{" "}
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          <Link to="/wine">Wines</Link>
        </span>
      </div>
      <section className="author-archive">
        <div className="container">
          <div style={{ marginBottom: "70px" }}>
            <h1>WINE</h1>
          </div>
          <ol className="posts">
            {wines.map((wine) => (
              <div key={wine.id}>
                <Link to={`/wines/${wine.id}`}>
                  <div className="container">
                    <div className="card-1 card-div">
                      <div className="like-icon-div">
                        <label
                          htmlFor="card-1-like"
                          className="like-icon-div-child"
                        >
                          <input type="checkbox" id="card-1-like" />
                          <i className="far fa-heart heart-empty" />
                          <i className="fas fa-heart heart-fill" />
                        </label>
                      </div>
                      <div className="gow-img-div img-div">
                        <img src={`./images/${wine.imgURL}`} alt="" />
                      </div>
                      <div className="text-container">
                        <h2 className="item-name">
                          {" "}
                          <Link to={`/wines/${wine.id}`}>{wine.name}</Link>
                        </h2>
                        <p className="date">{wine.type} </p>
                        <div className="pricing-and-cart">
                          <div className="pricing">
                            <p className="current-price">${wine.price}</p>
                          </div>
                          <i className="fas fa-shopping-cart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </ol>
        </div>
      </section>
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
