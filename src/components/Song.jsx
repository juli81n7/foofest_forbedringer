import "../styles/Song.css";

function Song(props) {
  return (
    <div className="song">
      <p>{props.name}</p>
      <p>Play</p>
    </div>
  );
}

export default Song;
