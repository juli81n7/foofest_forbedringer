"use client";

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
