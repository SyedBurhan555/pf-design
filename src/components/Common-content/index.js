import React from "react";
import "./index.css";

const CommonContent = ({ heading, subheading }) => {
  return (
    <div>
      <div className="common-content">
        <h4>{heading}</h4>
        <h1>{subheading}</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in culpa qui officia
        </p>
      </div>
    </div>
  );
};

export default CommonContent;
