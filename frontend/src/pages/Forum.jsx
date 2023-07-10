import users from "../services/users";
import style from "./Forum.module.css";

export default function Forum() {
  return (
    <>
      <h1 className="title"> Forum</h1>
      {users.map((user) => (
        <div key={user.id} className={style.comment}>
          <img src={user.avatar} alt={user.name} />
          <div>
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
