import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../../images/LOGO.png";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <h1>ZanaProductions</h1>
      </div>
      <div className="logo-div">
        <img src={logo} alt="ZanaProductions" />
      </div>
      <button
        className="nav-toggle"
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`nav ${isNavVisible ? "nav-visible" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => setIsNavVisible(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsNavVisible(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsNavVisible(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
