"use client";
import { createContext, useState } from "react";

export const ValueContext = createContext();
export const StateContext = createContext();

export const themeHandler = (props) => {
  const [darkMode, setDarkmode] = useState(false);
  return (
    <StateContext.Provider value={setDarkmode}>
      <ValueContext.Provider value={darkMode}>{children}</ValueContext.Provider>
    </StateContext.Provider>
  );
};
