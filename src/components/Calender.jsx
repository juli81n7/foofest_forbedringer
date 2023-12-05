"use client"

import React, { useState , useEffect } from "react";
import "../styles/Calender.css";
import CalenderEvent from "./CalenderEvent";
import FilterBtn from "@/components/FilterBtn";
import CalenderDay from "./CalenderDay";



const dateToday = new Date();
const weekdayToday = dateToday.getDay();
const weekdayst = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
const weekdayss = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const weekdayText = weekdayst[weekdayToday];
const weekdaystate = weekdayss[weekdayToday];
console.log("MIN DAYYYY", weekdayText)

function Calender(props) {
    const [day, setDay] = useState(weekdaystate);
    const [BtnName, setBtnName] = useState(weekdayText);


    function DaySetter(newDay) {
        setDay(newDay);
        console.log("Nu er dagen:", newDay)
      }
  
  console.log("DATAAAAA", props.schedule)
  let myDay = day;
  
console.log("dette er dataen til jotunheim om", BtnName, ":", props.schedule.Jotunheim.mon )

let Jotunheim = props.schedule.Jotunheim;

let jotenheimDay= Jotunheim[day];


let Midgard = props.schedule.Midgard;

let midgardDay= Midgard[day];

const Vanaheim = props.schedule.Vanaheim;
let vanaheimDay= Vanaheim[day];

    return (
        <main>
      <h1 className="programh1">Program</h1>
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
      <div className="day">
      
      <div className="now"></div>
      
      <CalenderDay day="mon" bands={props.bands} Jotunheim={Jotunheim.mon} Vanaheim={Vanaheim.mon} Midgard={Midgard.mon}/>
      <CalenderDay day="tue" bands={props.bands} Jotunheim={Jotunheim.tue} Vanaheim={Vanaheim.tue} Midgard={Midgard.tue}/>
      <CalenderDay day="wed" bands={props.bands} Jotunheim={Jotunheim.wed} Vanaheim={Vanaheim.wed} Midgard={Midgard.wed}/>
      <CalenderDay day="thu" bands={props.bands} Jotunheim={Jotunheim.thu} Vanaheim={Vanaheim.thu} Midgard={Midgard.thu}/>
      <CalenderDay day="fri" bands={props.bands} Jotunheim={Jotunheim.fri} Vanaheim={Vanaheim.fri} Midgard={Midgard.fri}/>
      <CalenderDay day="sat" bands={props.bands} Jotunheim={Jotunheim.sat} Vanaheim={Vanaheim.sat} Midgard={Midgard.sat}/>
      <CalenderDay day="sun" bands={props.bands} Jotunheim={Jotunheim.sun} Vanaheim={Vanaheim.sun} Midgard={Midgard.sun}/>
  

      



      </div>
      
      
      </div>
    </section>
    </main>

    
  );
}

export default Calender;
