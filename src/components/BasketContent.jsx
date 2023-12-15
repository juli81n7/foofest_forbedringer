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
      {state.regular && state.vip === 0 ? <p>You haven't reserved any tickets yet. What are you waiting for?</p> : state.checkoutPush === false ? <ParticipantComp setToggleCheckout={setToggleCheckout}></ParticipantComp> : <FinalCheckout></FinalCheckout>}
      <Thanks></Thanks>
    </>
  );
}
