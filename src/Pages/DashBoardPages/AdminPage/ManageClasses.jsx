import React from "react";
import useMyClass from "../../../Hooks/useMyClass";
import Title from "../../../Component/Title";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [myClass, refetch] = useMyClass();
  const [axiosSecure] = useAxiosSecure();
  const handleApprove = (item) => {
    axiosSecure
      .patch(`https://summer-camp-server-side-omega.vercel.app/class/approve/${item._id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Approved!", "Class is an Approved", "success");
        }
      });
  };
  const handleDeny = (item) => {
    axiosSecure
      .patch(`https://summer-camp-server-side-omega.vercel.app/class/deny/${item._id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Denied!", "Class is Denied", "error");
        }
      });
  };

  return (
    <>
      <Title title={"Manage classes"}></Title>
      <div className="overflow-x-auto bg-slate-100 w-full px-10 py-10">
        <table className="table text-xl w-full">
          <thead className="text-black text-xl">
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Student</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve Actrion</th>
              <th>Deny Actrion</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {myClass.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.instructorName}</td>
                <td>{item.email || "anonymous"}</td>
                <td className="text-center">{item.availableSeats}</td>
                <td>${item.price}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    disabled={
                      item.status === "approved" || item.status === "denied"
                    }
                    onClick={() => handleApprove(item)}
                    className="btn btn-md text-white bg-emerald-500"
                  >
                    approve
                  </button>
                </td>
                <td>
                  <button
                    disabled={
                      item.status === "approved" || item.status === "denied"
                    }
                    onClick={() => handleDeny(item)}
                    className="btn btn-md text-white bg-red-600"
                  >
                    deny
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-md text-white bg-amber-700"
                  >
                    send feedback
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

export default ManageClasses;
