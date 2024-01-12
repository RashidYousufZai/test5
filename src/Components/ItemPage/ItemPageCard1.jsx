import React from "react";
import img from "../../assets/Rectangle 28.png";
import "./style/index.css";
import { useState } from "react";
import { useEffect } from "react";

const ItemPageCard1 = ({ title, discription, date, image,onPress }) => {
  const [desc,SetDesc] = useState(discription)
 useEffect(()=>{
  let tt = "";
  let times = desc.length > 500 ? 500 : desc.length;

  for (let i = 0; i < times; i++) {
    tt += desc[i];
  }
  SetDesc(tt + "...");
 },[])
  return (
    <div style={{ margin: "10px 0" }}>
      <div className="line"></div>
      <div className="item-page-card-main-conatiner" onClick={onPress?onPress:()=>{}}>
        <div className="item-page-card-main-conatiner-img">
          <img src={image} alt="" />
        </div>

        <div className="item-page-card-main-conatiner-text">
          <div className="heading-item-page-card-main-conatiner-text">
            {title}
            {/* New Health Campaign, ‘Ayushman Bhava’ To Reach Out 7 Crore Families:
            All You Need To Know About The Initiative */}
          </div>
          <div className="date-item-page-card-main-conatiner-text">
            {date}
            {/* 15 august 2023 */}
          </div>
          <div
            className="text-item-page-card-main-conatiner-text"
          >
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPageCard1;
