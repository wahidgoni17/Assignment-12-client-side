import React from "react";
import img from "../../assets/foreign-language-school-logo-vector-4316774.webp";
import bgimg from "../../assets/authentication.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";

const Signup = () => {
  const {newUser, updateUserProfile} = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    newUser(data.email, data.password)
    .then(result=>{
      const registeredUser = result.user
      console.log(registeredUser)
      updateUserProfile(data.name, data.photo)
      .then(()=>{})
        // fetch("http://localhost:5050/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(saveUser),
        // })
          axios.post("http://localhost:5050/users",{
            name: data.name, email: data.email
          })
          .then((data) => {
            console.log(data);
            if (data.data.insertedId) {
              reset()
              Swal.fire("Successfully!", "Your Account Is created", "success");
              navigate("/");
            }
          });
    })
    .catch(error => console.log(error))
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div
          style={{ backgroundImage: `url("${bgimg}")` }}
          className="hero-content m-16 flex-col lg:flex-row-reverse shadow-2xl"
        >
          <div className="text-center lg:w-1/2 lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card lg:w-1/2 max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="text-center">
                <h1 className="text-4xl font-bold">Sign Up</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-xl">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-xl">
                    Photo Url
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Photo-Url"
                  {...register("photo", { required: true })}
                  className="input input-bordered text-white"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered text-white"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/,
                  })}
                  placeholder="password"
                  className="input input-bordered text-white"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600" role="alert">
                    Password must be started with 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600" role="alert">
                    Password must have one uppercase and one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-xl">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("confirm", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/,
                    
                  })}
                  placeholder="Confirm Password"
                  className="input input-bordered text-white"
                />
                {errors.confirm?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Password is required
                  </p>
                )}
                {errors.confirm?.type === "minLength" && (
                  <p className="text-red-600" role="alert">
                    Password must be started with 6 characters
                  </p>
                )}
                {errors.confirm?.type === "pattern" && (
                  <p className="text-red-600" role="alert">
                    Password must have one uppercase and one special character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary text-white border-none"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <h1 className="text-lime-700 text-xl pb-4 text-center">
              Already Registered?
              <Link className="underline" to="/login">
                Go to Login
              </Link>
            </h1>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
