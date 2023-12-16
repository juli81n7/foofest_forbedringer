"use client";
import "../styles/Calender.css";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LikeBtn from "./LikeBtn";
function CalenderEvent(props) {
  let lists = [];
  const [like, setLike] = useState(false);

  useEffect(() => {
    // Load liked events from localStorage on mount
    const likedEvents = JSON.parse(localStorage.getItem("liked")) || [];
    const likedEvent = likedEvents.find((obj) => obj.eventName === props.name);
    setLike(likedEvent !== undefined);
  }, [props.name]);

  const start = props.start.slice(0, 2);
  const end = props.end.slice(0, 2);

  let myImage = props.img2;
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    // Load liked events from localStorage on mount
    const likedEvents = JSON.parse(localStorage.getItem("liked")) || [];
    const likedEvent = likedEvents.find((obj) => obj.eventName === props.name);
    setLike(likedEvent !== undefined);
  }, [props.name]);

  function toggleLike() {
    setLike((old) => !old);
  }

  function handleLike(e) {
    toggleLike();

    if (localStorage.getItem("liked")) {
      lists = JSON.parse(localStorage.getItem("liked"));

      if (lists.find((obj) => obj.eventName === props.name)) {
        const objWithNameIndex = lists.findIndex((obj) => obj.eventName === props.name);
        lists.splice(objWithNameIndex, 1);
        localStorage.setItem("liked", JSON.stringify(lists));
      } else {
        lists.push({ eventName: props.name });
        localStorage.setItem("liked", JSON.stringify(lists));
      }
    } else {
      lists.push({ eventName: props.name });
      let lS = JSON.stringify(lists);
      localStorage.setItem("liked", lS);
    }
  }

  return (
    <div className={`event start${start} end${end}`}>
      <Link href={`ArtistSingleView/${props.slug}`}>
        <div className="img_container">
          <Image width={200} height={200} src={props.img2.startsWith("http") ? props.img2 : process.env.NEXT_PUBLIC_HOST + "/logos/" + props.img2} alt={props.name} />
        </div>
      </Link>

      <div className="myLikeBtnContainer">
        <LikeBtn name={props.name} color="orange"></LikeBtn>
      </div>

      <Link className="text" href={`ArtistSingleView/${props.slug}`}>
        <p>{props.start + "-" + props.end}</p>
        <h4>{props.name}</h4>
      </Link>
    </div>
  );
}

export default CalenderEvent;
