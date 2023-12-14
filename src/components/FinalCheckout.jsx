"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "@/styles/ParticipantInfo.css";

export default function FinalCheckout({}) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  const [submitData, setSubmitData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
            <label htmlFor="cardnr.">Card nr.</label>
            <input {...register("cardnr.", { required: true, pattern: /^[0-9]{16}$/ })} maxLength={16} type="text" id="cardnr." />
          </div>
          <div className="inputlayout">
            <label htmlFor="Regnr.">Reg nr.</label>
            <input {...register("Regnr.", { required: true, pattern: /^[0-9]{4}$/ })} maxLength={4} type="text" id="Regnr." />
          </div>
          <div className="inputlayout">
            <label htmlFor="expireDate">Date of card expiration</label>
            <input
              {...register("expireDate", {
                required: true,
              })}
              type="date"
              min="2000-01-01"
              max="2100-12-12"
              id="expireDate"
            />
          </div>
          <div className="inputlayout">
            <label htmlFor="cvc">CVC</label>
            <input {...register("cvc", { required: true, pattern: /^[0-9]{3}$/i })} type="text" id="cvc" />
          </div>
        </div>
        <div className="btngrid">
          <input className="submitBtn" type="submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
}
