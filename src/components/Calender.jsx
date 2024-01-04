"use client";

import React, { useState, useEffect } from "react";
import "../styles/Calender.css";

import FilterBtn from "@/components/FilterBtn";
import CalenderDay from "./CalenderDay";

const dateToday = new Date();
const weekdayToday = dateToday.getDay();
const weekdayst = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
const weekdayss = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const weekdayText = weekdayst[weekdayToday];
const weekdaystate = weekdayss[weekdayToday];

function Calender(props) {
  const [day, setDay] = useState("weekdaystate");

  const [BtnName, setBtnName] = useState(weekdayText);

  const [activeSection, setActiveSection] = useState(null);

  const [percentageOfDay, setPercentageOfDay] = useState(0);

  useEffect(() => {
    // Denne useEffect er skrevet med hjælp af Openais chatGPT of udregner nuværende tidspunkt på dagen en gang ved load i procent
    const currentDate = new Date();
    const totalMinutesInDay = 24 * 60;
    const elapsedMinutesInDay = currentDate.getHours() * 60 + currentDate.getMinutes();
    const percentage = (elapsedMinutesInDay / totalMinutesInDay) * 100;

    // Set the percentage in the component state
    setPercentageOfDay(percentage);
  }, []);

  function DaySetter(newDay) {
    setDay(newDay);

    changeBtnName(newDay);
  }
  function changeBtnName(newDay) {
    if (newDay === "mon") {
      setBtnName("Monday");
    }
    if (newDay === "tue") {
      setBtnName("Tuesday");
    }
    if (newDay === "wed") {
      setBtnName("Wednesday");
    }
    if (newDay === "thu") {
      setBtnName("Thursday");
    }
    if (newDay === "fri") {
      setBtnName("Friday");
    }
    if (newDay === "sat") {
      setBtnName("Saturday");
    }
    if (newDay === "sun") {
      setBtnName("Sunday");
    }
  }

  const handleScroll = () => {
    // Denne handleScroll er skrevet med hjælp af Openais chatGPT og hjælper os med at registrere hvilken af dagene der er på vist på skærmen det bruger vi til at highlighte dagen i vores filtebtn's
    const container = document.getElementById("myScrollerContainer");
    const sections = document.querySelectorAll(".calenderarea");

    let newActiveSection = null;

    sections.forEach((section) => {
      const sectionRect = section.getBoundingClientRect();

      if (sectionRect.left <= container.clientWidth / 2 && sectionRect.right >= container.clientWidth / 2) {
        newActiveSection = section.id;
      }
    });

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);

      if (newActiveSection !== null) {
        DaySetter(newActiveSection);
      }
    }
  };

  // Denne useEffect er skrevet med hjælp af Openais chatGPT og hjælper os med at lytte på scrolling på myscrollercontainer
  useEffect(() => {
    const container = document.getElementById("myScrollerContainer");
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Denne useeffect er skrevet med hjælp fra chatgpt og hjælper os med at scrolle vores container med #now id'et det gør den ved
    // sette scrollSnapType'en på scrollercontaineren til at være x mandatory i og derefter ige at vores id now skal scrolle into view - efter 500 mm sekunder skifter den igen til ikke at have nogen scroll snap type
    const containerElement = document.getElementById("myScrollerContainer");
    const targetElement = document.getElementById("now");

    if (containerElement && targetElement) {
      // Snap to the target element
      containerElement.style.scrollSnapType = "x mandatory";
      targetElement.scrollIntoView({ behavior: "smooth" });

      // After a short delay, reset scroll-snap-type to allow free scrolling
      setTimeout(() => {
        containerElement.style.scrollSnapType = "";
      }, 500); // Adjust the delay as needed
    }
  }, []);

  let Jotunheim = props.schedule.Jotunheim;

  let Midgard = props.schedule.Midgard;

  const Vanaheim = props.schedule.Vanaheim;

  return (
    <main>
      <h1 className="programh1">{props.title}</h1>
      <div className="filters">
        <FilterBtn link="#mon" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Monday" />
        <FilterBtn link="#tue" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Tuesday" />
        <FilterBtn link="#wed" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Wednsday" />
        <FilterBtn link="#thu" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Thursday" />
        <FilterBtn link="#fri" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Friday" />
        <FilterBtn link="#sat" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Saturday" />
        <FilterBtn link="#sun" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Sunday" />
      </div>

      <section className="calendar-container">
        <div className="scenes">
          <div className="scene">
            <h4>JOTUNHEIM</h4>
          </div>
          <div className="scene">
            <h4>MIDGARD</h4>
          </div>
          <div className="scene">
            <h4>VANAHEIM</h4>
          </div>
        </div>

        <div className="calender">
          <div id="myScrollerContainer" className="day">
            <CalenderDay personalProgram={props.personalProgram ? props.personalProgram : null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="mon" bands={props.bands} Jotunheim={Jotunheim.mon} Vanaheim={Vanaheim.mon} Midgard={Midgard.mon} />
            <CalenderDay personalProgram={props.personalProgram ? props.personalProgram : null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="tue" bands={props.bands} Jotunheim={Jotunheim.tue} Vanaheim={Vanaheim.tue} Midgard={Midgard.tue} />
            <CalenderDay personalProgram={props.personalProgram ? props.personalProgram : null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="wed" bands={props.bands} Jotunheim={Jotunheim.wed} Vanaheim={Vanaheim.wed} Midgard={Midgard.wed} />
            <CalenderDay personalProgram={props.personalProgram ? props.personalProgram : null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="thu" bands={props.bands} Jotunheim={Jotunheim.thu} Vanaheim={Vanaheim.thu} Midgard={Midgard.thu} />
            <CalenderDay personalProgram={props.personalProgram ? props.personalProgram : null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="fri" bands={props.bands} Jotunheim={Jotunheim.fri} Vanaheim={Vanaheim.fri} Midgard={Midgard.fri} />
            <CalenderDay personalProgram={props.personalProgram ? props.personalProgram : null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="sat" bands={props.bands} Jotunheim={Jotunheim.sat} Vanaheim={Vanaheim.sat} Midgard={Midgard.sat} />
            <CalenderDay personalProgram={props.personalProgram ? props.personalProgram : null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="sun" bands={props.bands} Jotunheim={Jotunheim.sun} Vanaheim={Vanaheim.sun} Midgard={Midgard.sun} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Calender;
