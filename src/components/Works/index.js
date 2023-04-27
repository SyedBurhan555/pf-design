import React from "react";
import "./index.css";
import picture1 from "../../assest/1.png";
import picture2 from "../../assest/2.png";
import picture3 from "../../assest/3.png";
import picture4 from "../../assest/4.png";
import CommonContent from "../Common-content";

const Works = () => {
  return (
    <div className="works">
      <CommonContent
        heading="PORTFOLIO"
        subheading="My Masterpiece Collection"
      />
      <div className="works-row">
        <h4>All</h4>
        <h4>UI/UX</h4>
        <h4>WEB DEVELOPMENT</h4>
        <h4>WEB RESEARCH</h4>
        <h4>MARKETING</h4>
      </div>
      <div className="works-images">
        <div className="works-col-1">
          <img src={picture1} alt="" />
          <img src={picture2} alt="" />
        </div>
        <div className="works-col-2">
          <img src={picture3} alt="" />
          <img src={picture4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Works;
