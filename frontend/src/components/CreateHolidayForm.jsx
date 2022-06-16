import React, { useState } from "react";

const CreateHolidayForm = ({ setLastIdOfHolidayList }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onClickSubmitNewHoliday = () => {
    console.log("click", name);
    fetch("/api/holidays/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLastIdOfHolidayList(data.data._id);
        setName("");
      });
  };

  return (
    <fieldset className=" border-2 border-stone-600 p-5 flex-col w-1/2 bg-amber-200">
      <legend className="text-stone-800 font-bold ">Add a new Holiday</legend>
      <label className="text-stone-800" htmlFor="holiday">
        Name
      </label>
      <input
        id="holiday"
        name="holiday"
        type="text"
        placeholder="New Holiday!"
        maxLength={20}
        className="p-1 rounded-md border-2 border-stone-800 focus:outline-stone-500 focus:bg-stone-600 focus:text-amber-300 m-2 bg-stone-200"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        id="description"
        name="description"
        type="textarea"
        placeholder="Was it awesome??"
        rows="4"
        cols="50"
        className="p-1 rounded-md border-2 border-stone-800 focus:outline-stone-500 focus:bg-stone-600 focus:text-amber-300 m-2 bg-stone-200"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        disabled={name.length === 0}
        onClick={onClickSubmitNewHoliday}
        className="rounded-md border-2 border-stone-600 w-1/2 mx-auto m-1 p-1 text-stone-800 hover:bg-stone-600 hover:text-amber-300 disabled:bg-amber-200 disabled:text-stone-500 disabled:border-amber-200"
      >
        Add new!
      </button>
    </fieldset>
  );
};

export default CreateHolidayForm;
