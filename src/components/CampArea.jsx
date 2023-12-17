import { useContext, useEffect, useState } from "react";
import { StateContext, ValueContext } from "./MyContext";

import "../styles/CampArea.css";

function CampArea({ areaName, status, selectedArea, onAreaSelect }) {
  const state = useContext(ValueContext);
  const dispatch = useContext(StateContext);
  const [isDisabled, setIsDisabled] = useState(false);

  const totalTentspots = state.tents.one + state.tents.two * 2 + state.tents.three * 3;

  useEffect(() => {
    if (totalTentspots > status || status === 0) {
      setIsDisabled(true);
      if (state.campingArea === areaName) {
        dispatch((old) => {
          const copy = JSON.parse(JSON.stringify(old));
          copy.campingArea = null;
          return copy;
        });
      }
    } else {
      setIsDisabled(false);
    }
  }, [totalTentspots, status, state.campingArea, areaName, dispatch]);

  const handleChange = () => {
    onAreaSelect(areaName);
  };

  return (
    <label htmlFor={areaName} className="radio-label">
      <input type="radio" id={areaName} name="radio-group" className="custom-radio" disabled={isDisabled} checked={state.campingArea === areaName && !isDisabled} onChange={handleChange} />
      <p className="spots-left">{status} tent spots</p>
      {totalTentspots > status && <p className="area-too-small">Not enough spots</p>}
      <p className="area-name">{areaName}</p>
      {status < 10 && status > 0 && <p className="area-few">Few Left</p>}
      {status === 0 && <p className="area-out">Sold Out</p>}
    </label>
  );
}

export default CampArea;
