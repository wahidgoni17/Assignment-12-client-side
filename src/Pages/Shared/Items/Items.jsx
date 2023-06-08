import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Items = ({ item }) => {
  //   const { user } = useAuth();
  const { image, name, instructorName, price, availableSeats } = item;

  return (
    <>
      <div className="card w-96 bg-slate-50 shadow-xl">
        <figure>
          <img className="h-64 p-3 w-full" src={image} />
        </figure>
        <div className="card-body text-2xl">
          <h2 className="card-title text-3xl">Language: {name}</h2>
          <p>Instructor: {instructorName}</p>
          <p>Available Seats: {availableSeats}</p>
          <p>Price: $ {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent btn-outline border-0 border-y-2">
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
