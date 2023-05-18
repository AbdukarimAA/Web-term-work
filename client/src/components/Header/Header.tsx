import React, { useState } from "react";

import "../../container.css";
import "./header.css";
import { CiMenuBurger } from "react-icons/all";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSelected, setIsSelected] = useState(false);

  const isAuth = !!localStorage.getItem("token");

  const handleSelect = () => {
    setIsSelected((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">Pulse</div>
          <div className="submenu-wrapper">
            <CiMenuBurger
              size={"20px"}
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={handleSelect}
            />
            {isSelected && (
              <div className="submenu">
                {isAuth && (
                  <div className="header-button" onClick={handleLogout}>
                    <Link
                      to={"/authorize"}
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Выйти
                    </Link>
                  </div>
                )}
                {!isAuth && (
                  <div className="header-button">
                    <Link
                      to={"/authorize"}
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Войти
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
