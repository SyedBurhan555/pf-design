import React from "react";
import "./index.css";
import CommonContent from "../Common-content";

const Footer = () => {
  return (
    <div className="footer">
      <CommonContent heading="CONTACT US" subheading="Ways To Contact Me" />
      <div className="social-links">
        <div className="links">
          <i className="fa fa-envelope"></i>
          <p>syedburhan@gmail.com</p>
        </div>
        <div className="links">
          <i className="fa fa-phone"></i>
          <p>+1 (818) 2489 XX</p>
        </div>
        <div className="links">
          <i className="fab fa-skype"></i>
          <p>live:shail_</p>
        </div>
        <div className="links">
          <i className="fab fa-twitter"></i>
          <p>@abc</p>
        </div>
        <div className="links">
          <i className="fab fa-dribbble"></i>
          <p>Tortoiz</p>
        </div>
      </div>
      <hr />
      <p className="copyright">
        &copy; Copyright - ABC | All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
