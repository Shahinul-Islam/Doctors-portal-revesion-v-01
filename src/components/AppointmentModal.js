import { format } from "date-fns";
import React from "react";
import { toast } from "react-hot-toast";

const AppointmentModal = ({ treatment, mySlot, selected }) => {
	const handleModalSubmit = (event) => {
		event.preventDefault();
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
		if (mySlot && name && email) {
			fetch(
				"https://doctors-portal-server-shahinul-islam.vercel.app/myAppointment",
				{
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(appointmentDetails),
				}
			)
				.then((res) => res.json())
				.then((data) => {
					if (data.acknowledged) {
						form.reset();
						alert("You have successfully booked your slot.");
					}
				});
		} else {
			alert("Please Fill all the require information");
			// toast.error("Please select a slot");
		}
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
					<div className="modal-action"></div>
				</div>
			</div>
		</>
	);
};

export default AppointmentModal;
