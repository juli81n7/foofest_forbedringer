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
      if (copy.regular === 0) {
        return copy;
      } else if (copy.regular <= totalTentSpots) {
        console.log(totalTentSpots);
        setShowError(true);
        return copy;
      } else {
        copy.regular -= 1;
        return copy;
      }
    });
  }
  function increaseTickets() {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      copy.regular += 1;
      setShowError(false);
      setShowErrorTent(false);
      return copy;
    });
  }
  function reduceVipTickets() {
    console.log(totalTentSpots);
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      if (copy.vip === 0) {
        return copy;
      } else if (copy.vip <= totalTentSpots) {
        console.log(totalTentSpots);
        setShowError(true);
        return copy;
      } else {
        copy.vip -= 1;
        return copy;
      }
    });
  }
  function increaseVipTickets() {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      copy.vip += 1;
      setShowError(false);
      setShowErrorTent(false);
      return copy;
    });
  }
  return (
    <div className={`choose-wrapper tick ${showError ? "showError" : ""}`}>
      <h2>CHOOSE YOUR TICKETS</h2>
      <div className="counter-line">
        <h3>Regular ticket</h3>
        <div className="counter">
          <button onClick={reduceTickets}>-</button>
          <p>{state.regular}</p>
          <button onClick={increaseTickets}>+</button>
        </div>
      </div>
      <div className="counter-line">
        <h3>vip ticket</h3>
        <div className="counter">
          <button onClick={reduceVipTickets}>-</button>
          <p>{state.vip}</p>
          <button onClick={increaseVipTickets}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseTicket;
