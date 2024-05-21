import "./Home.css";

import yourPhoto from "../../images/15.jpg";
import yourPhoto2 from "../../images/design2.jpg";
import { useNavigate } from "react-router-dom";

import { PhotoIcon } from "../Icons/Icons"; // Adjust the path as necessary

import Footer from "../footer/footer";

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
            <PhotoIcon />
          </button>
          <button
            onClick={goToDesigns}
            className="navigation-button blue-border"
          >
            Designs
            <PhotoIcon />
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="section-divider"></div>

      <div className="new-section">
        <div className="content-wrapper">
          <img src={yourPhoto} alt="Photos" className="your-photo" />
          <div className="text-section">
            <h2 className="title2">My Photography Journey</h2>
            <p className="experience-par">
              For over three years, I've been capturing moments that tell
              stories, evoke emotions, and preserve memories. My journey in
              photography has taken me from the bustling streets of urban
              landscapes to the serene beauty of nature. Each photograph I take
              is a piece of a story, a frozen moment in time that speaks without
              words. This journey has not just been about taking pictures, but
              about discovering the world through a different lens and
              connecting with people and places in a unique way.
            </p>
          </div>
        </div>
      </div>

      <div className="new-section2">
        <div className="content-wrapper2">
          <div className="text-section2">
            <h2 className="title3">My Design Journey</h2>
            <p className="experience-par2">
              Embarking on my design journey over four years ago, I've aimed to
              merge aesthetics with functionality, creating visual experiences
              that are both resonant and effective. Focusing on the careful
              choice of typography, color schemes, and thoughtful UI layouts,
              each project has been a chance to delve into visual storytelling's
              vast potential. My path has encompassed graphic design, web
              design, and UX design, fostering a comprehensive approach to
              crafting compelling, user-focused designs. This journey
              underscores design's transformative power, driving my passion for
              innovation and expanding visual possibilities.
            </p>
          </div>
          <img src={yourPhoto2} alt="designPhoto" className="your-photo2" />
        </div>
      </div>

      {/* Divider Line */}
      <div className="section-divider"></div>

      {/* Using the Footer component */}
      <Footer />
    </>
  );
};

export default Menu;
