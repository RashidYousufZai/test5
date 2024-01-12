import React, { useEffect } from "react";
import "./style/index.css";
import videoPlayer from "../../assets/video2.mp4";
import img7 from "../../assets/Rectangle 67.png";
import RelatedNewsCard from "../../Components/DetailsPage";
import { FaUser } from "react-icons/fa6";
import { AiOutlineCalendar } from "react-icons/ai";
import { TiHeartOutline } from "react-icons/ti";
import { RiMessage2Fill } from "react-icons/ri";
import { GrShareOption } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import DetailsNewsCard from "../../Components/DetailsPage/NewsCard";
import DetailsVideoCard from "../../Components/DetailsPage/VideoCard";
import AdCard from "../../Components/Global/AdCard";
import { useLocation } from "react-router-dom";
import { WhatsappShareButton } from "react-share";
import { useTranslation } from "react-i18next";
import SubNewsCard from "../../Components/ItemPage/SubNewsCard";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../API";

const VideoPage2 = () => {
  const { pathname,search } = useLocation();
  const { t } = useTranslation();
  const query = new URLSearchParams(search);
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    console.log("heee")
    axios
      .get(
        `${API_URL}/article?id=${query.get("id")}`
      )
      .then(async (article) => {
        console.log(article.data[0],"art");
        setData(article.data[0]);
        document.getElementById("pararvideo").innerHTML = article?.data[0].discription
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="detail-page-top-container container2 container3">
      <div className="container-detail-page-left-side">
        <h1 className="details-page-main-heading">
          {data?.title}
        </h1>
        <div className="details-page-top-items">
          <div className="details-page-top-item1">
            <FaUser style={{ marginRight: "10px" }} />
            India
          </div>
          <div className="details-page-top-item2">
            <AiOutlineCalendar size={22} style={{ marginRight: "10px" }} />
            12|08|2023 12:15
          </div>
          <div className="details-page-top-item3">
            <TiHeartOutline style={{ marginRight: "18px" }} />
            <RiMessage2Fill style={{ marginRight: "18px" }} />
            <GrShareOption style={{ marginRight: "18px" }} />
            <WhatsappShareButton url="https://api.whatsapp.com/send/?phone=923052507015">
            <BsWhatsapp style={{ marginRight: "18px" }} />
            </WhatsappShareButton>
          </div>
        </div>
        <video className="details-page-main-video" controls src={data?.image} muted />
        <div className="details-main-text-area">
          <div className="details-main-text-area-heading">
            {data?.title}: Report
          </div>
          <div className="deatils-main-para-area">
            <div id="pararvideo">
            </div>
          </div>
        </div>
        <div className="details-main-related-new-area">
          <div className="details-main-related-new-area-heading">
            {t("rn")}
          </div>
          <div className="details-main-related-new-area-cards">
            <DetailsNewsCard />
            <DetailsNewsCard />
            <DetailsNewsCard />
          </div>
        </div>
        <div className="video-comment-area1">
          <div className="details-main-related-new-area-heading">
            <span>{t("to")} :</span> {data?.topic}
          </div>
          <div className="details-comment-area">
            <div className="comment-button">
              <FaRegComment style={{ marginRight: "10px" }} /> Comment
            </div>
          </div>
        </div>
      </div>
      <div className="container-detail-page-rigth-side">
        <div className="details-page-latest-news">
          <div className="details-main-related-new-area-heading">
            {t("ln")}
          </div>
          <div className="details-page-video-cards">
            <DetailsVideoCard />
            <DetailsVideoCard />
          </div>
        </div>
        <div className="itempage-main-sub-news-area">
            <SubNewsCard/>
            <SubNewsCard/>
            <SubNewsCard/>
            <SubNewsCard isVideo={true}/>
          </div>
        <div className="video-bootm-area">
          <div className="video-ad-card-section">
            <AdCard />
          </div>
          <div className="video-page-ad-section">
            <img src={img7} alt="" />
          </div>
        </div>
      </div>
      <div className="video-comment-area2">
        <div className="details-main-related-new-area-heading">
          <span>{t("to")} :</span> War
        </div>
        <div className="details-comment-area">
          <div className="comment-button">
            <FaRegComment style={{ marginRight: "10px" }} /> Comment
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage2;
