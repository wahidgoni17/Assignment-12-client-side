import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="navbar py-4 px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-xl">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu bg-white text-xl dropdown-content mt-5 p-3 shadow rounded-box w-56"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>Instructors</Link>
              </li>
              <li>
                <Link>Classes</Link>
              </li>
              <li>
                <Link to="dashboard">Dashboard</Link>
              </li>
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
          <div className="text-2xl mr-5">
            <FaUserAlt />
          </div>
          <Link to="/login">
            <button className="btn btn-primary btn-outline border-0 border-y-2">
              LogIn
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
