import { FC, useState } from "react";
type User = { name: string; age: number };
const users = [
  { name: "Robert", age: 14 },
  { name: "Roger", age: 15 },
  { name: "Chris", age: 16 },
  { name: "Eddie", age: 17 },
];
const UserSearch: FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<User | undefined>();
  const onClick = () => {
    const found = users.find((user) => {
      return user.name === name;
    });
    setUser(found);
  };
  return (
    <div>
      APP Search
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={onClick}>Search User</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
