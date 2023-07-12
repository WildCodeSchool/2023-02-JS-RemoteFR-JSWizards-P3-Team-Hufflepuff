import { useState } from "react";
import Input from "../components/Input/Input";
import users from "../services/users";
import Button from "../components/Button/Button";
import style from "./Forum.module.css";

export default function Forum() {
  const [message, setMessage] = useState({
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
    <>
      <h1 className="title"> Forum</h1>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
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
      {users.map((user) => (
        <div key={user.id} className={style.comment}>
          <img src={user.avatar} alt={user.name} className={style.avatar} />
          <div className={style.box}>
            <div>
              {user.name} - <span>{user.date}</span>
            </div>
            <p>{user.message}</p>
          </div>
        </div>
      ))}
    </>
  );
}
