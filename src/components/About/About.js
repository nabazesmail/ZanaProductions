import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import BackIcon from "../Icons/BackIcon.svg"; // Adjust the path to where you saved your SVG
import myPhoto from "../../images/zana3.jpg"; // Adjust the path and file name to match the case exactly

const About = () => {
  let navigate = useNavigate();
  const goBack = () => navigate("/"); // Or use navigate(-1) to go back

  return (
    <div className="about-section">
      <button
        className="back-button"
        onClick={goBack}
        aria-label="Back to Home"
      >
        <img src={BackIcon} alt="Back" className="back-icon" />
      </button>
      <div className="photo-column">
        <img src={myPhoto} alt="Your Name" className="about-photo" />
      </div>
      <div className="text-column">
        <h2 className="title-h2">About Me</h2>
        <p className="par">
          I'm a passionate photographer and designer dedicated to capturing
          moments that tell stories and designing experiences that evoke
          emotions. With a keen eye for detail and a creative mind, I strive to
          bring a unique perspective to every project. My journey is fueled by
          the beauty of the unspoken, the power of visual storytelling, and the
          pursuit of connecting deeply with my audience.
        </p>
        <p className="par">
          Through photography, I seek to immortalize the fleeting moments and
          the emotions they carry. As a designer, I aim to translate these
          moments into visual narratives that resonate, combining aesthetics
          with meaning. Every project is a new adventure, an opportunity to
          learn, grow, and leave a lasting impact through my work.
        </p>
        <p className="par">
          Let's embark on this journey of discovery and creation together,
          capturing the essence of the moment and designing experiences that
          inspire.
        </p>
      </div>
    </div>
  );
};

export default About;
