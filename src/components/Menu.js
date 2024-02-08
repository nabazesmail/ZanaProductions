import "./Menu.css";
import React, { useState } from "react";

// Import images from the src folder
import camera from "../images/camera.jpg";
import camera2 from "../images/camera2.jpg";
import camera3 from "../images/camera5.jpg";
import yourPhoto from "../images/camera6.jpg";
import swipeRight from "../images/swipe-right.png";
import swipeLeft from "../images/swipe-left.png";

const Menu = () => {
  const images = [camera, camera2, camera3,yourPhoto]; // Array of images
  const [current, setCurrent] = useState(0); // Current image index

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <>
      <div className="hero-section">
        <div className="photo-container">
          <p className="second-par">Creative Studio</p>
        </div>
      </div>
      <div className="outside-hero-section">
        <h1 className="title">My photos</h1>
        <p className="welcome-text">
          Explore our gallery of captured moments and memories. Join us on a
          visual journey.
        </p>
      </div>
      <div className="photo-gallery">
        <button onClick={prevSlide} className="slide-button left">
          <img src={swipeLeft} alt="Previous" />
        </button>
        <img
          src={images[current]}
          alt={`Slide ${current}`}
          className="gallery-photo"
        />
        <button onClick={nextSlide} className="slide-button right">
          <img src={swipeRight} alt="Next" />
        </button>
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
          &copy; {new Date().getFullYear()} Zana Photography. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Menu;
