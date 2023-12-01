import "../styles/RecommendedArtist.css";
import Image from "next/image";

function RecommendedArtist(props) {
  return (
    <div className="recommended-artist-container">
      <img src="/ukendt.jpg" alt="Picture of the very well known hiphop artist group, unknown artist"></img>
      <div className="recommended-artist">
        <h3>{props.artistName}</h3>
        <p>{props.artistTime}</p>
      </div>
    </div>
  );
}

export default RecommendedArtist;
