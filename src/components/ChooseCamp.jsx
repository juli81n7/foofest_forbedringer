import "../styles/ChooseCamp.css";
import CampArea from "./CampArea";
import { useEffect, useState } from "react";

// const { spots } = lazy(() => import("@/app/data"));

function ChooseCamp({ totalTentSpots, spots, setSpots }) {
  useEffect(() => {
    async function getSpots() {
      const res3 = await fetch(process.env.NEXT_PUBLIC_HOST + "/available-spots", {
        headers: {},
      });
      const spots = await res3.json();
      setSpots(spots);
    }
    getSpots();
  }, [setSpots]);

  return (
    <div className="choose-wrapper">
      <h2>CHOOSE YOUR AREA</h2>
      <div className="camp-box">
        {spots.map((spot, index) => (
          <CampArea key={index} totalTentSpots={totalTentSpots} status={spot.available} areaName={spot.area} />
        ))}
      </div>
    </div>
  );
}

export default ChooseCamp;
