"use client";
import { createContext, useState } from "react";

export const ValueContext = createContext();
export const StateContext = createContext();

export const NumberProvider = ({ children }) => {
  const [myValue, setMyValue] = useState({
    tickets: 0,
    tents: {
      one: 0,
      two: 0,
      three: 0,
    },
    campingArea: null,
  });

  return (
    <StateContext.Provider value={setMyValue}>
      <ValueContext.Provider value={myValue}>{children}</ValueContext.Provider>
    </StateContext.Provider>
  );
};
