import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserAlt } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then((reuslt) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="navbar bg-base-200 bg-opacity-20 text-white fixed z-10 py-4 px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-xl">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu bg-white text-black text-xl dropdown-content mt-5 p-3 shadow rounded-box w-56"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              {user && (
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            to="/"
            className="btn btn-ghost normal-case  text-4xl font-bold"
          >
            Fluentia
          </Link>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="text-2xl mr-5">
              <img className="rounded-full w-12 h-12" src={user?.photoURL}/>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary btn-outline border-0 mr-4 border-y-2">
                LogIn
              </button>
            </Link>
          )}
          {user && <button
            onClick={handleLogout}
            className="btn btn-secondary btn-outline border-0 border-y-2"
          >
            LogOut
          </button>}
        </div>
      </div>
    </>
  );
};

export default Header;
