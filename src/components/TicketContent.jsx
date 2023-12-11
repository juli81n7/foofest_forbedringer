"use client";
import { useState } from "react";
import TicketFormInfo from "@/components/TicketFormInfo";
import ChooseTicket from "@/components/ChooseTicket";
import ChooseTent from "@/components/ChooseTent";
import ParticipantInfo from "@/components/ParticipantInfo";
import ChooseCamp from "@/components/ChooseCamp";
import CheckoutOptions from "@/components/CheckoutOptions";

import "@/styles/TicketFlow.css";

function TicketContent() {
  const [tickets, setTickets] = useState(0);
  const [onePers, setOnePers] = useState(0);
  const [twoPers, setTwoPers] = useState(0);
  const [threePers, setThreePers] = useState(0);
  const [totalTents, setTotalTents] = useState(tickets);
  //   const [tentSpots, setTentSpots] = useState(8);
  const [showError, setShowError] = useState(false);
  const [showErrorTent, setShowErrorTent] = useState(false);
  const totalTentSpots = onePers + twoPers * 2 + threePers * 3;

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
          <ChooseCamp totalTentSpots={totalTentSpots} />
          <CheckoutOptions />
        </div>
      </section>
    </main>
  );
}

export default TicketContent;
