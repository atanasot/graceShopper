import React from "react";
import { Link } from "react-router-dom";

const WineProductRelated = () => {
  return (
    <div>
      <h1>Customers Also Viewed</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="wrapper11">
          <div className="product-img">
            <img
              src="/images//2009_Cristal_Brut_Champagne.png"
              height="200px"
              width="100px"
              alt=""
            />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1 className="h1111">
                {" "}
                <Link to="/wines/22" onClick={window.scrollTo(0, 0)}>
                  Cristal Brut Champagne
                </Link>
              </h1>
              <h2> </h2>
              <p>
                The latest incarnation of this famous Champagne now comes from
                Roederer's own vineyards, a good portion of which are run on
                biodynamic lines.
              </p>
            </div>
            <div className="product-price-btn">
              <p>
                <span className="span111">$3830.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper11">
          <div className="product-img">
            <img
              src="/images//2018_Dominus_Estate_Christian_Moueix.png"
              height="90px"
              width="90px"
            />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1 className="h1111">
                <Link to="/wines/16" onClick={window.scrollTo(0, 0)}>
                  Dominus Estate Christian Moueix{" "}
                </Link>
              </h1>
              <h2></h2>
              <p>
                An incredibly complex and delicious Chardonnay that easily holds
                its weight against the great masters in Puligny, Meursault and
                Corton-Charlemagne.
              </p>
            </div>
            <div className="product-price-btn">
              <p>
                <span className="span111">$3376.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper11">
          <div className="product-img">
            <img
              src="/images//Sine_Qua_Non_Aperta_2018.png"
              height="85px"
              width="85px"
              alt=""
            />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1 className="h1111">
                {" "}
                <Link to="/wines/10" onClick={window.scrollTo(0, 0)}>
                  Sine Qua Non Aperta
                </Link>
              </h1>
              <h2> </h2>
              <p>
                The nose lively citrus notes and white stone fruit . The palate
                is a voluptuous wine with intense flavors of pear, apple and
                subtle floral and mineral hints
              </p>
            </div>
            <div className="product-price-btn">
              <p>
                <span className="span111">$299.99</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineProductRelated;
