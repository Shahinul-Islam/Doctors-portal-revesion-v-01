import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { user, signWithGoogle, signInUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    // console.log(event.target);
    const email = data.email;
    const password = data.password;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // getUserToken(email);
        // navigate(from, { replace: true });
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
        setErrorMessage(
          error.message
            .split("(")[1]
            .split("/")[1]
            .split(")")[0]
            .split("-")
            .join(" ")
        );
      });

    event.target.reset();
  };
  const handleGoogleSignIn = () => {
    signWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // saveUser(user.displayName, user.email, "Buyer");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero min-h-screen">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-lg border-cyan-200 border-2 -mt-16">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-center text-xl font-bold">Login</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered"
            />
            <p className="mt-2 text-red-700">{errors.email?.message}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="input input-bordered"
            />
            <p className="mt-2 text-red-700">{errors.password?.message}</p>
            <div className="form-control mt-6">
              <button className="btn bg-[#3A4256]">Login</button>
            </div>
          </div>
        </form>
        <div className=" card-body flex flex-col">
          <label className="label -mt-12">
            <Link to="/register" className="text-base no-underline">
              New to Doctors Portal?{" "}
              <span className="text-[#19D3AE]">Create an Account</span>
            </Link>
          </label>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline uppercase"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
