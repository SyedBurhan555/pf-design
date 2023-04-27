import React from "react";
import "./index.css";



const ArticleCard = ({ image }) => {
  
  return (
    <div>
      <div className="article-card">
        <img src={image} alt="" className="article-image" />
        <div>
          <h2>Welcome to Jekyll!Go Ahead and edit</h2>
          <p>
            You’ll find this post in your _posts directory. Go ahead and edit it
            and re-build the site to see your changes. You can rebuild the..
          </p>
          <a href="#">Read More &rarr;</a>
        </div>
        <span className="date">08 Aug 2022</span>
      </div>
    </div>
  );
};

export default ArticleCard;
