import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="homePage">
        {" "}
        <div className="homePageword">
          <p>Every sip has a story...</p>
        </div>
      </div>
      <div>
        <div id="parallax-world-of-ugg">
          <section>
            <div className="title">
              <h1>IT'S ALL ABOUT THE GRAPES</h1>
            </div>
          </section>
          <section className="block">
            <div>
              <p
                style={{
                  width: "450px",
                  height: "100px",
                  float: "right",
                  marginRight: "100px",
                  marginTop: "100px",
                }}
              >
                <span className="first-character ny">I</span>Good wine is one of
                life’s greatest pleasures. Whether you are a novice or a
                connoisseur, interested in simply sipping or expertly analyzing,
                enjoying a glass of wine can be a sublime experience.
                <div className="btn-2">
                  <Link to={"/aboutwine"}>
                    <span>LEARN MORE</span>
                  </Link>
                </div>
              </p>
              <img
                src="./images/wineAndGrapes1.jpg"
                alt=""
                style={{
                  width: "450px",
                  height: "650px",
                }}
              />
            </div>
          </section>

          <section>
            <div className="parallax-four">
              <h2 style={{ color: "black" }}>Jennifer's wine</h2>
              <div className="btn-1" style={{ marginLeft: "400px" }}>
                <Link to={"/wine"}>
                  <span className="span">SHOP WINE</span>
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div className="title">
              <h1>IT'S HISTORICAL</h1>
            </div>
          </section>
          <section className="block">
            <div>
              <p
                style={{
                  width: "450px",
                  height: "100px",
                  float: "left",
                  marginRight: "100px",
                  marginTop: "100px",
                }}
              >
                <span className="first-character ny">I</span>Beer was consumed by
                ancient farmers who built the first agrarian civilizations,
                Egyptian workers as they toiled along the Nile river, and is
                even thought by experts to have been the cause of civilization
                as we know it. By imbibing in beer, you’re following in an
                ancient tradition that brought joy to people’s lives throughout
                history.
                <div className="btn-2">
                  <Link to={"/aboutbeer"}>
                    <span>LEARN MORE</span>
                  </Link>
                </div>
              </p>
              <img
                src="./images/beerSmall.jpg"
                alt=""
                style={{
                  width: "450px",
                  height: "650px",
                }}
              />
            </div>
          </section>
          <section>
            <div className="parallax-five">
              <h2>Lina's Beer</h2>

              <div className="btn-1" style={{ marginLeft: "400px" }}>
                <Link to={"/beer"}>
                  <span className="span">SHOP BEER</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
