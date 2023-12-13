import { useContext, useEffect, useState } from "react";
import "../styles/CampArea.css";
import { set } from "react-hook-form";
import { ValueContext } from "./MyContext";

function CampArea({ areaName, status }) {
  const state = useContext(ValueContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isChecked, setIsChecked] = useState(null);
  const [selected, setSelected] = useState(null);
  const totalTentspots = state.tents.one + state.tents.two * 2 + state.tents.three * 3;

  useEffect(() => {
    // holder øje med tentspots og status
    if (totalTentspots > status || status === 0) {
      setIsDisabled(true);
      setIsChecked(false);
    } else {
      setIsDisabled(false);
    }
  }, [totalTentspots, status]);

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
      {totalTentspots > status && <p className="area-too-small">Not enough spots</p>}
      <p className="area-name">{areaName}</p>
      {status < 10 && <p className="area-few">Few Left</p>}
      {status === 0 && <p className="area-out">Sold Out</p>}
    </label>
  );
}

export default CampArea;
