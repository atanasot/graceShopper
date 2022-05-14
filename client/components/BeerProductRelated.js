import React from "react";
import { Link } from "react-router-dom";

const BeerProductRelated = () => {
  return (
    <div>
      <h1>Customers Also Viewed</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="wrapper11">
          <div className="product-img">
            <img src="/images//acidHouse.png" height={420} width={327} alt="" />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1 className="h1111">
                {" "}
                <Link to="/beers/6" onClick={window.scrollTo(0, 0)}>
                  Acid House
                </Link>
              </h1>
              <h2> </h2>
              <p>
                Welcome to Acid House. Here, we explore the boundaries of
                flavor, pushing to the brink of comprehension.
              </p>
            </div>
            <div className="product-price-btn">
              <p>
                <span className="span111">$16.99</span>
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper11">
          <div className="product-img">
            <img src="/images//oldTownLager.png" height={420} width={327} />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1 className="h1111">
                <Link to="/beers/8" onClick={window.scrollTo(0, 0)}>
                  Old Town Lager
                </Link>
              </h1>
              <h2></h2>
              <p>
                Sometimes you gotta remember that it’s a marathon and not a
                sprint and you just need a workhorse of a beer that is built for
                crushing.
              </p>
            </div>
            <div className="product-price-btn">
              <p>
                <span className="span111">$20.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper11">
          <div className="product-img">
            <img src="/images//hobgoblin.png" height={420} width={327} alt="" />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1 className="h1111">
                {" "}
                <Link to="/beers/26" onClick={window.scrollTo(0, 0)}>
                  Hobgoblin Ipa
                </Link>
              </h1>
              <h2> </h2>
              <p>
                This spirited IPA from the British-based brewery pours light
                amber with a light head. Expect citrus, spice, malt, and hop
                tones.
              </p>
            </div>
            <div className="product-price-btn">
              <p>
                <span className="span111">$4.95</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerProductRelated;
