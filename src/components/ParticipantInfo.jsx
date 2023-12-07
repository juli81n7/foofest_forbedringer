"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function ParticipantInfo() {
  const [submitData, setSubmitData] = useState([]); // Brug array-destrukturering
  const { register, handleSubmit } = useForm();

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
  return <div></div>;
}
