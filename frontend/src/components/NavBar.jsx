import React from "react";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App";

const NavBar = () => {
  const [user, setUser] = useAtom(userAtom);
  console.log(user);
  return (
    <ul className="flex">
      <li className="border-2">
        <NavLink to="/login">Login page</NavLink>
      </li>
      <li className="border-2">
        <NavLink to="/holidays">Holidays</NavLink>
      </li>
      <li className="border-2">
        <NavLink to="/holidays/1">details</NavLink>
      </li>
      <li>Hi! {user.username}</li>
    </ul>
  );
};

export default NavBar;
