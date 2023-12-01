import "../styles/RecommendedArtist.css";
import Image from "next/image";

function RecommendedArtist(props) {
  return (
    <div className="recommended-artist-container">
      <Image src="/ukendt.jpg" width={1728} height={632} alt="Picture of the very well known hiphop artist group, unknown artist"></Image>
    </div>
  );
}

export default RecommendedArtist;
