import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="footer" style={{ textAlign: "center" }}>

   
        <p>
          <br></br>
          <Link to="/about">About Us</Link>{" "}
          <Link to="/contact" style={{ paddingLeft: "60px" }}>
            Contact Us
          </Link>
        </p>
        <br />
        <p>Copyright © 2022 ACE Team FullStack Academy, All Right Reserved.</p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;