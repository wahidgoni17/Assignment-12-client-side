import React from "react";

const SingleInstructor = ({ instructor }) => {
  const {
    instructorName,
    instructorPicture,
    instructorEmail,
    numberOfClasses,
  } = instructor;
  return (
    <>
      <div className="flex mx-10 items-center space-x-8">
        <img className="h-32 w-28 rounded-xl" src={instructorPicture} alt="" />
        <div>
          <h3 className="uppercase text-3xl ">{instructorName}</h3>
          <p>{instructorEmail}</p>
        </div>
      </div>
    </>
  );
};

export default SingleInstructor;
