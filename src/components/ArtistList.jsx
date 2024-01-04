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
        <div>
          <h3>Todays program</h3>
          <h2 className={"artisth2 " + props.stageName}>{props.stageName}</h2>
        </div>
        <p>
          {props.stageName} is one of the coolest stages in all of FooFest. It's in the top 3 of our most visited stages and features some of the festivals most talented artists. Be sure to visit {props.stageName} during your stay!
        </p>
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
