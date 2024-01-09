"use client";
import { useContext } from "react";
import { ValueContext, StateContext } from "./MyContext";
function ChooseTicket({ showError, setShowError, setShowErrorTent }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const totalTentSpots = state.tents.one + state.tents.two * 2 + state.tents.three * 3;

  function reduceTickets() {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      if (copy.regular === 0) {
        return copy;
      } else if (copy.regular + copy.vip <= totalTentSpots) {
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
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      if (copy.vip + copy.regular === 0) {
        return copy;
      } else if (copy.vip + copy.regular <= totalTentSpots) {
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
        <h3>
          Regular ticket <span>(799,-)</span>
        </h3>
        <div className="counter">
          <button onClick={reduceTickets}>-</button>
          <p>{state.regular}</p>
          <button onClick={increaseTickets}>+</button>
        </div>
      </div>
      <div className="counter-line">
        <h3>
          vip ticket{" "}
          <div className="heart-container">
            <svg className="heart-icon vip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
              <g id="Layer_1-2" data-name="Layer 1">
                <polyline className="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18" />
              </g>
            </svg>
          </div>{" "}
          <span>(1299,-)</span>
        </h3>
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
