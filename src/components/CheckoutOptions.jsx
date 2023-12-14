"use client";
import Button from "./Button";
import { useContext, useState } from "react";
import "../styles/CheckoutOptions.css";
import { StateContext, ValueContext, TimerContext, SetTimerContext } from "./MyContext";

function CheckoutOptions({ setToggleParticipant }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const timerState = useContext(TimerContext);
  const dispatchTimer = useContext(SetTimerContext);
  const totalTentSpots = state.tents.one + state.tents.two * 2 + state.tents.three;
  const [resID, setResID] = useState("");

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
  async function reserve() {
    const a = await ReserveSpot(state.campingArea, totalTentSpots);
    console.log(a);
    setResID(a.id);
    console.log("halløj", resID);
  }

  return (
    <div className="flow-btns">
      <button onClick={handleAddToBasket}>ADD TO BASKET</button>

      <button
        onClick={() => {
          setToggleParticipant();
          handleAddToBasket();
          reserve();
        }}>
        BUY NOW
      </button>
    </div>
  );
}

export default CheckoutOptions;
