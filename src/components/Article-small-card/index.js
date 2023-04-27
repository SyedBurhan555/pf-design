import React from "react";
import "./index.css";




const ArticleSmallCard = ({ image }) => {
  return (
    <div>
      <div className="article-right-card">
        <img src={image} alt="" />
        <div>
          <h4>html5 Static Site Genetor For..</h4>
          <p>html5 Static Site Generator For All amet </p>
        </div>
        <span className="date">08 Aug 2022</span>
      </div>
    </div>
  );
};

export default ArticleSmallCard;
