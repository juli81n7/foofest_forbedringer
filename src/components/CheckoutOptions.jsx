"use client";
import Button from "./Button";
import { useContext } from "react";
import "../styles/CheckoutOptions.css";
import { StateContext, ValueContext } from "./MyContext";

function CheckoutOptions({ setToggleParticipant }) {
  function handleAddToBasket() {
    dispatch((old) => ({
      ...old,
      pushed: true,
    }));
  }

  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
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
