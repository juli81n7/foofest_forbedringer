import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import ParticipantInfo from "./ParticipantInfo";
import "@/styles/Participants.css";
import { StateContext, ValueContext, SetSubmitData, SubmitData } from "./MyContext";

export default function Participants({ setToggleCheckout }) {
  const { register, handleSubmit } = useForm();
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const setSubmitDataContext = useContext(SetSubmitData);
  const submitDataContext = useContext(SubmitData);

  const onSubmit = async (data) => {
    setSubmitDataContext(data);
    handleCheckoutFlow();
    setToggleCheckout();
  };

  const handleCheckoutFlow = () => {
    dispatch((old) => ({
      ...old,
      checkoutPush: true,
    }));
  };
  //Har brugt ChatGPT til at finde ud af, hvordan man skaber et array ud fra variabler som man kan mappe igennem: [...Array(state.regular)] - Magnus
  return (
    <div>
      <div className="right">
        <h2 className="ticketformh2">Info on participants</h2>
        {[...Array(state.regular)].map((_, index) => (
          <div key={index}>
            <h3 className="participanth3">Participant {index + 1}</h3>
            <form>
              <ParticipantInfo register={register} prefix={`participant${index + 1}`} />
            </form>
          </div>
        ))}
        {[...Array(state.vip)].map((_, index) => (
          <div key={index}>
            <h3 className="participanth3">VIP Participant {index + 1}</h3>
            <form>
              <ParticipantInfo register={register} prefix={`VIPparticipant${index + 1}`} />
            </form>
          </div>
        ))}
        <input className="submitBtn" value="Submit" type="submit" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}
