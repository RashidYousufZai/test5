import React, { useEffect } from "react";
import "./style/index.css";
// import videoPlayer from "../../assets/video.mp4";
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

const VideoPage = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="detail-page-top-container container2 container3">
      <div className="container-detail-page-left-side">
        <h1 className="details-page-main-heading">
          100 Hours On, Forces Locked In Jungle Warfare With Terrorists In
          Kashmir
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
        <video className="details-page-main-video" controls>
          {/* <source src={videoPlayer} type="video/mp4" /> */}
        </video>
        <div className="details-main-text-area">
          <div className="details-main-text-area-heading">
            War Of Words Between Babar Azam And Shaheen Afridi After Pakistan's
            Asia Cup 2023 Exit: Report
          </div>
          <div className="deatils-main-para-area">
            <div>
              <span>Gadol, Anantnag : </span>
              The encounter with terrorists in Jammu and Kashmir's Anantnag has
              stretched to the fifth day, with thousands of troops including
              para commandos locked in an endless gunfight deep inside the dense
              forests of Gadol. Trained in jungle warfare, the terrorists are
              making use of the treacherous terrain and forest cover to keep the
              forces at bay and prolong the encounter. <br /> The faceoff that
              continues for over 100 hours now began Wednesday and three
              officers, including two from the Army and a policeman, were killed
              in action in an attempt to neutralise the terrorists. <br /> The
              heavily armed terrorists, believed to be two-three in number, are
              hiding in a tactically favourable location in the dense and steep
              forest. This indicates a new pattern being used by the terrorists
              to take on the security structure in Kashmir. <br /> These 100
              hours, the troops fired hundreds of motor shells and rockets, and
              targeted suspected terrorist hideouts with hi-tech equipment and
              dropped explosives using advanced drones. <br /> Loud explosions
              and heavy gunfire echo in the serene alpine forests time to time.{" "}
              <br />
              Army's Northern Command chief Lt General Upendra Dwivedi visited
              the encounter site on Saturday where he was briefed about how
              troops are using the advanced equipment including drones and
              firepower against the terrorists. <br /> OP
              GAROL#LtGenUpendraDwivedi#ArmyCdr, Northern Command reviewed the
              operational situation on the ongoing operations at #Kokernag
              forest area in #Anantnag. He was briefed by the ground commanders
              on the High Intensity Operations in which Hi-tech Equipment is
              being used for…
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
            <span>{t("to")} :</span> War
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
        <div className="video-page-news-cards">
          <RelatedNewsCard />
          <RelatedNewsCard />
          <RelatedNewsCard />
          <RelatedNewsCard />
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

export default VideoPage;
