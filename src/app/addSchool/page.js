"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import "./addschool.css"
// import addSchoolAPI from "../../api/api";

const AddSchool = () => {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const postData = {
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        contact: data.contact,
        email_id: data.email_id,
        image: image,
      };
      console.log("postData", postData);
      // const result = await addSchoolAPI(postData);
      console.log("result", result);

      if (response.ok) {
        console.log(result.message);
        window.alert("School added successfully!");
      } else {
        console.error(result.error);
        window.alert("Failed to add school. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      window.alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* School Name */}
        <label>School Name</label>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
        />

        {/* Address */}
        <label>Address</label>
        <input
          type="text"
          name="address"
          {...register("address", { required: true })}
        />

        {/* City */}
        <label>City</label>
        <input
          type="text"
          name="city"
          {...register("city", { required: true })}
        />

        {/* State */}
        <label>State</label>
        <input
          type="text"
          name="state"
          {...register("state", { required: true })}
        />

        {/* Contact */}
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          {...register("contact", { required: true })}
        />

        {/* Email ID */}
        <label>Email ID</label>
        <input
          type="email"
          name="email_id"
          {...register("email_id", { required: true })}
        />

        {/* <label>School Image</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSchool;
