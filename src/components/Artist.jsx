import "../styles/Artist.css";
import Button from "./Button";

function Artist(props) {
  return (
    <div className="artist-container">
      <div className="artist">
        <h3>{props.artistName}</h3>
        <p>{props.artistTime}</p>
      </div>
      <Button btntext="View more"></Button>
    </div>
  );
}

export default Artist;
