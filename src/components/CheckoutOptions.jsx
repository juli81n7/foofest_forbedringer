"use client";
import Button from "./Button";
import { useContext } from "react";
import "../styles/CheckoutOptions.css";
import { StateContext, ValueContext, TimerContext, SetTimerContext } from "./MyContext";

function CheckoutOptions({ setToggleCheckout }) {
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

  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const timerState = useContext(TimerContext);
  const dispatchTimer = useContext(SetTimerContext);
  return (
    <div className="flow-btns">
      <button onClick={handleAddToBasket}>ADD TO BASKET</button>

      <button>BUY NOW</button>
    </div>
  );
}

export default CheckoutOptions;
