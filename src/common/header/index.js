import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src={process.env.PUBLIC_URL + "application-logo.png"}
        className="header-logo"
        alt="logo"
      />
      <div className="header-text">TASKS APPLICATION</div>
    </div>
  );
};

export default Header;
