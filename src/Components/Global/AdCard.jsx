import React from 'react'
import img from "../../assets/Rectangle 73.png"
import "./style/index.css"

const AdCard = () => {
  return (
    <div className="ad-card-main-area">
        <img src={img} alt="" />
        <div className="ad-card-main-area-text">
        New Health Campaign, ‘Ayushman Bhava’ To Reach Out... <span className="ad-card-button">Learn More</span>
        </div>
    </div>
  )
}

export default AdCard