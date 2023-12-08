import { useState } from "react";
import "../styles/CampArea.css";

function CampArea({ areaName, status, totalTentSpots }) {
  const [disable, setDisable] = useState(false);
  return (
    <div className="camp-area">
      <p className="spots-left">{status} tent spots</p>
      {totalTentSpots > status && <p className="area-too-small">Not enough spots</p>}
      <p className="area-name">{areaName}</p>
      {status < 10 && <p className="area-few">Few Left</p>}
      {status === 0 && <p className="area-out">Sold Out</p>}
    </div>
  );
}

export default CampArea;
