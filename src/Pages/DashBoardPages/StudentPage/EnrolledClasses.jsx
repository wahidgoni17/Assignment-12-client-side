import React, { useState } from "react";
import Title from "../../../Component/Title";
import useAuth from "../../../Hooks/useAuth";
import usePayment from "../../../Hooks/usePayment";

const EnrolledClasses = () => {
  const [payment] = usePayment();
  const { user } = useAuth();
  const unique = payment.filter((data) => data.email === user?.email);
  return (
    <>
      <Title title={"enrolled classes"}></Title>
      <div className="overflow-x-auto bg-slate-100 w-full px-10 py-10">
        <table className="table text-xl w-full">
          <thead className="text-black text-xl">
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
            </tr>
          </thead>
          <tbody>
            {unique.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.cartItem.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.cartItem.name}</td>
                <td>{item.cartItem.instructorName}</td>
                <td>{item.availableSeats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EnrolledClasses;
