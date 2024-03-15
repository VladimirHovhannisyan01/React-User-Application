import { useState } from "react";
import Form from "./conteiners/Form";
import Table from "./conteiners/Table";

function App() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUserHandler = (user) => {
    const userIndex = userData.findIndex((u) => u.id === user.id);
    if (userIndex !== -1) {
      setUserData((prevUsers) => {
        prevUsers[userIndex] = user;
        return prevUsers;
      });
      setSelectedUser((prev) => prev === null);
      return;
    }
    setUserData((prev) => [...prev, user]);
  };

  const deleteUserHandler = (id) => {
    setUserData((prev) => prev.filter((user) => user.id !== id));
  };

  const editUserHandler = (id) => {
    setSelectedUser(userData.find((user) => user.id === id));
  };

  return (
    <>
      <Form addUserHandler={addUserHandler} selectedUser={selectedUser} />
      <Table
        userData={userData}
        deleteUserHandler={deleteUserHandler}
        editUserHandler={editUserHandler}
      />
    </>
  );
}

export default App;
