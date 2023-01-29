import { format } from "date-fns";
import React from "react";
import { toast } from "react-hot-toast";

const AppointmentModal = ({ treatment, mySlot, selected }) => {
  // console.log(treatment, mySlot);

  const handleModalSubmit = (event) => {
    // event.preventDefault();
    const form = event.target.parentNode.parentNode.children[1];
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const appointmentDetails = {
      name,
      phone,
      email,
      treatment: treatment.name,
      selectedSlot: mySlot,
      date: format(selected, "PP"),
    };
    fetch("https://doctors-portal-server-ten-indol.vercel.app/myAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(appointmentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Data submitted successfully");
          form.reset();
        }
      });
    // alert("Are you sure to submit?");
    // toast.success("Successfully Submitted");
    // console.log(appointmentDetails);
    // form.reset();
  };

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <div className="flex justify-between mb-4">
            <p className="text-xl font-semibold">
              {treatment && treatment.name}
            </p>
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <form>
            <input
              disabled
              value={mySlot}
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <input
              disabled
              value={format(selected, "PP")}
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <input
              required
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs mb-3"
            />

            <input
              required
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <input
              type="submit"
              htmlFor="my-modal"
              className="btn w-full"
              onClick={handleModalSubmit}
            />
          </form>
          <div className="modal-action">
            {/* <label
              type="submit"
              htmlFor="my-modal"
              className="btn w-full"
              onClick={handleModalSubmit}
            >
              Submit
            </label> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
