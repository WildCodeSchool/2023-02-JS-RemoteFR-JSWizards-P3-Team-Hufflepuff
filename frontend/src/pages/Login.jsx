import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

export default function Login() {
  const [user, setUser] = useState({
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
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
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
