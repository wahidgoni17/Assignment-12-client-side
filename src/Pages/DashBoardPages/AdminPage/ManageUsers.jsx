import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Title from "../../../Component/Title";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`http://localhost:5050/users/admin/${user._id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Updated!", `${user.name} is an Admin Now`, "success");
        }
      });
  };
  const handleMakeInstructor = (user) => {
    axiosSecure
      .patch(`http://localhost:5050/users/instructor/${user._id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Updated!", `${user.name} is an Instructor Now`, "success");
        }
      });
  };
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`http://localhost:5050/users/${user._id}`)
          .then((res) => {
            const data = res.data;
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "user has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Title
        title={"Manage Users"}
        subtitle={"Manage All users, make Admin and Instructor"}
      ></Title>
      <h1 className="text-4xl text-center font-bold">
        Sum of Users = {users.length}
      </h1>
      <div className="overflow-x-auto w-full px-10 py-10">
        <table className="table text-xl w-full">
          {/* head */}
          <thead className="text-black text-xl">
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Admim Role</th>
              <th>Instructor Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-md text-white bg-lime-700"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-md text-white bg-green-700"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-md text-white bg-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
