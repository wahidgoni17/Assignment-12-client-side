import React from "react";
import Title from "../../../../Component/Title";
import useInstuctors from "../../../../Hooks/useInstructors";
import SingleInstructor from "./SingleInstructor";
import { Link } from "react-router-dom";

const PopularInstructors = () => {
  const [instructors] = useInstuctors();
  const newInstructors = instructors.slice(0, 6);
  return (
    <>
      <Title
        title={"Our Instructors"}
        subtitle={"Meet our Very Famous Instructors and Explore their classes"}
      ></Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {newInstructors.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
          ></SingleInstructor>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/instructors">
          <button className="btn btn-secondary btn-outline border-0 border-y-2">
            Show All
          </button>
        </Link>
      </div>
    </>
  );
};

export default PopularInstructors;
