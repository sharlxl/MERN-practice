import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CreateHolidayForm from "../components/CreateHolidayForm";
import HolidaysListCard from "../components/HolidaysListCard";
import NavBar from "../components/NavBar";

const HolidaysPage = () => {
  const [holidaysList, setHolidaysList] = useState([]);
  const [lastIdOfHolidayList, setLastIdOfHolidayList] = useState("");
  useEffect(() => {
    fetch(`/api/holidays/all`)
      .then((response) => response.json())
      .then((data) => {
        setHolidaysList(data.data);
      });
  }, [lastIdOfHolidayList]);

  if (holidaysList.status === "fail") {
    return holidaysList.data;
  }

  return (
    <>
      <NavBar />
      <section>
        <h1 className="text-2xl">Holidays</h1>
        <div className="flex justify-center">
          <CreateHolidayForm setLastIdOfHolidayList={setLastIdOfHolidayList} />
        </div>
      </section>
      <section className="flex gap-4">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {holidaysList.map((holiday) => {
              return (
                <HolidaysListCard
                  key={holiday._id}
                  holidaysList={holidaysList}
                  setHolidaysList={setHolidaysList}
                  {...holiday}
                />
              );
            })}
          </tbody>
        </table>
        <Outlet />
      </section>
    </>
  );
};

export default HolidaysPage;
