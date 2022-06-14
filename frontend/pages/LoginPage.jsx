import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const goToHolidays = () => {
    navigate("/holidays");
  };

  return (
    <>
      <h1 className="text-xl">MERN Holidays!</h1>
      <form>
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
