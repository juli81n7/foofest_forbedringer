import "../styles/ChooseCamp.css";
import CampArea from "./CampArea";
function ChooseCamp() {
  return (
    <div>
      <h2>CHOOSE YOUR AREA</h2>
      <div className="camp-box">
        <CampArea areaName="SVARTHEIM" />
        <CampArea areaName="NILFHEIM" />
        <CampArea areaName="MUSPELHEIM" />
        <CampArea areaName="ALFHEIM" />
      </div>
    </div>
  );
}

export default ChooseCamp;
