"use client";
import { useContext, useState } from "react";
import "../styles/CheckoutOptions.css";
import { ReserveSpot } from "@/app/ticketData";
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

    startTimer();
  }

  function startTimer() {
    dispatchTimer((old) => ({
      ...old,
      time: 320,
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
        }}
      >
        BUY NOW
      </button>
    </div>
  );
}

export default CheckoutOptions;
