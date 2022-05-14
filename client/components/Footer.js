import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer" style={{ textAlign: "center" }}>
        <p>
          <br></br>
          <Link to="/about">About us</Link>
          <Link to="/contact" style={{ paddingLeft: "60px" }}>
            Contact us
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
