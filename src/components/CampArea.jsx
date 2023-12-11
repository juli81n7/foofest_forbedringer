import { useEffect, useState } from "react";
import "../styles/CampArea.css";
import { set } from "react-hook-form";

function CampArea({ areaName, status, totalTentSpots }) {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Update isDisabled when totalTentSpots or status changes
    setIsDisabled(totalTentSpots > status);
  }, [totalTentSpots, status]);

  return (
    <label htmlFor={areaName} className="radio-label">
      <input type="radio" id={areaName} name="radio-group" className="custom-radio" disabled={isDisabled} checked={!isDisabled} />
      <p className="spots-left">{status} tent spots</p>
      {totalTentSpots > status && <p className="area-too-small">Not enough spots</p>}
      <p className="area-name">{areaName}</p>
      {status < 10 && <p className="area-few">Few Left</p>}
      {status === 0 && <p className="area-out">Sold Out</p>}
    </label>

    // <div className="camp-area">
    //   <p className="spots-left">{status} tent spots</p>
    //   {totalTentSpots > status && <p className="area-too-small">Not enough spots</p>}
    //   <p className="area-name">{areaName}</p>
    //   {status < 10 && <p className="area-few">Few Left</p>}
    //   {status === 0 && <p className="area-out">Sold Out</p>}
    // </div>
  );
}

export default CampArea;
