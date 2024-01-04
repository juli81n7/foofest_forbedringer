"use client";

import Link from "next/link";
import "../styles/Artist.css";

import SecondaryBtn from "./SecondaryBtn";
import LikeBtn from "./LikeBtn";

function Artist(props) {
  if (props.artistName === "break") {
    return;
  }
  const slug = props.bands.find((band) => band.name === props.artistName).slug;

  return (
    <div className="item">
      <div className="myLikeBtnContainer">
        <LikeBtn name={props.artistName} color="orange"></LikeBtn>
      </div>
      <Link href={`ArtistSingleView/${slug}`} className="artist-container">
        <div className="artist">
          <h3>{props.artistName}</h3>
          {/* <h5>{props.artistDay}</h5> */}
          <p>{props.artistTime}</p>
        </div>
        <SecondaryBtn secbtntext="View more"></SecondaryBtn>
      </Link>
    </div>
  );
}

export default Artist;
