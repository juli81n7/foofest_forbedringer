"use client";
import TryAgain from "./TryAgain";
import Whoopsies from "./Whoopsies";
import FinalCheckout from "./FinalCheckout";
import ParticipantComp from "./ParticipantComp";
import TicketContent from "./TicketContent";
import { useContext, useEffect, useState } from "react";
import { UserContext, ContinueContext, OrderStatus, TimerContext, ValueContext } from "./MyContext";
import Login from "./Login";
import Thanks from "./Thanks";

export default function ShowTicketContent() {
  const [showError, setShowError] = useState(false);
  const [showErrorTent, setShowErrorTent] = useState(false);
  const [spots, setSpots] = useState([]);
  const [toggleCheckout, setToggleCheckout] = useState(false);
  const [toggleParticipant, setToggleParticipant] = useState(false);
  const [buttonError, setButtonError] = useState(false);
  const [flowBegun, setFlowBegun] = useState(0);
  const usercontext = useContext(UserContext);
  const continueState = useContext(ContinueContext);
  const isordered = useContext(OrderStatus);
  const timerContext = useContext(TimerContext);
  const state = useContext(ValueContext);
  const totalTickets = state.regularCount + state.vipCount;
  const totalTentspots = state.tents.one + state.tents.two + state.tents.three;

  useEffect(() => {
    setFlowBegun((old) => old + 1);
  }, [timerContext.timeRunning]);

  return <div>{flowBegun > 2 && timerContext.timeRunning === false && totalTentspots > 0 ? <TryAgain /> : toggleParticipant === false ? <TicketContent setToggleParticipant={setToggleParticipant} spots={spots} setSpots={setSpots} showError={showError} setShowError={setShowError} showErrorTent={showErrorTent} setShowErrorTent={setShowErrorTent} buttonError={buttonError} setButtonError={setButtonError} /> : !usercontext && !continueState ? <Login /> : toggleCheckout === false && totalTickets > 0 ? <ParticipantComp setToggleCheckout={setToggleCheckout}></ParticipantComp> : !isordered && totalTickets > 0 ? <FinalCheckout></FinalCheckout> : totalTickets == 0 && !isordered ? <Whoopsies /> : <Thanks />}</div>;
}
