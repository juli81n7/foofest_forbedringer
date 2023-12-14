"use client";

import { useContext } from "react";
import { useTimer } from "react-timer-hook";

import "../styles/MyTimer.css";
import { TimerContext, SetTimerContext } from "./MyContext";

export default function MyTimer({ timeStamp }) {
  const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    timeStamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="timer-container">
      {isRunning && (
        <div className="time-left">
          {" "}
          <span>{String(minutes).padStart(2, "0")}</span>:<span>{String(seconds).padStart(2, "0")}</span>
        </div>
      )}
      <div className="timer-buttons">
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const newTimeStamp = new Date(Date.now() + 300 * 1000);
            restart(newTimeStamp, false);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
