"use client";

import Link from "next/link";
import "../styles/Artist.css";

import SecondaryBtn from "./SecondaryBtn";

function Artist(props) {
  const indexofband = props.bands.indexOf(props.bands.find((band) => band.name === props.artistName));
  const filteredBands = props.bands.filter((band) => band.name === props.artistName)[0];
  console.log(filteredBands);
  /*  console.log("Index:" + indexofband);
  console.log(props.bands[indexofband]);

  console.log(props.bands.find((band) => band.name === props.artistName)); */

  /*   const slug = props.bands.find((band) => band.name === props.artistName).slug;
   */ return (
    <Link href={`ArtistSingleView/page`} className="artist-container">
      <div className="artist">
        <h3>{props.artistName}</h3>
        <h5>{props.artistDay}</h5>
        <h5>{props.artistTime}</h5>
      </div>
      <SecondaryBtn href={`/ArtistSingleView/page`} secbtntext="View more"></SecondaryBtn>
    </Link>
  );
}

export default Artist;
