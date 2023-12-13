"use client";
import { useContext } from "react";
import { ValueContext, StateContext } from "./MyContext";
function ChooseTicket({ showError, setShowError, showErrorTent, setShowErrorTent }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const totalTentSpots = state.tents.one + state.tents.two * 2 + state.tents.three * 3;

  function reduceTickets() {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      if (copy.tickets === 0) {
        return copy;
      } else if (copy.tickets <= totalTentSpots) {
        setShowError(true);
        return copy;
      } else {
        copy.tickets -= 1;
        return copy;
      }
    });
  }
  function increaseTickets() {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      copy.tickets += 1;
      setShowError(false);
      setShowErrorTent(false);
      return copy;
    });
  }
  return (
    <div className={`choose-wrapper tick ${showError ? "showError" : ""}`}>
      <h2>CHOOSE YOUR TICKETS</h2>
      <div className="counter-line">
        <h3>ALL WEEK TICKET</h3>
        <div className="counter">
          <button onClick={reduceTickets}>-</button>
          <p>{state.tickets}</p>
          <button onClick={increaseTickets}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseTicket;
