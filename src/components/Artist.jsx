import "../styles/Artist.css";
import Button from "./Button";
import SecondaryBtn from "./SecondaryBtn";

function Artist(props) {
  return (
    <div className="artist-container">
      <div className="artist">
        <h3>{props.artistName}</h3>
        <p>{props.artistTime}</p>
      </div>
      <SecondaryBtn secbtntext="View more"></SecondaryBtn>
    </div>
  );
}

export default Artist;
