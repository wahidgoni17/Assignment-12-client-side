import React from "react";
import useAuth from "../../../Hooks/useAuth";
import Title from "../../../Component/Title";
import axios from "axios";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const instructorName = user?.displayName;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const seats = form.seats.value;
    axios
      .post("https://summer-camp-server-side-omega.vercel.app/class", {
        email,
        instructorName,
        name,
        image,
        price: parseInt(price),
        availableSeats: parseInt(seats),
        numberOfStudents: 0,
        status: "pending",
      })
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Class Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <Title title={"Add Your Class"}></Title>
      <div className="p-10">
        <form onSubmit={handleAddClass}>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Instructor Email"
                defaultValue={user?.email}
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                name="instructorName"
                defaultValue={user?.displayName}
                placeholder="Seller Name"
                className="input text-white input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Class Name"
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="url"
                name="image"
                placeholder="Class Image Url"
                className="input text-white input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                name="seats"
                placeholder="Available Seats"
                className="input text-white input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Class"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
