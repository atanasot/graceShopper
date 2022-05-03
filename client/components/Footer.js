import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div class="block" style={{ textAlign: "center" }}>
        <p>
          <br></br>
          <Link to="/about">About Us</Link>{" "}
          <Link to="/about" style={{ paddingLeft: "60px" }}>
            Contact Us
          </Link>
        </p>
        <br></br>
        <p>Copyright © 2022 ACE Team FullStack Academy, All Right Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
