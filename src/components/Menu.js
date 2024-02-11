import "./Menu.css";

import yourPhoto from "../images/gull.jpg";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  let navigate = useNavigate();

  const goToPhotos = () => {
    navigate("/photos");
    console.log("Navigate to Photos");
  };

  const goToDesigns = () => {
    navigate("/Designs");
    console.log("Navigate to Designs");
  };

  return (
    <>
      <div className="hero-section">
        <div className="photo-container">
          <p className="second-par">Creative Studio</p>
        </div>
      </div>

      <div className="outside-hero-section">
        <h1 className="title">My Creative Space</h1>
        <p className="welcome-text">
          Dive into a world where creativity knows no bounds. From the vibrant
          energy of visual art to the nuanced strokes of design, each creation
          is a doorway to an extraordinary journey. Discover a tapestry of
          visuals that tell stories, evoke emotions, and captivate the spirit.
        </p>
        <p className="call-to-action">
          Take a moment to explore some of my works by clicking on the Photos
          and Designs buttons below.
        </p>
        <div className="buttons-container">
          <button
            onClick={goToPhotos}
            className="navigation-button orange-border"
          >
            Photos
            {/* Inline SVG for Photos Button */}
            <svg
              className="nextIcons"
              fill="currentColor"
              height="20px"
              width="20px"
              viewBox="0 0 477.175 477.175"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor" stroke-width="35"
            >
              <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" />
            </svg>
          </button>
          <button
            onClick={goToDesigns}
            className="navigation-button blue-border"
          >
            Designs
            {/* Inline SVG for Designs Button */}
            <svg
              className="nextIcons"
              fill="currentColor"
              height="20px"
              width="20px"
              viewBox="0 0 477.175 477.175"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor" stroke-width="35"
            >
              <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="section-divider"></div>

      {/* New Section with a photo and your story */}
      <div className="new-section">
        <h2 className="title2">My Photography Journey</h2>
        <img src={yourPhoto} alt="Your Experience" className="your-photo" />
        <p className="experince-par">
          For over three years, I've been capturing moments that tell stories,
          evoke emotions, and preserve memories. My journey in photography has
          taken me from the bustling streets of urban landscapes to the serene
          beauty of nature. Each photograph I take is a piece of a story, a
          frozen moment in time that speaks without words. This journey has not
          just been about taking pictures, but about discovering the world
          through a different lens and connecting with people and places in a
          unique way.
        </p>
      </div>

      {/* Divider Line */}
      <div className="section-divider"></div>

      {/* Footer */}
      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} ZanaProductions. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Menu;
