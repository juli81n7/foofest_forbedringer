"use client";
import { useState } from "react";

import ChooseTicket from "@/components/ChooseTicket";
import ChooseTent from "@/components/ChooseTent";
import ChooseCamp from "@/components/ChooseCamp";
import CheckoutOptions from "@/components/CheckoutOptions";

import "@/styles/TicketFlow.css";

function TicketContent({ setToggleCheckout, handleAreaSelect, updateTickets, tickets, showError, setShowError, showErrorTent, setShowErrorTent, totalTentSpots, spots, setSpots, selectedArea, setSelectedArea }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectionChange = (areaName) => {
    setSelectedOption(areaName);
  };

  // reserveSpot("Svartheim", 13);

  return (
    <main className="main-flow">
      <section className="sec">
        <div className="ticket-area"></div>
        <div className="flow-area">
          <ChooseTicket tickets={tickets} updateTickets={updateTickets} showError={showError} />

          <ChooseTent showErrorTent={showErrorTent} />
          <ChooseCamp handleAreaSelect={handleAreaSelect} totalTentSpots={totalTentSpots} spots={spots} setSpots={setSpots} selectedArea={selectedArea} setSelectedArea={setSelectedArea} />
          <CheckoutOptions setShowError={setShowError} setShowErrorTent={setShowErrorTent} totalTentSpots={totalTentSpots} setToggleCheckout={setToggleCheckout} />
        </div>
      </section>
    </main>
  );
}

export default TicketContent;
