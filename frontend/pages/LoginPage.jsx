import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const goToHolidays = () => {
    navigate("/holidays");
  };

  const onSumbitLogin = (e) => {
    e.preventDefault();
    const loginData = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };
    // console.log(JSON.stringify(loginData));

    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "sucessful") {
          navigate("/holidays");
        } else {
          alert("log in unsucessful");
        }
      });
  };

  return (
    <>
      <h1 className="text-xl">MERN Holidays!</h1>
      <form onSubmit={onSumbitLogin}>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter here"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter here"
          />
          <button>Log in</button>
        </fieldset>
      </form>

      <button onClick={goToHolidays}>Cheat button to holidays</button>
    </>
  );
};

export default LoginPage;
