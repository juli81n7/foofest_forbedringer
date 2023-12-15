"use client";
import { createContext, useState } from "react";

export const ValueContext = createContext();
export const StateContext = createContext();

export const UserContext = createContext();
export const SetUserContext = createContext();

export const ThemeContext = createContext();
export const setThemeContext = createContext();

export const TimerContext = createContext();
export const SetTimerContext = createContext();

export const ReserveContext = createContext();
export const SetReserveContext = createContext();

export const SubmitData = createContext();
export const SetSubmitData = createContext();

export const NumberProvider = ({ children }) => {
  const [myValue, setMyValue] = useState({
    regular: 0,
    vip: 0,
    tents: {
      one: 0,
      two: 0,
      three: 0,
    },
    campingArea: null,
    greenCamping: false,
    pushed: false,
    checkoutPush: false,
  });
  const [submitData, setSubmitData] = useState();
  const [myUser, setMyUser] = useState();

  const [darkMode, setDarkmode] = useState(false);
  const [myTimer, setMyTimer] = useState({
    time: 0,
    timeRunning: false,
  });
  const [reserveID, setReserveID] = useState();

  return (
    <SetSubmitData.Provider value={setSubmitData}>
      <SubmitData.Provider value={submitData}>
        <SetReserveContext.Provider value={setReserveID}>
          <ReserveContext.Provider value={reserveID}>
            <SetTimerContext.Provider value={setMyTimer}>
              <TimerContext.Provider value={myTimer}>
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
              </TimerContext.Provider>
            </SetTimerContext.Provider>
          </ReserveContext.Provider>
        </SetReserveContext.Provider>
      </SubmitData.Provider>
    </SetSubmitData.Provider>
  );
};
