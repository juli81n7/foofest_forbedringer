import React from "react";
import { useForm } from "react-hook-form";
export default function FormTest() {
  const { register, handleSubmit } = useForm();

  const validateDate = (value) => {
    const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();
    return now - selected >= 18;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formgrid">
      <div>
        <div className="inputlayout">
          <label htmlFor="firstname">First name</label>
          <input {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i })} type="text" id="firstname" />
        </div>
        <div className="inputlayout">
          <label htmlFor="lastname">Last name</label>
          <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} type="text" id="lastname" />
        </div>
        <div className="inputlayout">
          <label htmlFor="email">Email</label>
          <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} type="email" id="email" />
        </div>
        <div className="inputlayout">
          <label htmlFor="phone">phone number</label>
          <input {...register("phone", { required: true, minLength: 8, maxLength: 8, pattern: /^[0-9]+$/i })} type="tel" id="phone" />
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
      </div>
    </form>
  );
}
