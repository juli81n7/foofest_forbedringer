"use client";
import { useContext, useState } from "react";
import { ValueContext } from "./MyContext";
import ParticipantComp from "./ParticipantComp";
import FinalCheckout from "./FinalCheckout";
import Button from "@/components/Button";
import Thanks from "./Thanks";
import "../styles/BasketContent.css";
export default function BasketContent() {
  const [toggleCheckout, setToggleCheckout] = useState(false);
  const state = useContext(ValueContext);
  return (
    <>
      {!state.regular && !state.vip ? (
        <div className="whoopsies">
          {" "}
          <h2 className="whoopsies-heading">Whoopsies</h2>
          <p>You have not reserved any tickets yet. What are you waiting for?</p>
          <div className="btn_container">
            <Button href="/TicketFlow" btntext="Get Tickets" />
          </div>{" "}
        </div>
      ) : state.checkoutPush === false ? (
        <ParticipantComp setToggleCheckout={setToggleCheckout}></ParticipantComp>
      ) : (
        <FinalCheckout></FinalCheckout>
      )}
      <Thanks></Thanks>
    </>
  );
}
