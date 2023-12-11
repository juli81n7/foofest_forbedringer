"use client";
import ParticipantComp from "./ParticipantComp";
import TicketContent from "./TicketContent";
import { useState, useEffect } from "react";

export default function ShowTicketContent() {
  const [tickets, setTickets] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showErrorTent, setShowErrorTent] = useState(false);
  const [spots, setSpots] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [onePers, setOnePers] = useState(0);
  const [twoPers, setTwoPers] = useState(0);
  const [threePers, setThreePers] = useState(0);
  const totalTentSpots = onePers + twoPers * 2 + threePers * 3;
  const handleAreaSelect = (areaName) => {
    setSelectedArea(areaName);
  };
  function updateTickets(action) {
    setTickets((old) => {
      if (action === "add") {
        setShowError(false);
        setShowErrorTent(false);
        return old + 1;
      } else if (totalTentSpots >= tickets) {
        setShowError(true);
        return old;
      } else {
        setShowError(false);
        return Math.max(totalTentSpots, old - 1);
      }
    });
  }
  return (
    <div>
      <TicketContent handleAreaSelect={handleAreaSelect} spots={spots} setSpots={setSpots} selectedArea={selectedArea} setSelectedArea={setSelectedArea} setShowError={setShowError} totalTentSpots={totalTentSpots} updateTickets={updateTickets} tickets={tickets} showError={showError} showErrorTent={showErrorTent} setShowErrorTent={setShowErrorTent} setOnePers={setOnePers} setTwoPers={setTwoPers} setThreePers={setThreePers} onePers={onePers} twoPers={twoPers} threePers={threePers} />
      <ParticipantComp selectedArea={selectedArea} ticketAmount={tickets} onePers={onePers} twoPers={twoPers} threePers={threePers} setOnePers={setOnePers} setTwoPers={setTwoPers} setThreePers={setThreePers}></ParticipantComp>
    </div>
  );
}
