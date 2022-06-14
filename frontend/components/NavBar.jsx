import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li className="border-2">
        <NavLink to="/login">Login page</NavLink>
      </li>
      <li className="border-2">
        <NavLink to="/holidays">Holidays</NavLink>
      </li>
      <li className="border-2">
        <NavLink to="/holidays/1">details</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
