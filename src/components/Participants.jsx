"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ParticipantInfo from "./ParticipantInfo";
import "@/styles/Participants.css";
export default function Participants() {
  const [participantCount, setParticipantCount] = useState(1);
  const [submitData, setSubmitData] = useState([]);
  const { register, handleSubmit } = useForm();

  const addParticipant = () => {
    setParticipantCount((prevCount) => prevCount + 1);
  };

  const onSubmit = (data) => {
    console.log(data);
    setSubmitData((prevData) => [
      ...prevData,
      {
        participant: prevData.length + 1,
        data,
      },
    ]);
    console.log("her er data i state", submitData);
  };
  return (
    <div>
      <div className="right">
        <h2 className="ticketformh2">Info on participants</h2>

        {[...Array(participantCount)].map((_, index) => (
          <div key={index}>
            <h3 className="participanth3">Participant {index + 1}</h3>
            <form>
              <ParticipantInfo register={register} prefix={`participant${index + 1}`} />
            </form>
          </div>
        ))}
        <div className="btngrid">
          <button className="addBtn" onClick={addParticipant}>
            Add Participant
          </button>
          <input className="submitBtn" type="submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
}
