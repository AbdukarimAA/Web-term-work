import React from "react";

import "../../container.css";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">Pulse</div>
          <button className="header-button">Выйти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
