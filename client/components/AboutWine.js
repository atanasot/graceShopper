import React, { useEffect } from "react";

const AboutWine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="parallax-world-of-ugg">
      <section>
        <div class="title">
          <h1> Wines </h1>
        </div>
      </section>
      <section class="block">
        <div>
          <h2
            style={{
              color: "black",
              float: "right",
              fontSize: "35px",
            }}
          >
            Types of White Wine
          </h2>
          <p
            style={{
              width: "450px",
              height: "100px",
              float: "right",
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
              Chardonnay: Dry, flavors of apple, citrus,and tropical fruit
              flavors, medium-bodied
            </p>
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Riesling: Ranges from off-dry to sweet, fruity flavors of green
              apple and lime, light-bodied
            </p>
            <p
              style={{
                marginTop: "15px",
                marginLeft: "100px",
              }}
            >
              Moscato (Muscat Blanc): Sweet, juicy fruity flavor, light-bodied
            </p>{" "}
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Pinot Grigio/Gris: Off-dry, light fruit flavors like peach and
              citrus, light- to medium-bodied
            </p>
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Sauvignon Blanc: Off-dry, green fresh fruity flavors, light- to
              medium-bodied, acidic
            </p>
          </p>
          <img
            src="./images/whitewine.jpg"
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
            float: "left",
            fontSize: "45px",
          }}
        >
          Types of Red Wine
        </h2>
        <div>
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
              Cabernet Sauvignon: Dry, flavors of black cherry and black
              currant, full-bodied
            </p>
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Merlot: Dry, flavors of black cherry and chocolate, medium- to
              full-bodied
            </p>
            <p
              style={{
                marginTop: "15px",
                marginLeft: "100px",
              }}
            >
              Pinot Noir: Off-dry, flavors of cherry and raspberry, light- to
              medium-bodied
            </p>{" "}
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Zinfandel: Off-dry, berry and fruit flavors, medium- to full-body,
              high alcohol level
            </p>
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Malbec: Dry, flavors of dark fruit and chocolate, full-bodied
            </p>
            <p
              style={{
                marginTop: "25px",
                marginLeft: "100px",
              }}
            >
              Syrah: Dry, flavors of blueberry, plum and chocolate, full-bodied
            </p>
          </p>
          <img
            src="./images/redwine.jpg"
            alt=""
            style={{
              width: "450px",
              height: "650px",
            }}
          />
        </div>
      </section>
    </div>
  );
};
export default AboutWine;
