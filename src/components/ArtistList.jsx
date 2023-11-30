import "../styles/ArtistList.css";
import Artist from "./Artist";

function ArtistList(props) {
  return (
    <article className="artist-list">
      <div className="stage-details">
        <h2 className="artisth2">{props.stageName} Stage name</h2>
        <p>{props.stageName} Stage name is the coolest stage in all of FooFest. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aut.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="artist-details">
        {/*  {props.artists.map((artist, index) => (
        <Artist artistName={artist.name} artistTime={artist.time} key={index} />
      ))} */}
        <Artist artistName="ukendt kunstner" artistDay="Fri" artistTime="11:30"></Artist>
        <Artist artistName="ukendt kunstner" artistDay="Fri" artistTime="11:30"></Artist>
        <Artist artistName="ukendt kunstner" artistDay="Fri" artistTime="11:30"></Artist>
        <Artist artistName="ukendt kunstner" artistDay="Fri" artistTime="11:30"></Artist>
        <Artist artistName="ukendt kunstner" artistDay="Fri" artistTime="11:30"></Artist>
        <Artist artistName="ukendt kunstner" artistDay="Fri" artistTime="11:30"></Artist>
        <Artist artistName="ukendt kunstner" artistDay="Fri" artistTime="11:30"></Artist>
      </div>
    </article>
  );
}

export default ArtistList;
