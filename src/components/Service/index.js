import React from "react";
import "./index.css";
import design from "../../assest/pen2.png";
import code from "../../assest/code-white2.png";
import search from "../../assest/search2.png";
import marketing from "../../assest/marketing-white2.png";
import Card from "../card";
import Counter from "../counter";
import CommonContent from "../Common-content";

const Service = () => {
  return (
    <>
      <div className="service">
        <CommonContent heading="SERVICE" subheading="What I Am Great At" />
        <div className="cards">
          <Card image={design} heading="UI/UX Design" project="129" />
          <Card image={code} heading="Web Development" project="221" />
          <Card image={search} heading="Web Search" project="450" />
          <Card image={marketing} heading="Marketing" project="331" />
        </div>
        <div className="counters">
          <Counter work="9" data="year of Experience" />
          <Counter work="200" data="Satisfied Customers" />
          <Counter work="769" data="Design Items" />
          <Counter work="124" data="Clients Served" />
        </div>
      </div>
    </>
  );
};

export default Service;
