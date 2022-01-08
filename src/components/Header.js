import React from "react";

const Header = () => {
  return (
    <div className="sticky-nav">
      <a href="/" className="sticky-nav-button">
        Home
      </a>
      <div className="sticky-nav-stack">
        <a href="/" className="sticky-nav-button">
          Blog
        </a>
        <a href="/" className="sticky-nav-button">
          Contact
        </a>
        <a href="/" className="sticky-nav-button">
          About
        </a>
      </div>
    </div>
  );
};

export default Header;
