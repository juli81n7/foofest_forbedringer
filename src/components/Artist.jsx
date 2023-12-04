"use client";

import Link from "next/link";
import "../styles/Artist.css";

import SecondaryBtn from "./SecondaryBtn";

function Artist(props) {
  if (props.artistName === "break") {
    return;
  }
  const slug = props.bands.find((band) => band.name === props.artistName).slug;

  return (
    <Link href={`ArtistSingleView/${slug}`} className="artist-container">
      <div className="artist">
        <h3>{props.artistName}</h3>
        <h5>{props.artistDay}</h5>
        <h5>{props.artistTime}</h5>
      </div>
      <SecondaryBtn href={`/ArtistSingleView/${slug}`} secbtntext="View more"></SecondaryBtn>
    </Link>
  );
}

export default Artist;
