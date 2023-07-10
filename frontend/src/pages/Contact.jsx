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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quibusdam doloremque. Quisquam, quibusdam doloremque. Quisquam,
        quibusdam doloremque.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          info="Votre email"
          id="email"
          value={message.email}
          hChange={handleChange}
        />
        <Input
          type="text"
          info="Sujet du message"
          id="subject"
          value={message.subject}
          hChange={handleChange}
        />
        <Input
          type="text"
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
