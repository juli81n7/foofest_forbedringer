"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@/styles/ParticipantInfo.css";

export default function FinalCheckout({}) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateDate = (value) => {
    const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();
    return now - selected >= 18;
  };

  const onSubmit = (data) => {
    console.log(data);
    setSubmitData((prevData) => [...prevData, data]);
    console.log("her er data i state", submitData);
  };

  return (
    <div className="formcontainer">
      <div className="formline">
        <div className="formgrid">
          <div className="inputlayout">
            <label htmlFor="firstName">First name</label>
            <input {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i })} type="text" id="firstname" />
          </div>
          <div className="inputlayout">
            <label htmlFor="lastname">Last name</label>
            <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} type="text" id="lastname" />
          </div>
          <div className="inputlayout">
            <label htmlFor="birth">Date of birth</label>
            <input
              {...register("dob", {
                required: true,
                validate: validateDate,
              })}
              type="date"
              min="1899-01-01"
              max="2100-12-12"
              id="birth"
            />
          </div>
          <div className="inputlayout">
            <label htmlFor="address">Address</label>
            <input {...register("address", { required: true, pattern: /^[A-Za-z0-9æøåÆØÅ\s.,]+$/i })} type="text" id="address" />
          </div>
          <div className="inputlayout">
            <label htmlFor="cardnr.">Card nr.</label>
            <input {...register("cardnr.", { required: true, pattern: /^[A-Za-z0-9æøåÆØÅ\s.,]+$/i })} type="text" id="cardnr." />
          </div>
          <div className="inputlayout">
            <label htmlFor="Regnr.">Reg nr.</label>
            <input {...register("Regnr.", { required: true, pattern: /^[A-Za-z0-9æøåÆØÅ\s.,]+$/i })} type="text" id="Regnr." />
          </div>
        </div>
        <div className="btngrid">
          <input className="submitBtn" type="submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
}
