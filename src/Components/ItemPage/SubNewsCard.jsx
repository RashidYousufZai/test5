import React from "react";
import img from "../../assets/SubNewsImg.png";
import "./style/index.css";
import { BsPlayCircle } from 'react-icons/bs'

const SubNewsCard = ({isVideo}) => {
  return (
    <div
      className="sub-News-area-1-img-main"
      style={{ width: "100%", height: "100px" }}
    >
      <div className="sub-News-area-1-img">
      <img src={img}  />
      <div>
     {isVideo?<> <div className="item-video-card-length">
          <BsPlayCircle style={{ marginRight: "3px" }} /> 8:15
        </div></>:<></>}
      </div>
      </div>
      <div className="sub-News-area-1-text">
        The high court upheld a trial court's judgement which had declared the
        Muslim According to the
      </div>
    </div>
  );
};

export default SubNewsCard;
