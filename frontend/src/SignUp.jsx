import { useState } from "react";
import "./stylesheet/sign-up.css";
const Axios = require("axios");

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const sendUserData = () => {
    const user = {
      email: formData.email,
      userName: formData.userName,
      password: formData.password,
    };
    console.log(user);

    Axios.post("http://localhost:8080/sign-up", user);
  };

  return (
    <div className="sign-up">
      <form id="sign-up-form" onSubmit={sendUserData}>
        <label htmlFor="login-sign-up-form"> Sign Up</label>
        <input
          type="email"
          id="sign-up-user-name"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          id="sign-up-username"
          placeholder="User name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          id="sign-up-password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit" id="sign-up-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};
