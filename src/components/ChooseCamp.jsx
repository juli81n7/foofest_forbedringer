import "../styles/ChooseCamp.css";
import CampArea from "./CampArea";
function ChooseCamp() {
  return (
    <div className="choose-wrapper">
      <h2>CHOOSE YOUR AREA</h2>
      <div className="camp-box">
        <CampArea status="Few left" areaName="SVARTHEIM" />
        <CampArea status="Sold out" areaName="NILFHEIM" />
        <CampArea areaName="MUSPELHEIM" />
        <CampArea areaName="ALFHEIM" />
      </div>
    </div>
  );
}

export default ChooseCamp;
