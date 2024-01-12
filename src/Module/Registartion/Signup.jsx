import React, { useEffect, useState } from "react";
import "./style/index.css";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { API_URL } from "../../../API";

const Signup = ({ isAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/user?id=${localStorage.getItem("id")}`)
      .then((user) => {
        console.log(user.data);
        if (user.data[0].role != "user") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      });
  }, []);

  const onSumbit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/registerd`, {
        email,
        password,
        phone: phoneNumber,
      })
      .then(async (data) => {
        console.log(data);
        localStorage.setItem("id", data.data._id);
        await navigate(`/verfication/${data.data._id}`);
      });
  };
  return (
    <div className="user-registration-form">
      <h1>Sign Up</h1>
      <form onSubmit={onSumbit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="PhoneNumber">Phone Number:</label>
        <input
          type="number"
          id="PhoneNumber"
          name="PhoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="Confirmpassword">Confirm Password:</label>
        <input
          type="Confirmpassword"
          id="Confirmpassword"
          name="Confirmpassword"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Sign Up" />
      </form>
      <div
        onClick={() => navigate("/login")}
        style={{
          fontSize: 15,
          fontWeight: 500,
          color: "white",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {" "}
        You have account Login
      </div>
    </div>
  );
};

export default Signup;
