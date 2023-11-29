import "../styles/ArtistList.css";
import Artist from "./Artist";

function ArtistList(props) {
  return (
    <article className="artist-list">
      <div className="stage-details">
        <h3>{props.stageName} Stage name</h3>
        <p>{props.stageName} Stage name is the coolest stage in all of FooFest. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aut.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="artist-details">
        {/*  {props.artists.map((artist, index) => (
        <Artist artistName={artist.name} artistTime={artist.time} key={index} />
      ))} */}
        <Artist artistName="Kunsternavn" artistTime="11:30"></Artist>
        <Artist artistName="Kunsternavn" artistTime="11:30"></Artist>
        <Artist artistName="Kunsternavn" artistTime="11:30"></Artist>
        <Artist artistName="Kunsternavn" artistTime="11:30"></Artist>
        <Artist artistName="Kunsternavn" artistTime="11:30"></Artist>
        <Artist artistName="Kunsternavn" artistTime="11:30"></Artist>
      </div>
    </article>
  );
}

export default ArtistList;
