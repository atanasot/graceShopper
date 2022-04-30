import React from "react";
import { Parallax } from "react-parallax";
import background from "../img/background.jpg";

// Checkout Stanleys comments

const HomeBanner = () => (
  <Parallax
    className="photo"
    bgImage={background}
    strength={800}
    bgImageStyle={{ minHeight: "100vh" }}
  >
    <div className="content">
      <span className="img-txt">a trip to space</span>
    </div>
  </Parallax>
);

export default HomeBanner;
