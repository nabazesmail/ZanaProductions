import React from "react";
import "./footer.css"; // Make sure this path matches the location of your CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <p>&copy; {currentYear} ZanaProductions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
