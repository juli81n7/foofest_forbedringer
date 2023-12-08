import { useState } from "react";
import "../styles/CampArea.css";

function CampArea({ areaName, status, tickets }) {
  const [disable, setDisable] = useState(false);
  console.log("number of tickets is:", tickets);
  return (
    <div className="camp-area">
      <p>{areaName}</p>
      {status < 10 && <p className="area-few">Few Left</p>}
      {status === 0 && <p className="area-out">Sold Out</p>}
      {tickets > status && status > 0 && <p className="area-too-small">Too many tickets</p>}
    </div>
  );
}

export default CampArea;
