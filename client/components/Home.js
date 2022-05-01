import React from "react";
import { Link } from "react-router-dom";

// Checkout Stanleys comments

const Home = () => {
  return (
    <div>
      <div className="homePage">
        {" "}
        <div className="homePageword">
          <p>Every sip has a story</p>
          <div className="btn-1">
            <Link to={"/checkout"}>
              <span className="span">SHOP NOW</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="homePageBottomWord">
        <br></br>
        Good wine is one of life’s greatest pleasures. Whether you are a novice
        or a connoisseur, interested in simply sipping or expertly analyzing,
        enjoying a glass of wine can be a sublime experience.
      </div>
    </div>
  );
};

export default Home;
