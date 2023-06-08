import React from "react";
import { FaBookOpen, FaBookReader, FaBookmark, FaPenSquare, FaRegEdit, FaUserEdit, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 text-lg w-64 h-full bg-gray-300">
            {/* Sidebar content here */}
            <h1 className="text-4xl font-bold p-3 mb-5">Fluentia</h1>
            <li>
              <NavLink to="/dashboard/selectedClasses">
                <FaBookOpen />
                Selected Classes
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/enrolledClasses'>
                <FaBookmark />
                Enrolled Classes
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/paymentHistory'>
              <FaWallet />
                Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/manageClasses'>
                <FaRegEdit />
                Manage Classes
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/manageUsers'>
              <FaUserEdit />
                Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/addClass'>
              <FaPenSquare />
                Add Class
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/myClasses'>
              <FaBookReader />
                My Classes
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
