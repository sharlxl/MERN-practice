import React from "react";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../App";
import { useAtom } from "jotai";

const LoginPage = () => {
  // ==jotai== //
  const [user, setUser] = useAtom(userAtom);
  //abit like usecontext

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
        // console.log(data._doc);
        if (data.status === "sucessful") {
          setUser(data.data);
          navigate("/holidays");
        } else {
          alert("log in unsucessful");
        }
      });
  };

  return (
    <>
      <h1
        className="text-6xl text-center bg-stone-800 p-20 text-amber-300 mb-10
      "
      >
        MERN Holidays!
      </h1>
      <form className="flex justify-center" onSubmit={onSumbitLogin}>
        <fieldset className="border-2 border-stone-600 p-5 flex flex-col w-1/2">
          <legend className="text-stone-800">Login</legend>
          <label className="text-stone-800" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter here"
            className=" focus:outline-stone-500 focus:bg-stone-600 focus:text-amber-300 m-2 bg-stone-200"
          />
          <label className="text-stone-800" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter here"
            className=" focus:outline-stone-500 focus:bg-stone-600 m-2 focus:text-amber-300 bg-stone-200"
          />
          <button className="rounded-md border-2 border-stone-600 w-1/2 mx-auto m-1 p-1 text-stone-800 hover:bg-stone-600 hover:text-amber-300">
            Log in
          </button>
        </fieldset>
      </form>

      <button
        className="rounded-md border-2 border-stone-600 float-right mr-20 m-2 p-1 text-stone-800 hover:bg-stone-600 hover:text-amber-400"
        onClick={goToHolidays}
      >
        Cheat button to holidays
      </button>
    </>
  );
};

export default LoginPage;
