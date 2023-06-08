import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const GoogleLogin = () => {
    const { googleLogIn } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const googleLogged = result.user;
        axios.post("http://localhost:5050/users", {
            name: googleLogged.displayName,
            email: googleLogged.email,
        })
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
        <div>
      <div className="divider"></div>
      <div className="text-center">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-info btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
    );
};

export default GoogleLogin;