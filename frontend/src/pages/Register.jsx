/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3310/api/readers/", {
        email,
        password,
        username,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Page register </h1>
      <form onSubmit={submitForm}>
        <label> Email </label>
        <input type="email" onChange={handleChangeEmail} />
        <label> Password </label>
        <input type="password" onChange={handleChangePassword} />
        <label> Username </label>
        <input type="text" onChange={handleChangeUsername} />
        <input type="submit" />
      </form>
    </div>
  );
}
