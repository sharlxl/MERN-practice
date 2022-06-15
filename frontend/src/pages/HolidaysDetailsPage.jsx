import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HolidaysDetailsPage = () => {
  const [holiday, setHoliday] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/holidays/${id}`)
      .then((response) => response.json())
      .then((data) => setHoliday(data));
  }, []);
  if (holiday.status === "fail") {
    return "No Holiday here";
  }
  return (
    <section>
      <h1 className="text-3xl">Holidays Details Page</h1>
      <h2 className="text-2xl">{holiday.name}</h2>
      <dl>
        <dt>Celebrated</dt>
        <dd className="italic">{holiday.celebrated ? "yes" : "no"}</dd>
        <dt>Likes</dt>
        <dd className="font-bold">{holiday.likes}</dd>
        <dt>Description</dt>
        <dd>{holiday.description}</dd>
      </dl>
    </section>
  );
};

export default HolidaysDetailsPage;
