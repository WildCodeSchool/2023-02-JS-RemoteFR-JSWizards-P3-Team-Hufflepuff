import { useState } from "react";
import Button from "@components/Button/Button";

import Input from "../components/Input/Input";

export default function Register() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
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
