import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <img className="logo" src="./src/assets/logo-2.png" alt="logoDJ" />
      <nav className="navbar">
        <ul className="navbar_liste">
          <li className="navbar_item">
            <a href="/" className="navbar_link">
              Accueil
            </a>
            <a href="/" className="navbar_link">
              Menu
            </a>
            <a href="/" className="navbar_link">
              Connexion
            </a>
            <a href="/" className="navbar_link">
              Inscription
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
