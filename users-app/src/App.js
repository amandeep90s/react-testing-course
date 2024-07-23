import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const onAddUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <UserForm onAddUser={onAddUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
};

export default App;
