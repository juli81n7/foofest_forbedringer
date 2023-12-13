"use client";
import { createContext, useState } from "react";

export const ValueContext = createContext();
export const StateContext = createContext();

export const UserContext = createContext();
export const SetUserContext = createContext();

export const ThemeContext = createContext();
export const setThemeContext = createContext();

export const NumberProvider = ({ children }) => {
  const [myValue, setMyValue] = useState({
    tickets: 0,
    tents: {
      one: 0,
      two: 0,
      three: 0,
    },
    campingArea: null,
    pushed: false,
  });

  const [myUser, setMyUser] = useState();
  /*    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    zip: "",
    phone: "",
    tickets: [],
    likedArtist: [], */

  const [darkMode, setDarkmode] = useState(false);


  return (
    <SetUserContext.Provider value={setMyUser}>
    <UserContext.Provider value={myUser}>
    <StateContext.Provider value={setMyValue}>
    <setThemeContext.Provider value={setDarkmode}>
    <ThemeContext.Provider value={darkMode}>
            <ValueContext.Provider value={myValue}>{children}</ValueContext.Provider>
            </ThemeContext.Provider>
          </setThemeContext.Provider>
            </StateContext.Provider>
          </UserContext.Provider>
        </SetUserContext.Provider>
  );
};
