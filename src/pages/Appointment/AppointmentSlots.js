import React, { useEffect, useState } from "react";
import AppointmentModal from "../../components/AppointmentModal";
// import LinkButton from "../../components/LinkButton";
import SlotCard from "./SlotCard";

const AppointmentSlots = (props) => {
	const [appointmentOptions, setAppointmentOptions] = useState([]);
	const [treatment, setTreatment] = useState();
	const [mySlot, setMySlot] = useState("");
	const [loading, setLoading] = useState(true);
	// console.log(treatment);
	useEffect(() => {
		setLoading(true);
		fetch(
			"https://doctors-portal-server-shahinul-islam.vercel.app/appointments"
		)
			.then((res) => res.json())
			.then((data) => setAppointmentOptions(data));
		setLoading(false);
	}, []);
	return (
		<>
			{loading ? (
				<>
					<progress className="flex justify-center m-auto progress progress-success w-56"></progress>
				</>
			) : (
				<>
					<section className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
						{appointmentOptions.map((option) => (
							<SlotCard
								key={option._id}
								option={option}
								setTreatment={setTreatment}
								setMySlot={setMySlot}
							></SlotCard>
						))}
						<AppointmentModal
							treatment={treatment}
							mySlot={mySlot}
							selected={props.selected}
						></AppointmentModal>
					</section>
				</>
			)}
		</>
	);
};

export default AppointmentSlots;
