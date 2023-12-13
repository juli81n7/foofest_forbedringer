"use client";
import ParticipantComp from "./ParticipantComp";
import TicketContent from "./TicketContent";
import { useState } from "react";

export default function ShowTicketContent() {
  const [showError, setShowError] = useState(false);
  const [showErrorTent, setShowErrorTent] = useState(false);
  const [spots, setSpots] = useState([]);
  const [toggleCheckout, setToggleCheckout] = useState(false);

  return (
    <div>
      {toggleCheckout === false ? (
        <TicketContent setToggleCheckout={setToggleCheckout} spots={spots} setSpots={setSpots} showError={showError} setShowError={setShowError} showErrorTent={showErrorTent} setShowErrorTent={setShowErrorTent} />
      ) : (
        <ParticipantComp></ParticipantComp>
      )}
    </div>
  );
}
