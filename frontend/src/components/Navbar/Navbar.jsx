import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-2.png";
import bars from "../../assets/bars.svg";

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logoDJ" />
      </Link>
      <nav className="navbar">
        <ul className="navbar_liste">
          <li className="navbar_item">
            <Link to="/" className="navbar_link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/forum" className="navbar_link">
              Forum
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar_link">
              Connexion
            </Link>
          </li>
          <li>
            <Link to="/register" className="navbar_link">
              Inscription
            </Link>
          </li>
        </ul>
      </nav>
      <img src={bars} alt="bars" className="bars" />
    </header>
  );
}
