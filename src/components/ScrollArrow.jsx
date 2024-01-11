"use client";
import { useState, useEffect } from "react";
import "../styles/Tickets.css";

function ScrollArrow() {
  const [hideArrows, setHideArrows] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 240;
      if (window.scrollY > scrollThreshold) {
        setHideArrows(true);
      } else {
        setHideArrows(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`arrowScroll ${hideArrows ? "hide-arrows" : ""}`}>
      <div className="arrow"></div>
      <div className="arrow"></div>
      <div className="arrow"></div>
    </div>
  );
}

export default ScrollArrow;
