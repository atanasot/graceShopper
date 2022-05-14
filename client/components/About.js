import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div style={{ marginTop: "100px", marginLeft: "270px" }}>
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          <Link to="/">Go Back</Link>
        </span>
      </div>
      <h1 className="Abouth1">ABOUT US</h1>
      <div className="aboutContainer">
        <figure className="snip1336">
          <img src="./images/jenniferWine.jpg" alt="sample87" />
          <figcaption>
            <img
              src="./images/jennifer.png"
              alt="profile-sample4"
              className="profile"
            />
            <h2>
              Jennifer Woodbury<span>Software Engineer</span>
            </h2>
            <p>
              It's not considered work when you're having so much fun.
              Developing a web application and working with such a great team of
              engineers. It's been a great experience. Cheers with wines and
              beers!!{" "}
            </p>
            <a
              href="https://www.linkedin.com/in/jennifer-woodbury-0290814/"
              className="follow"
            >
              LinkedIn
            </a>
            <a href="https://github.com/JWoodbury125" className="info">
              GitHub
            </a>
          </figcaption>
        </figure>
        <figure className="snip1336 hover">
          <img src="./images/joshbeer.jpg" alt="sample74" />
          <figcaption>
            <img
              src="./images/josh.png"
              alt="profile-sample2"
              className="profile"
            />
            <h2>
              Josh Reyes<span>Software Engineer</span>
            </h2>
            <p>
              One of my dreams was to be the next Kobe Bryant. But being 5’8
              with a jumpshot that lays more bricks than the Toll Brothers, I
              realized I should stick to my other childhood dream of building
              out the digital world.
            </p>
            <a
              href="https://www.linkedin.com/in/joshuacreyes/"
              className="follow"
            >
              LinkedIn
            </a>
            <a href="https://github.com/jcreys" className="info">
              GitHub
            </a>
          </figcaption>
        </figure>
        <figure className="snip1336">
          <img src="./images/linabeer.jpg" alt="sample69" />
          <figcaption>
            <img
              src="./images/lina.png"
              alt="profile-sample5"
              className="profile"
            />
            <h2>
              Lina Ryerkerk<span>Software Engineer</span>
            </h2>
            <p>
              Coming from a Chemistry background, I kept imagining redox
              reactions when I was working with React or Redux. Lately I've been
              running more code than chemical reactions and I'm loving it!
              Cheers to new experiences!
            </p>
            <a
              href="https://www.linkedin.com/in/lina-ryerkerk/"
              className="follow"
            >
              LinkedIn
            </a>
            <a href="https://github.com/atanasot" className="info">
              GitHub
            </a>
          </figcaption>
        </figure>

        <figure className="snip1336">
          <img src="./images/kennethWine.jpg" alt="sample69" />
          <figcaption>
            <img
              src="./images/kenneth.png"
              alt="profile-sample5"
              className="profile"
            />
            <h2>
              Kenneth Lee<span>Software Engineer</span>
            </h2>
            <p>
              After helping my clients to get their dream house for a couple of
              years, I decided to follow my passion for software and start
              building dreams with code instead of bricks.It's the BEST decision
              I've ever made.
            </p>
            <a
              href="https://www.linkedin.com/in/kenneth-lee-software-engineer/"
              className="follow"
            >
              LinkedIn
            </a>
            <a href="https://github.com/kennethlee0502" className="info">
              GitHub
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default About;
