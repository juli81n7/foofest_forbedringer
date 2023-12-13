"use client";

import "../styles/ArtistList.css";
import Artist from "./Artist";

function ArtistList(props) {
  const stage = props.stageName;
  const dateToday = new Date();
  const weekdayToday = dateToday.getDay();
  const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const weekday = weekdays[weekdayToday];

  return (
    <article className="artist-list">
      <div className="stage-details">
        <h2 className="artisth2">{props.stageName}</h2>
        <p>{props.stageName} Stage name is the coolest stage in all of FooFest. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aut.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="artist-details">
        {props.schedule[stage][weekday].map((artist, index) => (
          <Artist bands={props.bands} artistName={artist.act} artistTime={artist.start + "-" + artist.end} key={index} />
        ))}
      </div>
    </article>
  );
}

export default ArtistList;
