import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import img1 from "../../assets/img-10.png";
import { useNavigate } from 'react-router-dom';

const DetailsVideoCard = () => {
  const navigate = useNavigate()
  return (
    <div className="Detail-video-card-main-box" onClick={()=>navigate("/videos")}>
      <div className="Detail-video-card" >
        <img src={img1} alt="" className="Detail-video-card-img" />
        <div className="Detail-video-card-length">
          <BsPlayCircle style={{ marginRight: "3px" }} /> 8:15
        </div>
      </div>
      <div className="Detail-video-card-text" >
      Enhancing Health Accessibility With ‘Ayushman Bhav’ Initiative patients free 
      </div>
    </div>
  )
}

export default DetailsVideoCard