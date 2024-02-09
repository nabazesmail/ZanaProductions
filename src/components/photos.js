import React, { useState, useEffect } from "react";
import "./photos.css"; // Ensure this CSS file exists and is correctly linked

// Import images
import photos1 from "../images/camera.jpg";
import photos2 from "../images/camera2.jpg";
import photos3 from "../images/camera3.jpg";
import photos4 from "../images/camera4.jpg";

const Photos = () => {
  const images = [photos1, photos2, photos3, photos4]; // Array of images
  const [opacity, setOpacity] = useState(0); // Initial opacity is 0 for fade-in effect

  useEffect(() => {
    // Start the fade-in effect after the component mounts
    const timer = setTimeout(() => setOpacity(1), 10); // Small delay before starting animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="photo-title" style={{ opacity: opacity, transition: 'opacity 1s ease' }}>
      <h1>Photos</h1>
      <p>Check out some of my photos!</p>
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
