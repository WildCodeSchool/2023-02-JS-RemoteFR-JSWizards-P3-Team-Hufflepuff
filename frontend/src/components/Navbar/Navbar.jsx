import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar_liste">
          <li className="navbar_item">
            <Link to="/" className="navbar_link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/music" className="navbar_link">
              Music
            </Link>
          </li>
          <li>
            <Link to="/galerie" className="navbar_link">
              Galerie
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar_link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
