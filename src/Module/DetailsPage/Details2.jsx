import React, { useEffect } from "react";
import "./style/index.css";
import DetailImg from "../../assets/img1.png";
import RelatedNewsCard from "../../Components/DetailsPage";
import { FaUser } from "react-icons/fa6";
import { AiOutlineCalendar, AiFillHeart } from "react-icons/ai";
import { TiHeartOutline } from "react-icons/ti";
import { RiMessage2Fill } from "react-icons/ri";
import { GrShareOption } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import DetailsNewsCard from "../../Components/DetailsPage/NewsCard";
import DetailsVideoCard from "../../Components/DetailsPage/VideoCard";
import AdCard from "../../Components/Global/AdCard";
import { useLocation, useNavigate } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  WhatsappShareButton,
} from "react-share";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ItemPageNewsCard from "../../Components/ItemPage/ItemPageNewsCard";
import { API_URL } from "../../../API";

const DetailsPage2 = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [data, setData] = useState(null);
  const { t } = useTranslation();
  const navigation = useNavigate()
  console.log()
  useEffect(()=>{
    axios
      .get(
        `${API_URL}/article?id=6524337309c3cf5a3cca172a`
      )
      .then(async(article) => {
        let title = article.data[0].title.split(" ").join("-")
        console.log(title)
        await setData(article.data[0])
        navigation(`/details2/${title}`)
      })
      .catch((err) => {
        console.log(err);
      });

  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
            {isFav ? (
              <>
                <AiFillHeart style={{ marginRight: "18px" }} color="red" onClick={()=>setIsFav(!isFav)}/>
              </>
            ) : (
              <TiHeartOutline style={{ marginRight: "18px" }} onClick={()=>setIsFav(!isFav)}/>
            )}
            <RiMessage2Fill style={{ marginRight: "18px" }} />
            <div style={{ position: "relative" }}>
              <GrShareOption
                style={{ marginRight: "18px", cursor: "pointer" }}
                onClick={() => setIsOpen(!isOpen)}
              />
              <div
                style={{
                  position: "absolute",
                  height: "30px",
                  width: "100px",
                  backgroundColor: "#5a5a5a",
                  borderRadius: 100,
                  bottom: -40,
                  left: -20,
                  alignItems: "center",
                  justifyContent: "space-around",
                  display: isOpen ? "flex" : "none",
                  paddingTop: 10,
                }}
              >
                <FacebookMessengerShareButton url={window.location.href}>
                  <FacebookIcon size={25} />
                </FacebookMessengerShareButton>
                <EmailShareButton url={window.location.href}>
                  <EmailIcon size={25} />
                </EmailShareButton>
              </div>
            </div>
            <WhatsappShareButton url={window.location.href}>
              <BsWhatsapp style={{ marginRight: "18px" }} />
            </WhatsappShareButton>
          </div>
        </div>
        <img src={DetailImg} alt="" className="details-page-main-img" />
        <div className="details-main-text-area">
          <div className="details-main-text-area-heading">
            Trained in jungle warfare, the terrorists are making use of the
            treacherous terrain and forest cover to keep the forces at bay and
            prolong the encounter.
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
        <div className="detalis-page-commment-area1">
          <div className="details-main-related-new-area-heading">
            <span>{t("to")} :</span> Terror Attack
          </div>
          <div className="details-comment-area">
            <div className="comment-button">
              <FaRegComment style={{ marginRight: "10px" }} /> Comment
            </div>
          </div>
        </div>
      </div>
      <div className="container-detail-page-rigth-side" style={{marginTop:"40px"}}>
        <div className="details-page-related-news">
          <div className="details-page-related-news-heading">{t("rn")}</div>
        </div>
        <div className="item-page-main-area-2-news-cards" style={{width:"100%",marginTop:10}}>
              <ItemPageNewsCard />
              <ItemPageNewsCard />
              <ItemPageNewsCard />
              <ItemPageNewsCard />
            </div>
        <div className="details-page-latest-news">
          <div className="details-main-related-new-area-heading">
           {t("ln")}
          </div>
          <div className="details-page-video-cards">
            <DetailsVideoCard />
            <DetailsVideoCard />
          </div>
        </div>
        <div className="details-main-ad-cards">
          <AdCard />
          <AdCard />
        </div>
      </div>
      <div className="detalis-page-commment-area2">
        <div className="details-main-related-new-area-heading">
          <span>{t("to")} :</span> Terror Attack
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

export default DetailsPage2;
