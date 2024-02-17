import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css"; // Make sure this path is correct
import BackIcon from "../Icons/BackIcon.svg";
import FacebookIcon from "../Icons/FacebookIcon.svg";
import InstagramIcon from "../Icons/InstagramIcon.svg";
import LinkedInIcon from "../Icons/LinkedInIcon.svg";

import myPhoto from "../../images/zana.JPG"; // Adjust the path and file name to match the case exactly

const Contact = () => {
  let navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="contact-section">
      <div className="text-column">
        <button
          className="back-button"
          onClick={goBack}
          aria-label="Back to Home"
        >
          <img src={BackIcon} alt="Back" className="back-icon" />
        </button>
        <h2 className="title-h2">Get In Touch</h2>
        <p className="par-me">
          If you have any questions or feedback, feel free to reach out to me!
        </p>
        <div className="contact-info">
          <p>Email: zanaproductions@gmail.com</p>
          <p>Phone: (+964 ) 123-45-67</p>
          <p>Address: Iraq, Sulaymaniyah, Bakrajo</p>
        </div>
        <div className="social-media-icons">
          <a
            href="https://www.facebook.com/za.na.79656?mibextid=opq0tG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="social-icon fb-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/zanaaali?igsh=MTA4MjJyMXFpNGpndg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="social-icon insta-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/zana-ahmed-233177180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              className="social-icon linkedin-icon"
            />
          </a>
        </div>
      </div>

      <div className="photo-column">
        <img src={myPhoto} alt="Your Name" className="contact-photo" />
      </div>
      {/* Add more contact details or a contact form */}
    </div>
  );
};

export default Contact;
