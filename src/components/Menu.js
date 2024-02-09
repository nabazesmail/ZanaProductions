import "./Menu.css";

import yourPhoto from "../images/camera6.jpg";
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
          Explore our creations across different mediums. Join us on a journey
          of visual and artistic exploration.
        </p>
        <div className="buttons-container">
          <button onClick={goToPhotos} className="navigation-button">
            Photos
          </button>
          <button onClick={goToDesigns} className="navigation-button">
            Designs
          </button>
        </div>
      </div>

      {/* New Section with a photo and your story */}
      <div className="new-section">
        <h2>My Photography Journey</h2>
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
