import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import UserAppointment from "./UserAppointment";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [myAppointmentsDetails, setMyAppointmentsDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (user) {
      const url = `http://localhost:5000/myAppointments?email=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMyAppointmentsDetails(data);
          setLoading(false);
        });
    }
  }, []);

  return loading ? (
    <progress className="progress progress-success my-4 w-56 mx-auto flex justify-center"></progress>
  ) : (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-[#ECFEFF]">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm my-2 btn-primary drawer-button lg:hidden"
          >
            Dashboard
          </label>

          <div className="overflow-x-auto -mt-72">
            <p className="pb-5 text-2xl hidden lg:block">My Appointment</p>
            <table className="table table-zebra w-full text-sm">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>treatment</th>
                  <th>Time</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {myAppointmentsDetails &&
                  myAppointmentsDetails.map((appointment, index) => (
                    <UserAppointment
                      key={index}
                      appointment={appointment}
                      index={index}
                    ></UserAppointment>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>My Appointment</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
