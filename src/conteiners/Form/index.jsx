import { useEffect, useState } from "react";

const Form = ({ addUserHandler, selectedUser }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    age: "",
    salary: "",
  });

  const { firstName, lastName, username, age, salary } = userData;

  useEffect(() => {
    if (selectedUser) {
      setUserData(selectedUser);
    }
  }, [selectedUser]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    addUserHandler({
      ...userData,
      ...(selectedUser ? {} : { id: Date.now() }),
    });

    setUserData({
      firstName: "",
      lastName: "",
      username: "",
      age: "",
      salary: "",
    });

    // const formData = new FormData(e.target);
    // const user = {
    //   id: Date.now(),
    //   firstName: formData.get("firstName"),
    //   username: formData.get("lastName"),
    //   lastName: formData.get("username"),
    //   age: formData.get("age"),
    //   salary: formData.get("salary"),
    // // };
    // addUserHandler(userData);

    e.target.reset();
  };

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <form className="forma" onSubmit={formSubmitHandler}>
      <input
        type="text"
        name="firstName"
        onChange={onChangeHandler}
        value={firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={onChangeHandler}
        value={lastName}
      />
      <input
        type="text"
        name="username"
        onChange={onChangeHandler}
        value={username}
      />
      <input type="number" name="age" onChange={onChangeHandler} value={age} />
      <input
        type="number"
        name="salary"
        onChange={onChangeHandler}
        value={salary}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
