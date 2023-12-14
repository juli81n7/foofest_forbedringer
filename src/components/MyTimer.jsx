"use client";

import { useEffect, useContext } from "react";
import { useTimer } from "react-timer-hook";

import "../styles/MyTimer.css";
import { TimerContext, SetTimerContext } from "./MyContext";

export default function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });
  const timerState = useContext(TimerContext);
  const dispatchTimer = useContext(SetTimerContext);

  useEffect(() => {
    if (!timerState.timeRunning) {
      pause();
    }
  }, [timerState.timeRunning]);
  useEffect(() => {
    if (timerState.timeRunning) {
      start();
    }
  }, [timerState.timeRunning]);

  return (
    <div className="timer-container">
      {isRunning && (
        <div className="time-left">
          {" "}
          <span>{String(minutes).padStart(2, "0")}</span>:<span>{String(seconds).padStart(2, "0")}</span>
        </div>
      )}
      {/*  <div className="timer-buttons">
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const newTimeStamp = new Date(Date.now() + timerState.time * 1000);
            restart(newTimeStamp, false);
          }}
        >
          Restart
        </button>
      </div> */}
    </div>
  );
}
