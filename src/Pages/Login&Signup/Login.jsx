import img from "../../assets/foreign-language-school-logo-vector-4316774.webp";
import bgimg from "../../assets/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState(false);
  const {logIn} = useAuth()
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password)
    .then(result =>{
      const logged = result.user
      console.log(logged)
      Swal.fire("Successfully!", "You are Logged in", "success");
      navigate(from, {replace: true})
    })
    .catch(error => console.log(error))
  };
  return (
    <div className="hero min-h-screen">
      <div
        style={{ backgroundImage: `url("${bgimg}")` }}
        className="hero-content m-16 flex-col lg:flex-row shadow-2xl"
      >
        <div className="text-center lg:w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card lg:w-1/2 max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Login</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                {...register("password")}
                placeholder="password"
                className="input input-bordered text-white"
              />
              <p onClick={() => setShow(!show)}>
                <span className="text-xl">{show ? <FaEyeSlash /> : <FaEye />}</span>
              </p>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-white border-none"
                type="submit"
                value="Log In"
              />
            </div>
          </form>
          <h1 className="text-lime-700 text-xl pb-4 text-center">
            New to Fluentia?
            <Link className="underline" to="/signup">
              Create an Account
            </Link>
          </h1>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
