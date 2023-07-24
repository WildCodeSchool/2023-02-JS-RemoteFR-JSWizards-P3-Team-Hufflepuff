import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import logo from "../../assets/logo-2.png";
import "./Navbar.css";

/**
 * On récupère le user en props pour savoir si l'utilisateur est connecté ou non
 */
export default function Navbar({ user }) {
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
          {
            // si user existe alors on affiche le forum
            // sinon on affiche les liens de connexion et d'inscription
            user ? (
              <>
                <li>
                  <Link to="/forum" className="navbar_link">
                    Forum
                  </Link>
                </li>
                <li>
                  <Link to="/" className="navbar_link">
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
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
              </>
            )
          }
        </ul>
      </nav>
    </header>
  );
}

Navbar.defaultProps = {
  user: null,
};

Navbar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};
