"use client";
import React from "react";
import { useContext } from "react";
import { ValueContext } from "./MyContext";
import ParticipantComp from "./ParticipantComp";
export default function BasketContent() {
  const state = useContext(ValueContext);
  return <>{state.regular === 0 ? <p>Beklager din nar, læg noget i kurven!</p> : <ParticipantComp></ParticipantComp>}</>;
}
