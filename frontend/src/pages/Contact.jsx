import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

export default function Contact() {
  const [message, setMessage] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(message);
  };

  return (
    <div>
      <h1>Contact</h1>
      <p>Contactez-nous pour toute question, suggestion ou collaboration !</p>
      <p>Notre équipe vous répondra dans les plus brefs délais 🎵📧.</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          info="Votre email"
          id="email"
          value={message.email}
          hChange={handleChange}
        />
        <Input
          info="Sujet du message"
          id="subject"
          value={message.subject}
          hChange={handleChange}
        />
        <Input
          info="Votre message"
          id="message"
          value={message.message}
          hChange={handleChange}
          textarea
        />

        <Button text="Envoyer" />
      </form>
    </div>
  );
}
