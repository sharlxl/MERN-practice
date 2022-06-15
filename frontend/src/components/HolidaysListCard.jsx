import React from "react";

const HolidaysListCard = ({ _id, name, likes }) => {
  return (
    <tr id={_id}>
      <td>{name}</td>
      <td>{likes}</td>
      <td>Like</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
  );
};

export default HolidaysListCard;
