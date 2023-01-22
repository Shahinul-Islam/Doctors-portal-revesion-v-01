import React from "react";

const UserAppointment = ({ appointment, index }) => {
  const { name, treatment, selectedSlot, date } = appointment;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{treatment}</td>
      <td>{selectedSlot}</td>
      <td>{date}</td>
    </tr>
  );
};

export default UserAppointment;
