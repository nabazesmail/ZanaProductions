import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Designs.css"; // Ensure this CSS file exists and is correctly linked

// Import images
import design1 from "../../images/design.JPG";
import design2 from "../../images/design7.jpg";
import design3 from "../../images/design6.jpg";
import design4 from "../../images/design5.jpg";
import design5 from "../../images/design4.jpg";
import design6 from "../../images/design8.jpg";
import design7 from "../../images/design9.png";
import design8 from "../../images/design10.png";

import BackIcon from "../Icons/BackIcon.svg";

const Designs = () => {
  const images = [
    design1,
    design2,
    design3,
    design4,
    design5,
    design6,
    design7,
    design8,
  ]; // Array of images

  const [opacity, setOpacity] = useState(0); // Initial opacity is 0 for fade-in effect

  useEffect(() => {
    // Start the fade-in effect after the component mounts
    const timer = setTimeout(() => setOpacity(1), 10); // Small delay before starting animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="design-title"
      style={{ opacity: opacity, transition: "opacity 1s ease" }}
    >
      <h1 className="title-h1">Designs</h1>
      <Link to="/">
        <img src={BackIcon} alt="Back" className="back-icon" />
      </Link>
      <p className="paragraph">Check out some of my designs!</p>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={image}
              alt={`Design ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designs;
