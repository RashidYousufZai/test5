import React from "react";
import "./style/index.css";
import image from "../../assets/details-img-1.png";

const RelatedNewsCard = () => {
  return (
    <div className="related-news-card">
      <img src={image} alt="" />
      <div className="related-news-card-text">
        {'The e-Sanjeevani platform is ensuring healthcare to the last mile, by facilitat...'}
      </div>
    </div>
  );
};

export default RelatedNewsCard;
