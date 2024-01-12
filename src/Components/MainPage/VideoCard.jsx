import React from "react";
import "./style/index.css";
import { BsPlayCircle } from "react-icons/bs";
import img1 from "../../assets/img-1.png";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ color, height, width, width2, data }) => {
  const navigate = useNavigate();
  let title = data?.title.split(" ").join("-");
  return (
    <div
      className="video-card-main-box"
      style={{ height, width }}
      onClick={() => navigate(`/videos/${title}?id=${data?._id}`)}
    >
      <div className="video-card" style={{ width: width }}>
        {data ? (
          <video className="video-card-img" autoPlay={false}>
            <source src={data.image} />
          </video>
        ) : (
          <img
            src={img1}
            style={{ height, width }}
            alt=""
            className="video-card-img"
          />
        )}
        {!data && (
          <div className="video-card-length">
            <BsPlayCircle style={{ marginRight: "3px" }} />
          </div>
        )}
      </div>
      <div className="video-card-text" style={{ color }}>
        Watch -{" "}
        {data
          ? data.title
          : `"Pagal Hai Kya": Rohit's Chat With Gill Has Internet Talking`}
      </div>
    </div>
  );
};

export default VideoCard;
