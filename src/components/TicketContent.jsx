"use client";
import { useState } from "react";
import ChooseTicket from "@/components/ChooseTicket";
import ChooseTent from "@/components/ChooseTent";
import ChooseCamp from "@/components/ChooseCamp";
import CheckoutOptions from "@/components/CheckoutOptions";

import "@/styles/TicketFlow.css";

function TicketContent({ setToggleCheckout, handleAreaSelect, showError, setShowError, showErrorTent, setShowErrorTent, spots, setSpots, selectedArea, setSelectedArea }) {
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
          <ChooseTicket showError={showError} />
          <ChooseTent showErrorTent={showErrorTent} showError={showError} setShowError={setShowError} />
          <ChooseCamp handleAreaSelect={handleAreaSelect} spots={spots} setSpots={setSpots} selectedArea={selectedArea} setSelectedArea={setSelectedArea} />
          <CheckoutOptions setShowError={setShowError} setShowErrorTent={setShowErrorTent} setToggleCheckout={setToggleCheckout} />
        </div>
      </section>
    </main>
  );
}

export default TicketContent;
