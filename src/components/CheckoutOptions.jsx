"use client";
import Button from "./Button";
import { useContext } from "react";
import "../styles/CheckoutOptions.css";
import { StateContext, ValueContext } from "./MyContext";

function CheckoutOptions({ setToggleCheckout }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  return (
    <div className="flow-btns">
      <button>ADD TO BASKET</button>
      <button onClick={() => setToggleCheckout((old) => !old)}>BUY NOW</button>
    </div>
  );
}

export default CheckoutOptions;
