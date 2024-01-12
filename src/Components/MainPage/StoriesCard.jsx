import React from "react";
import img from "../../assets/img-1.png";

const StoriesCard = ({ width, height, color, text, image, OnPress }) => {
  return (
    <>
      <div
        onClick={OnPress ? OnPress : () => {}}
        className="stories-card"
        style={{ height, backgroundColor: color, cursor: "pointer" }}
      >
        <img src={image ? image : img} alt="" style={{ width }} />
        <div className="stories-card-text">
          {text
            ? text
            : '"India Have Better...": Sri Lanka Captain Honest World Cup Admission'}
        </div>
      </div>
    </>
  );
};

export default StoriesCard;
