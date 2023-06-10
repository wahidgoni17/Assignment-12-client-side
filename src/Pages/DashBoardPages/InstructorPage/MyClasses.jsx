import { useQuery } from "@tanstack/react-query";
import React from "react";
import useMyClass from "../../../Hooks/useMyClass";
import Title from "../../../Component/Title";

const MyClasses = () => {
  const [myClass, refetch] = useMyClass();
  console.log(myClass);
  return (
    <>
      <Title title={"my classes"}></Title>
      <div className="overflow-x-auto bg-slate-100 w-full px-10 py-10">
        <table className="table text-xl w-full">
          <thead className="text-black text-xl">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Available Student</th>
              <th>Enrolled Students</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClass.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.availableSeats}</td>
                <td>{item.numberOfStudents}</td>
                <td>{item.status}</td>
                <td>
                  {item.status === "aproved" ||
                  item.status === "pending" ? null : (
                    <></>
                  )}
                </td>

                <td>
                  <button className="btn btn-md text-white bg-emerald-500">
                    update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClasses;
