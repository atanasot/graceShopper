import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutWine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="parallax-world-of-ugg">
      <div style={{ marginTop: "100px", marginLeft: "270px" }}>
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          <Link to="/">Go Back</Link>
        </span>
      </div>
      <section>
        <div class="title">
          <h1> Beers </h1>
        </div>
      </section>
      <section class="block">
        <div>
          <h2
            style={{
              color: "black",
              float: "left",
              fontSize: "60px",
            }}
          >
            Technical Terms
          </h2>
          <p
            style={{
              width: "450px",
              height: "100px",
              float: "left",
              marginRight: "100px",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                marginTop: "100px",
                marginLeft: "100px",
              }}
            >
              ABV: alcohol by volume, as it tells you how much alcohol is in
              your beer. Beers typically have an ABV of 3%–13%, with the
              majority around 4%–7%. For reference, wine is about 8%–14% and
              liquor is about 15%–50% ABV.
            </p>
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              IBU: international bitterness unit, a measurement that tells you
              how bitter a beer tastes. Beer can range from 0 (no bitterness) to
              above 100 IBUs. However, just because a beer has a high IBU count
              doesn’t mean that you’ll perceive that bitterness. Things like
              high amounts of malt can mask the taste of bitterness without
              altering the number of IBUs. Plus, we all have different palates
              and perceive bitterness differently.
            </p>
          </p>
          <img
            src="./images/beerabout1.jpg"
            alt=""
            style={{
              width: "450px",
              height: "650px",
            }}
          />
        </div>
      </section>

      <section class="block">
        <h2
          style={{
            color: "black",
            float: "right",
            fontSize: "65px",
          }}
        >
          Types of Beer
        </h2>
        <div>
          <p
            style={{
              width: "450px",
              height: "100px",
              float: "right",
              marginRight: "100px",
              marginTop: "15px",
            }}
          >
            <p
              style={{
                marginTop: "20px",
                marginLeft: "100px",
              }}
            >
              Amber : Ambers can be ales or lagers, but both styles are so named
              for their amber color. They’re also both known for their toasty,
              caramel-tasting malts and low to medium-high hop bitterness. They
              often have notes of citrus or pine to balance the sweetness of the
              malt.
            </p>
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Bock: Dry, This lager beer, which translates to “goat” in German,
              is a dark, malty beer first brewed in Einbeck, Germany. It is
              traditionally sweet and strong.
            </p>
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Kolsch: This beer hybrid is crafted using both ale and lager
              brewing techniques. The result is light, refreshing and easy to
              drink. Technically, a true Kolsch has to come from Cologne,
              Germany, but you’ll find Kolsch-style beers at craft breweries all
              over America.
            </p>
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Pale Lager : Almost all the most popular beers in America are pale
              lagers (more on that below). They’re known to be easy-drinking
              beers with light to medium hops and a clean malt taste.
            </p>
          </p>
          <img
            src="./images/beerabout2.jpg"
            alt=""
            style={{
              width: "450px",
              height: "650px",
              merginTop: "40px",
            }}
          />
        </div>
      </section>
    </div>
  );
};
export default AboutWine;
