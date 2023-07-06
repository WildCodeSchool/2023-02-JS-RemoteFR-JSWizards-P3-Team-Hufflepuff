import users from "../services/users";

export default function Forum() {
  return (
    <>
      <h1>Forum</h1>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            {user.name} - <span>{user.date}</span>
          </div>
          <p>{user.message}</p>
        </div>
      ))}
    </>
  );
}
