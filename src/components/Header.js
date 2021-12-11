import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <header className="App-header">
        <img
          src={logo}
          alt="Official logo of Pokemon"
          className="header-logo"
        />
        <nav className="nav">
          <ul className="nav-ul">
            <li className="nav-link">Pokedex</li>
            <li className="nav-link">My Collection</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
