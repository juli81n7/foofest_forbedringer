import "../styles/ChooseCamp.css";
import CampArea from "./CampArea";
import React, { useEffect, useState } from "react";

// const { spots } = lazy(() => import("@/app/data"));

function ChooseCamp({ totalTentSpots }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function getSpots() {
      const res3 = await fetch(process.env.NEXT_PUBLIC_HOST + "/available-spots", {
        headers: {},
      });
      const spots = await res3.json();
      setSpots(spots);
    }
    getSpots();
  }, []);

  console.log(spots);
  return (
    <div className="choose-wrapper">
      <h2>CHOOSE YOUR AREA</h2>
      <div className="camp-box">
        {spots.map((spot, index) => (
          <CampArea totalTentSpots={totalTentSpots} status={spot.available} areaName={spot.area} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ChooseCamp;
