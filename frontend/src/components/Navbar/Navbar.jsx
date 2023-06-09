import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo-2.png";
import bars from "../../assets/bars.svg";

export default function Navbar() {
  return (
    <header>
      <img className="logo" src={logo} alt="logoDJ" />
      <nav className="navbar">
        <ul className="navbar_liste">
          <li className="navbar_item">
            <a href="!#" className="navbar_link">
              Accueil
            </a>
          </li>
          <li>
            <a href="!#" className="navbar_link">
              Menu
            </a>
          </li>
          <li>
            <a href="!#" className="navbar_link">
              Connexion
            </a>
          </li>
          <li>
            <a href="!#" className="navbar_link">
              Inscription
            </a>
          </li>
        </ul>
      </nav>
      <img src={bars} alt="bars" className="bars" />
    </header>
  );
}
