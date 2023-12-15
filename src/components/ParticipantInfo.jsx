"use client";

import "@/styles/ParticipantInfo.css";

export default function ParticipantInfo({ register, prefix }) {
  const validateDate = (value) => {
    const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();
    return now - selected >= 18;
  };

  return (
    <div className="formcontainer">
      <div className="formline">
        <div className="formgrid">
          <div className="inputlayout">
            <label htmlFor="firstName">First name</label>
            <input {...register(`${prefix}.firstName`, "singleErrorInput", { required: "This is required", pattern: /^[A-Za-zæøåÆØÅ]+$/i })} type="text" id="firstname" />
          </div>
          <div className="inputlayout">
            <label htmlFor="lastname">Last name</label>
            <input {...register(`${prefix}.lastName`, { required: true, pattern: /^[A-Za-zæøåÆØÅ]+$/i })} type="text" id="lastname" />
          </div>
          <div className="inputlayout">
            <label htmlFor="email">Email</label>
            <input {...register(`${prefix}.email`, { required: true, pattern: /\S+@\S+\.\S+/ })} type="email" id="email" />
          </div>
          <div className="inputlayout">
            <label htmlFor="phone">phone number</label>
            <input {...register(`${prefix}.phone`, { required: true, minLength: 8, maxLength: 8, pattern: /^[0-9]+$/i })} type="tel" id="phone" />
          </div>
          <div className="inputlayout">
            <label htmlFor="birth">Date of birth</label>
            <input
              {...register(`${prefix}.dob`, {
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
            <input {...register(`${prefix}.address`, { required: true, pattern: /^[A-Za-z0-9æøåÆØÅ\s.,]+$/i })} type="text" id="address" />
          </div>
        </div>
      </div>
    </div>
  );
}
