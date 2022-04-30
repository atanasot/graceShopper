import React from "react";

// Checkout Stanleys comments

const Home = () => {
  return (
    <div>
      <div className="homePage">
        {" "}
        <div className="homePageword">
          <p>Every sip has a story</p>
        </div>
      </div>
      <div
        style={{ height: "1000px", backgroundColor: "white", fontSize: "36px" }}
      >
        {" "}
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
    </div>
  );
};

export default Home;
