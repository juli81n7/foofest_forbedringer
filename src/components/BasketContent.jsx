"use client";
import { useContext, useState } from "react";
import { ValueContext } from "./MyContext";
import ParticipantComp from "./ParticipantComp";
import FinalCheckout from "./FinalCheckout";
import Thanks from "./Thanks";
export default function BasketContent() {
  const [toggleCheckout, setToggleCheckout] = useState(false);
  const state = useContext(ValueContext);
  return (
    <>
      {state.regular === 0 ? <p>Beklager din nar, læg noget i kurven!</p> : state.checkoutPush === false ? <ParticipantComp setToggleCheckout={setToggleCheckout}></ParticipantComp> : <FinalCheckout></FinalCheckout>}
      <Thanks></Thanks>
    </>
  );
}
