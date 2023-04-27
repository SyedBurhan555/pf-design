import React from "react";
import "./index.css";

const Card = ({ image, heading, project }) => {
  return (
    <div className="card">
      <img src={image} alt=""/>
      <h3>{heading}</h3>
      <p>{project} Project</p>
    </div>
  );
};

export default Card;
