import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Title from "../../../Component/Title";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  console.log(users);
  return (
    <div>
      <Title
        title={"Manage Users"}
        subtitle={"Manage All users, make Admin and Instructor"}
      ></Title>
      <h1 className="text-4xl text-center font-bold">Sum of Users = {users.length}</h1>
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
                      // onClick={()=>handleMakeAdmin(user)}
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
                      // onClick={()=>handleMakeInstructor(user)}
                      className="btn btn-md text-white bg-green-700"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
                <td>
                  <button
                    // onClick={() => handleDelete(user)}
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
