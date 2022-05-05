import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
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
              I'm looking for something that can deliver a 50-pound payload of
              snow on a small feminine target. Can you suggest something?
              Hello...?{" "}
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
              Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes:
              What's misunderstood about you? Calvin: Nobody thinks I'm a
              genius.
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
              If you want to stay dad you've got to polish your image. I think
              the image we need to create for you is "repentant but learning".
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
              building dreams with code instead of bricks.
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
