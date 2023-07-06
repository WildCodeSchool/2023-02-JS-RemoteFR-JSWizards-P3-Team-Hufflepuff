import { useState } from "react";
import Button from "../components/Button/Button";

import Input from "../components/Input/Input";

export default function Register() {
  /**
   * On crée un state user qui contient un objet
   * avec les clés fullname, email et password
   * et on initialise les valeurs à vide
   */
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    /**
     * Cette manière de faire permet de ne pas avoir à créer une fonction
     * handleChange pour chaque input
     *      * Le spread operator permet de récupérer les clés et valeurs de l'objet user
     * [e.target.name] permet de récupérer le name de l'input
     * et de le mettre en clé de l'objet user
     * [e.target.value] permet de récupérer la valeur de l'input
     * et de la mettre en valeur de l'objet user
     */
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(user);
  };
  return (
    <>
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          info="Votre Nom complet"
          id="fullname"
          value={user.fullname}
          hChange={handleChange}
        />
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
