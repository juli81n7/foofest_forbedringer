"use client";

import "../styles/LikeBtn.css";
import { UserContext, SetUserContext } from "./MyContext";
import React, { useState, useEffect, useContext } from "react";

function LikeBtn(props) {
  const SupabaseAccount = useContext(UserContext);
  const userDispatch = useContext(SetUserContext);

  let lists = [];

  const [like, setLike] = useState(false);

  useEffect(() => {
    if (SupabaseAccount) {

      lists = SupabaseAccount.likedArtists;

      const likedEvent = lists.find((item) => item.name === props.name);


      setLike(likedEvent ? true : false);
    } else {
      // Load liked events from localStorage on mount
      const likedEvents = JSON.parse(localStorage.getItem("liked")) || [];
      const likedEvent = likedEvents.find((obj) => obj.name === props.name);
      setLike(likedEvent !== undefined);
    }
  }, [props.name]);

  async function Patch(id, body) {

    let headersList = {
      Accept: "*/*",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4Y3FzdWtyc2xmbnJ5d3Zra21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDE1MzYsImV4cCI6MTk5NzUxNzUzNn0.q1lX-ubiMOiGU0SMT99lf7QauZ0wgy7dyaNSLxTobUg",
      "Content-Type": "application/json",
    };

    let objectForPatch = { likedArtists: body };

    let bodyContent = JSON.stringify(objectForPatch);

    let response = await fetch(`https://cxcqsukrslfnrywvkkml.supabase.co/rest/v1/login_info?id=eq.${id}`, {
      method: "PATCH",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();

  }

  function toggleLike() {
    setLike((old) => !old);
  }

  function handleLike(e) {
    toggleLike();

    if (SupabaseAccount) {
      lists = SupabaseAccount.likedArtists;

      if (lists.find((obj) => obj.name === props.name)) {
        const objWithNameIndex = lists.findIndex((obj) => obj.name === props.name);
        lists.splice(objWithNameIndex, 1);

        Patch(SupabaseAccount.id, lists);
        SupabaseAccount.likedArtists = lists;
        userDispatch(SupabaseAccount);

      } else {
        lists.push({ name: props.name });
        // patch til supabase

        Patch(SupabaseAccount.id, lists);
        SupabaseAccount.likedArtists = lists;
        userDispatch(SupabaseAccount);

      }
    } else if (localStorage.getItem("liked")) {
      lists = JSON.parse(localStorage.getItem("liked"));

      if (lists.find((obj) => obj.name === props.name)) {
        const objWithNameIndex = lists.findIndex((obj) => obj.name === props.name);
        lists.splice(objWithNameIndex, 1);
        localStorage.setItem("liked", JSON.stringify(lists));
      } else {
        lists.push({ name: props.name });
        localStorage.setItem("liked", JSON.stringify(lists));
      }
    } else {
      lists.push({ name: props.name });
      let lS = JSON.stringify(lists);
      localStorage.setItem("liked", lS);
    }
  }

  return (
    <button className={props.color}>
      <svg onClick={handleLike} className={like ? "active" : ""} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
        <g id="Layer_1-2" data-name="Layer 1">
          <polyline className="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18" />
        </g>
      </svg>
    </button>
  );
}

export default LikeBtn;
