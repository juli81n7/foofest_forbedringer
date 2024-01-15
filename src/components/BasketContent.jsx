"use client";
import { useContext, useState } from "react";
import { ValueContext, OrderStatus, ContinueContext, UserContext } from "./MyContext";
import ParticipantComp from "./ParticipantComp";
import FinalCheckout from "./FinalCheckout";
import Whoopsies from "./Whoopsies";
import Login from "./Login";

import Button from "@/components/Button";
import Thanks from "./Thanks";
import "../styles/BasketContent.css";
export default function BasketContent() {
  const [toggleCheckout, setToggleCheckout] = useState(false);
  const state = useContext(ValueContext);
  const usercontext = useContext(UserContext);
  const continueState = useContext(ContinueContext);
  const isordered = useContext(OrderStatus);

  return <>{!state.basketCount && !isordered ? <Whoopsies /> : !usercontext && !continueState ? <Login /> : state.checkoutPush === false && !isordered ? <ParticipantComp setToggleCheckout={setToggleCheckout}></ParticipantComp> : !isordered ? <FinalCheckout></FinalCheckout> : isordered ? <Thanks /> : null}</>;
}
