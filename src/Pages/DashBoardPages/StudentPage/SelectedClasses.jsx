import React from "react";
import useClassCart from "../../../Hooks/useClassCart";
import { FaTrashAlt } from "react-icons/fa";
import Title from "../../../Component/Title";
import Swal from "sweetalert2";
import axios from "axios";

const SelectedClasses = () => {
  const [classCart, refetch] = useClassCart();
  const total = classCart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
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
        axios.delete(`http://localhost:5050/classCart/${item._id}`)
        .then((res) => {
            const data = res.data;
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "your class has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <Title title={"My Selected Classes"}></Title>
      <div className="flex justify-between my-8 px-10">
        <h1 className="text-3xl font-bold">Total class: {classCart.length}</h1>
        <h1 className="text-3xl font-bold">Total price: ${total}</h1>
      </div>
      <div className="overflow-x-auto bg-slate-100 w-full px-10 py-10">
        <table className="table text-xl w-full">
          <thead className="text-black text-xl">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classCart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.instructorName}</td>
                <td>${item.price}</td>
                <td><button className="btn btn-success">pay</button></td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-md text-white bg-red-700"
                  >
                    <FaTrashAlt />
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

export default SelectedClasses;
