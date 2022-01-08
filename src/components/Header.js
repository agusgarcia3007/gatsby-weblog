import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="sticky-nav">
      <a href="/" className="sticky-nav-button">
        Home
      </a>
      <div className="sticky-nav-stack">
        <a href="mailto:agusgarcia3007@gmail.com" className="sticky-nav-button">
          Contact
        </a>
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
          <a
            href="https://github.com/agusgarcia3007"
            className="sticky-nav-button"
          >
            <AiFillGithub />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Header;
