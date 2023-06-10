import React from "react";
import useAdmin from "../../../Hooks/UseAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useClassCart from "../../../Hooks/useClassCart";
const Items = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [,refetch] = useClassCart()
  const { image, name, instructorName, price, availableSeats } = item;
  const handleAddClass = () => {
    if (user && user?.email) {
      // const classItem = {classItemId : item._id, image, name, instructorName, price, availableSeats, email: user?.email}
     axios.post('http://localhost:5050/classCart',{classItemId : item._id, image, name, instructorName, price, availableSeats, email: user?.email})
        .then((res) => {
          const data = res.data
          console.log(data)
          if (data.insertedId) {
            refetch()
            Swal.fire("Successfully!", "item added successfully", "success");
          }
        })
    }
    else{
      Swal.fire("oops!", "please login first", "error");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <>
      <div
        className={`card w-96 ${
          availableSeats === 0 ? "bg-red-400" : "bg-slate-50"
        }  shadow-xl`}
      >
        <figure>
          <img className="h-64 p-3 w-full rounded-3xl" src={image} />
        </figure>
        <div className="card-body text-2xl">
          <h2 className="card-title text-3xl">Language: {name}</h2>
          <p>Instructor: {instructorName}</p>
          <p>Available Seats: {availableSeats}</p>
          <p>Price: $ {price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddClass(item)}
              disabled={availableSeats === 0 || isAdmin || isInstructor}
              className="btn btn-accent btn-outline border-0 border-y-2"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
