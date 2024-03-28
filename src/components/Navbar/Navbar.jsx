/* eslint-disable react/prop-types */

import { useState } from "react";

import { FaBars } from "react-icons/fa";

import "./Navbar.css";

export default function Navbar({ theme, setTheme }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="colornavbar">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#">
            <img src="./logoico.png" alt="Logo mcr" />
          </a>
        </div>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <FaBars />
        </div>
        <nav
          className={`navbar-topic ${showMenu ? "show-menu" : ""}`}
          onClick={handleLinkClick}
        >
          <a href="#about">À Propos</a>
          <a href="#experience">Expérience</a>
          <a href="#skill">Compétences</a>
          <a href="#project">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="navbar-right">
          {theme === "dark" ? (
            <>
              <label htmlFor="themedark">Dark Mode</label>
              <input
                onClick={handleClick}
                id="toggle"
                name="themedark"
                aria-label="themedark"
                className="toggle"
                type="checkbox"
                checked
              />
            </>
          ) : (
            <>
              <label htmlFor="themelight">Light Mode</label>
              <input
                onClick={handleClick}
                id="toggle"
                name="themelight"
                aria-label="themelight"
                className="toggle"
                type="checkbox"
              />
            </>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
}
