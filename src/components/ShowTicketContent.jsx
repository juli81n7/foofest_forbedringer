"use client";
import TryAgain from "./TryAgain";
import FinalCheckout from "./FinalCheckout";
import ParticipantComp from "./ParticipantComp";
import TicketContent from "./TicketContent";
import { useContext, useState } from "react";
import { UserContext, ContinueContext, OrderStatus } from "./MyContext";
import Login from "./Login";
import Thanks from "./Thanks";

export default function ShowTicketContent() {
  const [showError, setShowError] = useState(false);
  const [showErrorTent, setShowErrorTent] = useState(false);
  const [spots, setSpots] = useState([]);
  const [toggleCheckout, setToggleCheckout] = useState(false);
  const [toggleParticipant, setToggleParticipant] = useState(false);
  const [buttonError, setButtonError] = useState(false);
  const usercontext = useContext(UserContext);
  const continueState = useContext(ContinueContext);
  const isordered = useContext(OrderStatus);

  return <div>{toggleParticipant === false ? <TicketContent setToggleParticipant={setToggleParticipant} spots={spots} setSpots={setSpots} showError={showError} setShowError={setShowError} showErrorTent={showErrorTent} setShowErrorTent={setShowErrorTent} buttonError={buttonError} setButtonError={setButtonError} /> : !usercontext && !continueState ? <Login /> : toggleCheckout === false ? <ParticipantComp setToggleCheckout={setToggleCheckout}></ParticipantComp> : !isordered ? <FinalCheckout></FinalCheckout> : <Thanks />}</div>;
}
