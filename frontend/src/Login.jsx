import "./stylesheet/login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Chip } from "@mui/material";
const Axios = require("axios");

export const Login = () => {
  const [error, setError] = useState(null);
  const page = useHistory();

  const [formData, setFormData] = useState({
    email: "",
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

  const errorMassege = () => {
    return <Chip label="Wrong email or password" id="error-massege" />;
  };

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("http://localhost:8080/login", formData, {withCredentials: true}).then(async (res) => {
      if(res.data.status == '200') {
          console.log(res);
          page.push("/home");
      }
      else {
        setError(errorMassege);
        setFormData({
          email: "",
          password: "",
        })
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <div id="login-form">
          <label htmlFor="login-sign-up-form">Login</label>
          <input
            type="email"
            id="login-user-name"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="password"
            id="login-password"
            placeholder={"Password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <div id="error-popup-massege"> {error} </div>
          <button id="login-button">Login</button>
        </div>
      </div>
    </form>
  );
};