import "../styles/Artist.css";

import SecondaryBtn from "./SecondaryBtn";

function Artist(props) {
  return (
    <div className="artist-container">
      <div className="artist">
        <h3>{props.artistName}</h3>
        <h5>{props.artistDay}</h5>
        <h5>{props.artistTime}</h5>
      </div>
      <SecondaryBtn secbtntext="View more"></SecondaryBtn>
    </div>
  );
}

export default Artist;
