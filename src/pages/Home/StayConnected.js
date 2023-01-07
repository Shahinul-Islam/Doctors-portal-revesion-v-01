import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import connectFormBg from "../../images/appointment.png";

const StayConnected = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    event.target.reset();
    toast.success("Thank you!");
  };
  return (
    <div
      className="mt-24 mb-10 p-4"
      style={{ backgroundImage: `url(${connectFormBg})` }}
    >
      <div>
        <p className="text-center text-[#19D3AE] text-xl font-bold">
          Contact Us
        </p>
        <p className="text-center text-white text-3xl font-light">
          Stay connected with us
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-10 flex flex-col"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs mx-auto"
          required
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          required
          className="input input-bordered w-full max-w-xs mt-3 mx-auto"
        />
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <p>This field is required</p>} */}

        <textarea
          className="textarea mt-3 w-full max-w-xs mx-auto"
          placeholder="Message"
          {...register("message")}
        ></textarea>

        <input
          type="submit"
          className="mt-3 border-none hover:bg-[#0ea385] btn btn-sm bg-[#19D3AE] w-20 mx-auto"
        />
      </form>
    </div>
  );
};

export default StayConnected;
