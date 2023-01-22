import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  /* const onSubmit = (data, event) => {
    console.log(event.target);
    event.target.reset();
  }; */

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  // const [userRole, setUserRole] = useState("Buyer");
  const { signWithGoogle, createUser, updateUser } = useContext(AuthContext);
  // const [createdUserEmail, setCreatedUserEmail] = useState("");
  // const [token] = useToken(createdUserEmail);
  //token paoa gele navigate korbo
  // if (token) {
  //   navigate("/");
  // }
  //react use form for sign up

  //sign up user handler
  const handleSignUp = (data) => {
    // setErrorMessage("");
    console.log(data);
    const email = data.email;
    const password = data.password;
    const name = data.fullName;
    const role = data.role;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        // toast("User created successfully");
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            // saveUser(name, email, role);
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((error) =>
        setErrorMessage(
          error.message
            .split("(")[1]
            .split("/")[1]
            .split(")")[0]
            .split("-")
            .join(" ")
        )
      );
  };

  //google login handler
  const handleGoogleSignIn = () => {
    //code goes here
    signWithGoogle()
      .then((result) => {
        const user = result.user;
        // const role = "Buyer";
        // console.log(user);
        // saveUser(user.displayName, user.email, "Buyer");
        navigate("/");
      })
      .catch((error) =>
        setErrorMessage(
          error.message
            .split("(")[1]
            .split("/")[1]
            .split(")")[0]
            .split("-")
            .join(" ")
        )
      );
  };

  return (
    <div className="hero min-h-screen py-3">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-lg border-cyan-200 border-2 lg:-mt-16">
        <form className="card-body" onSubmit={handleSubmit(handleSignUp)}>
          <p className="text-center text-xl font-bold">Register</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="input input-bordered"
            />
            <p className="mt-2 text-red-700">{errors.name?.message}</p>
          </div>
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
              <button className="btn bg-[#3A4256]">Register</button>
            </div>
          </div>
        </form>
        <div className=" card-body flex flex-col">
          <label className="label -mt-12">
            <Link to="/register" className="text-base no-underline">
              Already have an account?{" "}
              <span className="text-[#19D3AE]">Please Login</span>
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

export default Register;
