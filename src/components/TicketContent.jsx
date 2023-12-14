"use client";
import { useState } from "react";
import ChooseTicket from "@/components/ChooseTicket";
import ChooseTent from "@/components/ChooseTent";
import ChooseCamp from "@/components/ChooseCamp";
import CheckoutOptions from "@/components/CheckoutOptions";

import "@/styles/TicketFlow.css";

function TicketContent({ setToggleParticipant, handleAreaSelect, showError, setShowError, showErrorTent, setShowErrorTent, spots, setSpots, buttonError, setButtonError }) {
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
          <ChooseTicket showError={showError} setShowError={setShowError} showErrorTent={showErrorTent} setShowErrorTent={setShowErrorTent} />
          <ChooseTent showError={showError} setShowError={setShowError} showErrorTent={showErrorTent} setShowErrorTent={setShowErrorTent} setButtonError={setButtonError} />
          <ChooseCamp spots={spots} setSpots={setSpots} setButtonError={setButtonError} />
          <CheckoutOptions setToggleParticipant={setToggleParticipant} buttonError={buttonError} setButtonError={setButtonError} />
        </div>
      </section>
    </main>
  );
}

export default TicketContent;
