// PhotoGallery.js
import React, { useState, useEffect } from "react";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../API";
import "./style/index.css";

const PhotoGallery = () => {
  const [photoGalleries, setPhotoGalleries] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/galery`)
      .then((response) => {
        setPhotoGalleries(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching galleries:", error);
      });
  }, []);

  const handleImageClick = (galleryId, imageIndex) => {
    // Navigate to the gallery page for the selected image
    navigation(`/gallery/${galleryId}/image/${imageIndex}`);
  };

  console.log(photoGalleries);

  return (
    <div className="photo-gallery-container">
      <h1 className="details-page-main-heading">Photos Galeries</h1>
      {photoGalleries.length > 0 && (
        <div key={0} className="gallery-item-main">
        <Image.PreviewGroup>
          <div className="image-row-main">
            {photoGalleries[0].images.map((image, imageIndex) => (
              <Image key={imageIndex} src={image} className="gallery-image" />
            ))}
          </div>
        </Image.PreviewGroup>
        <div className="gallery-info">
          <h2>{photoGalleries[0].title}</h2>
        </div>
      </div>
      
      )}

      {photoGalleries.slice(1).map((gallery, galleryIndex) => (
        <div key={galleryIndex} className="gallery-item">
          <Image.PreviewGroup>
            <div className="image-row">
              {gallery.images.map((image, imageIndex) => (
                <Image key={imageIndex} width={150} src={image} />
              ))}
            </div>
          </Image.PreviewGroup>
          <div className="gallery-info">
            <h2>{gallery.title}</h2>
            <p>{gallery.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
