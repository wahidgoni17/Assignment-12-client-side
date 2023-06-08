import React from "react";

const Instructor = ({ instructor }) => {
  const { instructorPicture, instructorName, instructorEmail } = instructor;
  console.log(instructor);
  return (
    <>
      <div
        className="card w-96 bg-slate-50
        }  shadow-xl"
      >
        <figure>
          <img
            className="h-[420px] p-3 w-full rounded-3xl"
            src={instructorPicture}
          />
        </figure>
        <div className="card-body text-2xl">
          <h2 className="card-title text-3xl">Instructor: {instructorName}</h2>
          <p>Instructor Email: {instructorEmail}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
