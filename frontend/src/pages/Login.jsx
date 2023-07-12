import PropTypes from "prop-types";
import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

/**
 * On récupère la fonction handleLogin en props, nous en aurons besoin
 * pour mettre à jour le state user dans App.jsx
 */
export default function Login({ handleLogin }) {
  /**
   * On crée un state user qui contient un objet
   * avec les clés email et password
   * et on initialise les valeurs à vide
   */
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    /**
     * Cette manière de faire permet de ne pas avoir à créer une fonction
     * handleChange pour chaque input
     * Le spread operator permet de récupérer les clés et valeurs de l'objet user
     * [e.target.name] permet de récupérer le name de l'input
     * et de le mettre en clé de l'objet user
     * [e.target.value] permet de récupérer la valeur de l'input
     * et de la mettre en valeur de l'objet user
     */
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // on appelle la fonction handleLogin en lui passant en paramètre l'objet user
    handleLogin(user);
  };

  return (
    <>
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        {/* 
        J'appel le composant Input qui prend en props
        - un type (text, email, password)
        - un info (le label de l'input)
        - un id (l'id de l'input)
        - une value (la valeur de l'input)
        - une fonction hChange (qui permet de changer la valeur de l'input)
        */}
        <Input
          type="email"
          info="Votre email"
          id="email"
          value={user.email}
          hChange={handleChange}
        />
        <Input
          type="password"
          info="Votre mot de passe"
          id="password"
          value={user.password}
          hChange={handleChange}
        />
        <Button text="Envoyer" />
      </form>
    </>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
