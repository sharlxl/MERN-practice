import React from "react";
import { useNavigate } from "react-router-dom";
import produce from "immer";

const HolidaysListCard = ({
  _id,
  name,
  likes,
  holidaysList,
  setHolidaysList,
}) => {
  const navigate = useNavigate();

  const onClickOpenDetails = (_id) => {
    navigate(`/holidays/${_id}`);
  };

  const onClickDelete = (_id) => {
    fetch(`/api/holidays/${_id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) =>
        setHolidaysList(holidaysList.filter((holiday) => holiday._id !== _id))
      );
  };

  const onClickLike = (_id) => {
    fetch(`/api/holidays/${_id}`, { method: "PUT" })
      .then((response) => response.json())
      .then((data) => {
        const index = holidaysList.findIndex((holiday) => holiday._id === _id);
        //==> without npm immer
        // setHolidaysList([
        //   ...holidaysList.slice(0, index),
        //   data.data,
        //   ...holidaysList.slice(index + 1),
        // ]);
        //==> with npm immer
        const nextState = produce(holidaysList, (draft) => {
          draft[index] = data.data;
        });
        setHolidaysList(nextState);
      });
  };

  return (
    <tr id={_id}>
      <td onClick={() => onClickOpenDetails(_id)}>{name}</td>
      <td>{likes}</td>
      <td>
        <button
          className="rounded-md border-2 border-stone-600 px-1 text-stone-800 hover:bg-stone-600 hover:text-amber-400"
          onClick={() => onClickLike(_id)}
        >
          Like
        </button>
      </td>
      <td>
        <button
          className="rounded-md border-2 border-stone-600 px-1 text-stone-800 hover:bg-stone-600 hover:text-amber-400"
          onClick={() => onClickEdit(_id)}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="rounded-md border-2 border-stone-600 px-1 text-stone-800 hover:bg-stone-600 hover:text-amber-400"
          onClick={() => onClickDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default HolidaysListCard;
