"use client";
import { useState } from "react";
import TicketFormInfo from "@/components/TicketFormInfo";
import ChooseTicket from "@/components/ChooseTicket";
import ChooseTent from "@/components/ChooseTent";
import ParticipantInfo from "@/components/ParticipantInfo";
import ChooseCamp from "@/components/ChooseCamp";
import CheckoutOptions from "@/components/CheckoutOptions";
import NoTiltTicket from "@/components/NoTiltTicket";

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
  const totalTentSpot = onePers + twoPers * 2 + threePers * 3;

  function updateTickets(action) {
    setTickets((old) => {
      if (action === "add") {
        setShowError(false);
        setShowErrorTent(false);
        return old + 1;
      } else if (totalTentSpot >= tickets) {
        setShowError(true);
        return old;
      } else {
        setShowError(false);
        return Math.max(totalTentSpot, old - 1);
      }
    });
  }
  function updateOneTent(action) {
    setOnePers((old) => {
      if (action === "remove") {
        setShowError(false);
        return Math.max(0, old - 1);
      } else if (action === "add" && tickets > totalTentSpot) {
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
        return Math.max(0, old - 1);
      } else if (action === "add" && tickets > totalTentSpot + 1) {
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
        return Math.max(0, old - 1);
      } else if (action === "add" && tickets > totalTentSpot + 2) {
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
        <div className="ticket-area">
          <div className="ticket-stack">
            <NoTiltTicket />
            <NoTiltTicket />
            <NoTiltTicket />
          </div>
          <div className="tent-stack">
            <svg width="123" height="77" viewBox="0 0 123 77" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M61.5 0.29426C61.5 0.29426 70.2287 22.494 79 35C87.7713 47.506 123 76.8017 123 76.8017H82.0982C75.9187 71.2108 63.2656 58.5598 61.5 56.5V0.29426Z" fill="white" />
              <path d="M61.5 0C61.5 0 52.7713 22.494 44 35C35.2287 47.506 0 76.5075 0 76.5075H40.9018C47.0813 70.9165 59.7344 58.5598 61.5 56.5V0Z" fill="white" />
            </svg>
            <svg width="123" height="77" viewBox="0 0 123 77" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M61.5 0.29426C61.5 0.29426 70.2287 22.494 79 35C87.7713 47.506 123 76.8017 123 76.8017H82.0982C75.9187 71.2108 63.2656 58.5598 61.5 56.5V0.29426Z" fill="white" />
              <path d="M61.5 0C61.5 0 52.7713 22.494 44 35C35.2287 47.506 0 76.5075 0 76.5075H40.9018C47.0813 70.9165 59.7344 58.5598 61.5 56.5V0Z" fill="white" />
            </svg>
            <svg width="123" height="77" viewBox="0 0 123 77" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M61.5 0.29426C61.5 0.29426 70.2287 22.494 79 35C87.7713 47.506 123 76.8017 123 76.8017H82.0982C75.9187 71.2108 63.2656 58.5598 61.5 56.5V0.29426Z" fill="white" />
              <path d="M61.5 0C61.5 0 52.7713 22.494 44 35C35.2287 47.506 0 76.5075 0 76.5075H40.9018C47.0813 70.9165 59.7344 58.5598 61.5 56.5V0Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="flow-area">
          <ChooseTicket tickets={tickets} updateTickets={updateTickets} showError={showError} />
          <ChooseTent onePers={onePers} updateOneTent={updateOneTent} twoPers={twoPers} updateTwoTent={updateTwoTent} threePers={threePers} updateThreeTent={updateThreeTent} showErrorTent={showErrorTent} />
          <ChooseCamp tickets={tickets} />
          <CheckoutOptions />
        </div>
      </section>
    </main>
  );
}

export default TicketContent;
