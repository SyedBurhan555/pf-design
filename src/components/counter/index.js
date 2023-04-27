import React from "react";
import "./index.css";

const Counter = ({ work, data }) => {
  return (
    <div className="counter">
      <h2>{work} +</h2>
      <p>{data}</p>
    </div>
  );
};

export default Counter;
