"use client";
import ChooseTicket from "@/components/ChooseTicket";
import ChooseTent from "@/components/ChooseTent";
import ChooseCamp from "@/components/ChooseCamp";
import CheckoutOptions from "@/components/CheckoutOptions";

import "@/styles/TicketFlow.css";

function TicketContent({ handleAreaSelect, updateTickets, tickets, showError, setShowError, showErrorTent, setShowErrorTent, onePers, twoPers, threePers, setOnePers, setTwoPers, setThreePers, totalTentSpots, spots, setSpots, selectedArea, setSelectedArea }) {
  function updateOneTent(action) {
    setOnePers((old) => {
      if (action === "remove") {
        setShowError(false);
        setShowErrorTent(false);
        return Math.max(0, old - 1);
      } else if (action === "add" && tickets > totalTentSpots) {
        return old + 1;
      } else {
        setShowErrorTent(true);
        return old;
      }
    });
  }

  function updateTwoTent(action) {
    setTwoPers((old) => {
      if (action === "remove") {
        setShowError(false);
        setShowErrorTent(false);
        return Math.max(0, old - 1);
      } else if (action === "add" && tickets > totalTentSpots + 1) {
        return old + 1;
      } else {
        setShowErrorTent(true);
        return old;
      }
    });
  }
  function updateThreeTent(action) {
    setThreePers((old) => {
      if (action === "remove") {
        setShowError(false);
        setShowErrorTent(false);
        return Math.max(0, old - 1);
      } else if (action === "add" && tickets > totalTentSpots + 2) {
        return old + 1;
      } else {
        setShowErrorTent(true);
        return old;
      }
    });
  }
  return (
    <main className="main-flow">
      <section className="sec">
        <div className="ticket-area"></div>
        <div className="flow-area">
          <ChooseTicket tickets={tickets} updateTickets={updateTickets} showError={showError} />

          <ChooseTent onePers={onePers} updateOneTent={updateOneTent} twoPers={twoPers} updateTwoTent={updateTwoTent} threePers={threePers} updateThreeTent={updateThreeTent} showErrorTent={showErrorTent} />
          <ChooseCamp handleAreaSelect={handleAreaSelect} totalTentSpots={totalTentSpots} spots={spots} setSpots={setSpots} selectedArea={selectedArea} setSelectedArea={setSelectedArea} />
          <CheckoutOptions />
        </div>
      </section>
    </main>
  );
}

export default TicketContent;
