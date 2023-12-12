import { useEffect, useState } from "react";
import "../styles/CampArea.css";
import { set } from "react-hook-form";

function CampArea({ areaName, status, totalTentSpots, onSelectionChange }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isChecked, setIsChecked] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // holder øje med tentspots og status
    if (totalTentSpots > status || status === 0) {
      setIsDisabled(true);
      setIsChecked(false);
    } else {
      setIsDisabled(false);
    }
  }, [totalTentSpots, status]);

  // const handleSelectionChange = () => {
  //   if (!isDisabled) {
  //     onSelectionChange(areaName);
  //   }
  // };

  return (
    <label htmlFor={areaName} className="radio-label">
      <input
        type="radio"
        id={areaName}
        name="radio-group"
        className="custom-radio"
        disabled={isDisabled}
        // checked={isChecked}
        // onChange={handleSelectionChange}
      />
      <p className="spots-left">{status} tent spots</p>
      {totalTentSpots > status && <p className="area-too-small">Not enough spots</p>}
      <p className="area-name">{areaName}</p>
      {status < 10 && <p className="area-few">Few Left</p>}
      {status === 0 && <p className="area-out">Sold Out</p>}
    </label>
  );
}

export default CampArea;
