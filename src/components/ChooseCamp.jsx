import { useContext, useEffect } from "react";
import CampArea from "./CampArea";
import "../styles/ChooseCamp.css";
import { StateContext, ValueContext } from "./MyContext";

function ChooseCamp({ spots, setSpots, setButtonError }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);

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

  const onAreaSelect = (area) => {
    dispatch((old) => {
      const copy = JSON.parse(JSON.stringify(old));
      copy.campingArea = area;
      setButtonError(false);

      return copy;
    });
  };

  return (
    <div className="choose-wrapper">
      <h2>CHOOSE YOUR AREA</h2>
      <div className="camp-box">
        {spots.map((spot, index) => (
          <CampArea key={index} status={spot.available} areaName={spot.area} onAreaSelect={onAreaSelect} />
        ))}
      </div>
    </div>
  );
}

export default ChooseCamp;
