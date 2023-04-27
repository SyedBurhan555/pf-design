import React from "react";
import "./index.css";
import article1 from "../../assest/blog_05.jpg";
import article2 from "../../assest/blog_09.jpg";
import article3 from "../../assest/blog_06.jpg";
import article4 from "../../assest/blog_07.jpg";
import article5 from "../../assest/blog_08.jpg";
import ArticleCard from "../Article-Card";
import ArticleSmallCard from "../Article-small-card";
import CommonContent from "../Common-content";

const Articles = () => {
  return (
    <div className="article">
      <CommonContent heading="LATEST NEWS" subheading="My Latest Articles" />
      <div className="article-row">
        <div className="article-col-1">
          <ArticleCard image={article1} />
          <ArticleCard image={article2} />
        </div>
        <div className="article-col-2">
          <ArticleSmallCard image={article3} />
          <hr />
          <ArticleSmallCard image={article4} />
          <hr />
          <ArticleSmallCard image={article5} />
        </div>
      </div>
    </div>
  );
};

export default Articles;
