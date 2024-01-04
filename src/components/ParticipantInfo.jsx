"use client";

import "@/styles/ParticipantInfo.css";

export default function ParticipantInfo({ register, prefix }) {
  const validateDate = (value) => {
    const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();
    return now - selected >= 18;
  };
  const handleKeyDown = (event) => {
    // Tillad kun bogstaver, mellemrum, komma og punktum
    const allowedChars = /^[A-Za-zæøåÆØÅ\s.,]+$/i;

    if (!allowedChars.test(event.key)) {
      event.preventDefault();
    }
  };
  const handleKeyDownNumber = (event) => {
    const allowedNumbers = /^[0-9]+$/i;

    // Tillad sletning ved at checke nøglekoder for Backspace (8) og Delete (46) - ChatGPT
    // Tillad tab (9) og Ctrl+R (82) - ChatGPT
    if (
      !(
        (
          allowedNumbers.test(event.key) ||
          [8, 46, 9].includes(event.keyCode) || // Backspace, Delete, Tab
          (event.ctrlKey && event.keyCode === 82)
        ) // Ctrl+R
      )
    ) {
      event.preventDefault();
    }

    // Tjek om tasten er et tal, og om telefonnummeret har nået 8 cifre
    if (allowedNumbers.test(event.key) && document.querySelector("#phone").value.length === document.querySelector("#phone").maxLength) {
      document.querySelector("#birth").focus();
    }
  };
  //Har brugt ChatGPT til at give mig de korrekte patterns samt syntaks for `${prefix}.firstName` - Magnus
  return (
    <div className="formcontainer">
      <div className="formline">
        <div className="formgrid">
          <div className="inputlayout">
            <label htmlFor="firstName" className="error name">
              First name
            </label>
            <input {...register(`${prefix}.firstName`, { required: true, pattern: /^[A-Za-zæøåÆØÅ\s.,]+$/i, message: "firstname is required" })} name="firstname" type="text" id="firstname" onKeyDown={handleKeyDown} />
          </div>
          <div className="inputlayout">
            <label htmlFor="lastname" className="error name">
              Last name
            </label>
            <input {...register(`${prefix}.lastName`, { required: true, pattern: /^[A-Za-zæøåÆØÅ]+$/i, message: "First name is required and should only contain letters" })} name="lastname" type="text" id="lastname" onKeyDown={handleKeyDown} />
          </div>
          <div className="inputlayout">
            <label htmlFor="email" className="error email">
              Email
            </label>
            <input {...register(`${prefix}.email`, { required: true, pattern: /\S+@\S+\.\S+/ })} name="email" type="email" id="email" />
          </div>
          <div className="inputlayout">
            <label htmlFor="phone" className="error phone">
              phone number
            </label>
            <input {...register(`${prefix}.phone`, { required: true, minLength: 8, maxLength: 8, pattern: /^[0-9]+$/i })} maxLength={8} name="phone" type="tel" id="phone" onKeyDown={handleKeyDownNumber} />
          </div>
          <div className="inputlayout">
            <label htmlFor="birth" className="error date">
              Date of birth
            </label>
            <input
              {...register(`${prefix}.dob`, {
                required: true,
                validate: validateDate,
              })}
              type="date"
              min="1899-01-01"
              max="2100-12-12"
              id="birth"
              name="birth"
            />
          </div>
          <div className="inputlayout">
            <label htmlFor="address" className="error address">
              Address
            </label>
            <input {...register(`${prefix}.address`, { required: true, pattern: /^[A-Za-z0-9æøåÆØÅ\s.,]+$/i })} name="address" type="text" id="address" />
          </div>
        </div>
      </div>
    </div>
  );
}
