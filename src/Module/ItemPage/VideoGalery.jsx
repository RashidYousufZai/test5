import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../API";
import "../ItemPage/style/index.css"

const VideoGallery = () => {
  const [videoGalleries, setVideoGalleries] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/videogalery`)
      .then((response) => {
        setVideoGalleries(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching galleries:", error);
      });
  }, []);

  const handleVideoClick = (galleryId, videoIndex) => {
    // Navigate to the gallery page for the selected video
    navigation(`/gallery/${galleryId}/video/${videoIndex}`);
  };

  return (
    <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
      {videoGalleries.length > 0 && (
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <h2>{videoGalleries[0].title}</h2>
          {videoGalleries[0].images && Array.isArray(videoGalleries[0].images) && (
            <div>
              {videoGalleries[0].images.map((videoUrl, videoIndex) => (
                <div key={videoIndex}>
                  <video
                    className="video-card-img video-card-img-main "
                    width={1000}
                    height={750}
                    controls
                    onClick={() => handleVideoClick(videoGalleries[0]._id, videoIndex)}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {videoGalleries.slice(1).map((gallery, galleryIndex) => (
        <div key={galleryIndex} style={{ width: "33.33%", height: "400px", marginLeft: "10px", marginBottom: "20px" }}>
          <h2>{gallery.title}</h2>
          {gallery.images && Array.isArray(gallery.images) && (
            <div>
              {gallery.images.map((videoUrl, videoIndex) => (
                <div key={videoIndex}>
                  <video
                    className="video-card-img"
                    width={320}
                    height={240}
                    controls
                    onClick={() => handleVideoClick(gallery._id, videoIndex)}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
