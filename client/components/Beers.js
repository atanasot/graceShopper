import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Beers = ({ beers }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div style={{ marginLeft: "270px", marginTop: "100px" }}>
        <Link to="/">Home</Link> / <Link to="/beer">Beers</Link>
      </div>
      <section className="author-archive">
        <div className="container">
          <div style={{ marginBottom: "70px" }}>
            <h1>BEER</h1>
          </div>
          <ol className="posts">
            {beers.map((beer) => (
              <div>
                <Link to={`/beers/${beer.id}`}>
                  <div className="container">
                    <div className="card-2 card-div">
                      <div className="sekiro-img-div img-div">
                        <img src={`./images/${beer.imgURL}`} alt="" />
                      </div>
                      <div className="text-container">
                        <h2 className="item-name">
                          <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
                        </h2>
                        <p className="date1">{beer.type} </p>
                        <div className="pricing-and-cart1">
                          <div className="pricing1">
                            <p className="current-price1">${beer.price}</p>
                          </div>
                          <i className="fas fa-shopping-cart1" />
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
  const { beers } = state;
  return {
    beers,
  };
};

export default connect(mapStateToProps)(Beers);
