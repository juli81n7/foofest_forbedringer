"use client";
import { useContext, useState } from "react";
import { StateContext, ValueContext, TimerContext, SetTimerContext, ReserveContext, SetReserveContext, SetOrderStatus, OrderStatus } from "./MyContext";
import { ReserveSpot } from "@/app/ticketData";
import "../styles/CheckoutOptions.css";

function CheckoutOptions({ setToggleParticipant, buttonError, setButtonError }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const timerState = useContext(TimerContext);
  const dispatchTimer = useContext(SetTimerContext);
  const reserveState = useContext(ReserveContext);
  const reserveDispatch = useContext(SetReserveContext);
  const dispatchOrderStatus = useContext(SetOrderStatus)
  const orderStatusState = useContext(OrderStatus)
  const totalTentSpots = state.tents.one + state.tents.two * 2 + state.tents.three * 3;

  function handleAddToBasket() {
    dispatch((old) => ({
      ...old,
      pushed: true,
    }));
  }

  function startTimer() {
    dispatchTimer((old) => ({
      ...old,
      time: 300,
      timeRunning: true,
    }));
  }

  async function reserve() {
    const reserveResponse = await ReserveSpot(state.campingArea, totalTentSpots);
    reserveDispatch(reserveResponse);



    if (reserveResponse.error) {
      
      return;
    } else {
      startTimer();
    }
  }

  function basket() {
    if ((!state.campingArea && totalTentSpots) || (!totalTentSpots && state.campingArea)) {

      setButtonError(true);
      return;
    } else if (state.regular + state.vip) {
      
      dispatchOrderStatus(false)

      handleAddToBasket();
if(state.campingArea && totalTentSpots){

      handleAddToBasket();
      reserve();
}

    } 
  }

  function buy() {
    if ((!state.campingArea && totalTentSpots) || (!totalTentSpots && state.campingArea)) {

      setButtonError(true);
      return;
    } else if (state.regular + state.vip) {
      dispatchOrderStatus(false)

      setToggleParticipant();
      handleAddToBasket();
      if(state.campingArea && totalTentSpots){

            handleAddToBasket();
            reserve();
      

    } 
    }
  }

  return (
    <div>
      {" "}
      {buttonError && <p className="buttonError">Add both Tents and an Area.</p>}
      <div className="flow-btns">
        <button className="add-button" onClick={basket}>
          ADD TO BASKET
        </button>

        <button className="buy-button" onClick={buy}>
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default CheckoutOptions;
