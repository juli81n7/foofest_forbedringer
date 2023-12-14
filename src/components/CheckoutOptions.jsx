"use client";

import { useContext } from "react";
import "../styles/CheckoutOptions.css";
import { StateContext, ValueContext, TimerContext, SetTimerContext } from "./MyContext";

function CheckoutOptions({ setToggleParticipant }) {
  function handleAddToBasket() {
    dispatch((old) => ({
      ...old,
      pushed: true,
    }));
  }

  function startTimer() {
    dispatchTimer((old) => ({
      ...old,
      time: 600,
      timeRunning: true,
    }));
  }

  function startTimer() {
    dispatchTimer((old) => ({
      ...old,
      time: 600,
      timeRunning: true,
    }));
  }

  const dispatch = useContext(StateContext);
  const timerState = useContext(TimerContext);
  const dispatchTimer = useContext(SetTimerContext);
  return (
    <div className="flow-btns">
      <button onClick={handleAddToBasket}>ADD TO BASKET</button>

      <button
        onClick={() => {
          setToggleParticipant();
          handleAddToBasket();
        }}
      >
        BUY NOW
      </button>
    </div>
  );
}

export default CheckoutOptions;
