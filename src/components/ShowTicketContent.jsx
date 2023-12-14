"use client";
import FinalCheckout from "./FinalCheckout";
import ParticipantComp from "./ParticipantComp";
import TicketContent from "./TicketContent";
import { useState } from "react";

export default function ShowTicketContent() {
  const [showError, setShowError] = useState(false);
  const [showErrorTent, setShowErrorTent] = useState(false);
  const [spots, setSpots] = useState([]);
  const [toggleCheckout, setToggleCheckout] = useState(false);
  const [toggleParticipant, setToggleParticipant] = useState(false);

  return <div>{toggleParticipant === false ? <TicketContent setToggleParticipant={setToggleParticipant} spots={spots} setSpots={setSpots} showError={showError} setShowError={setShowError} showErrorTent={showErrorTent} setShowErrorTent={setShowErrorTent} /> : toggleCheckout === false ? <ParticipantComp setToggleCheckout={setToggleCheckout}></ParticipantComp> : <FinalCheckout></FinalCheckout>}</div>;
}
