import "../styles/CampArea.css";

function CampArea({ areaName, status }) {
  return (
    <div className="camp-area">
      {areaName}
      <p className="area-status">{status}</p>
    </div>
  );
}

export default CampArea;
