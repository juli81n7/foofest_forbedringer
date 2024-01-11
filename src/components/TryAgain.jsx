"use client";

import Button from "./Button";
import "@/styles/TryAgain.css";

export default function TryAgain() {
  return (
    <>
      <div className="tryagaincontainer">
        <div>
          <h1>
            Oh no! <br /> Your reservation timer expired :(
          </h1>
          <p>Reserve your tickets again by clicking below; this time you will totally make it!</p>
        </div>
        <Button href={"/Tickets"} btntext={"Get Tickets"}></Button>
      </div>
    </>
  );
}
