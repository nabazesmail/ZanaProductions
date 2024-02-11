import React, { useState, useEffect } from "react";
import "./photos.css"; // Ensure this CSS file exists and is correctly linked

// Import images
import photos1 from "../images/kch.JPG";
import photos2 from "../images/shaw.JPG";
import photos3 from "../images/kch2.JPG";
import photos4 from "../images/zhn.JPG";
import photos5 from "../images/zhn2.JPG";
import photos6 from "../images/zhn3.JPG";
import photos7 from "../images/zhn4.JPG";
import photos8 from "../images/zhn5.JPG";
import photos9 from "../images/zhn6.JPG";
import photos10 from "../images/daik.JPG";
import photos11 from "../images/daik2.JPG";

const Photos = () => {
  const images = [photos10,photos11,photos1, photos2, photos3, photos4,photos5,photos6,photos7,photos8,photos9]; // Array of images
  const [opacity, setOpacity] = useState(0); // Initial opacity is 0 for fade-in effect

  useEffect(() => {
    // Start the fade-in effect after the component mounts
    const timer = setTimeout(() => setOpacity(1), 10); // Small delay before starting animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="photo-title" style={{ opacity: opacity, transition: 'opacity 1s ease' }}>
      <h1 className="title-h1">Photos</h1>
      <p className="paragraph">Check out some of my photos!</p>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Photos ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
