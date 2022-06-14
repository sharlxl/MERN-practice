import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const HolidaysPage = () => {
  return (
    <>
      <NavBar />
      <section>
        <h1 className="text-2xl">Holidays</h1>
        <form>
          <fieldset>
            <legend>Add a new Holiday</legend>
            <label htmlFor="holiday">Name</label>
            <input
              id="holiday"
              name="holiday"
              type="text"
              placeholder="New Holiday!"
            />
            <button>Add new!</button>
          </fieldset>
        </form>
      </section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>World Kindness Day</td>
            <td>9999</td>
            <td>Like</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          <tr>
            <td>Bathtub Party Day</td>
            <td>12583</td>
            <td>Like</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
      <Outlet />
    </>
  );
};

export default HolidaysPage;
